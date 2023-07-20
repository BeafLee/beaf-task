import fs from 'fs'; // Requiere el módulo 'fs' para manejo de archivos
const exportDataToJson = (data, filePath) => {
    const jsonData = JSON.stringify(data);
    fs.writeFileSync(filePath, jsonData);
};

const loadDataFromJsonFile = (filePath) => {
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(jsonData);
    return data;
};


import cron from 'node-cron';
// Programa una copia de seguridad todos los días a las 2:00 AM
cron.schedule('0 2 * * *', () => {
    // Lógica para exportar y cargar los datos
    exportDataToJson(data, filePath);
    uploadFileToDrive(filePath, fileName);
});


import { google } from 'googleapis';
const uploadFileToDrive = async (filePath, fileName) => {
    const auth = new google.auth.GoogleAuth({
        // Configura tus credenciales de autenticación
        keyFile: 'credentials.json',
        scopes: ['https://www.googleapis.com/auth/drive.file'],
    });

    const drive = google.drive({ version: 'v3', auth });
    const fileMetadata = { name: fileName };
    const media = { mimeType: 'application/json', body: fs.createReadStream(filePath) };

    try {
        const response = await drive.files.create({
            requestBody: fileMetadata,
            media,
        });

        console.log('Archivo subido a Google Drive. ID de archivo:', response.data.id);
    } catch (error) {
        console.error('Error al subir el archivo a Google Drive:', error);
    }
};


const downloadFileFromDrive = async (fileId, destinationPath) => {
    const auth = new google.auth.GoogleAuth({
        // Configura tus credenciales de autenticación
        keyFile: 'credentials.json',
        scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    });

    const drive = google.drive({ version: 'v3', auth });

    try {
        const response = await drive.files.get({
            fileId,
            alt: 'media',
        }, { responseType: 'stream' });

        const dest = fs.createWriteStream(destinationPath);
        response.data.pipe(dest);

        return new Promise((resolve, reject) => {
            dest.on('finish', () => resolve());
            dest.on('error', (error) => reject(error));
        });
    } catch (error) {
        console.error('Error al descargar el archivo de Google Drive:', error);
    }
};


