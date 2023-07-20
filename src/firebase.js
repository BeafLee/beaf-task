import firebase from 'firebase';
import 'firebase/firestore';

firebase.initializeApp(firebaseConfig); // Configura la información de tu proyecto Firebase

const db = firebase.firestore();

// Funciones para usuarios
const addUser = async (userData) => {
    try {
        const userRef = await db.collection('users').add(userData);
        console.log('Usuario registrado con éxito. ID de usuario:', userRef.id);
    } catch (error) {
        console.error('Error al registrar el usuario:', error);
    }
};

const editUser = async (userId, updatedUserData) => {
    try {
        await db.doc(`users/${userId}`).update(updatedUserData);
        console.log('Usuario actualizado con éxito.');
    } catch (error) {
        console.error('Error al actualizar el usuario:', error);
    }
};

const getUsers = async () => {
    try {
        const querySnapshot = await db.collection('users').get();
        const users = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log('Usuarios:', users);
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
    }
};

// Función para verificar un usuario durante el inicio de sesión
const verifyUser = async (email, password) => {
    try {
        const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
        const user = userCredential.user;
        console.log('Inicio de sesión exitoso. Usuario:', user);
        return user;
    } catch (error) {
        console.error('Error al verificar el usuario:', error);
        return null;
    }
};

const deleteUser = async (userId) => {
    try {
        await db.doc(`users/${userId}`).delete();
        console.log('Usuario eliminado con éxito.');
    } catch (error) {
        console.error('Error al eliminar el usuario:', error);
    }
};

// Funciones para tareas
const addUserTask = async (userId, taskData) => {
    try {
        const taskRef = await db.collection(`users/${userId}/tasks`).add(taskData);
        console.log('Tarea registrada con éxito. ID de tarea:', taskRef.id);
    } catch (error) {
        console.error('Error al registrar la tarea:', error);
    }
};

const editUserTask = async (userId, taskId, updatedTaskData) => {
    try {
        await db.doc(`users/${userId}/tasks/${taskId}`).update(updatedTaskData);
        console.log('Tarea actualizada con éxito.');
    } catch (error) {
        console.error('Error al actualizar la tarea:', error);
    }
};

const getUserTasks = async (userId) => {
    try {
        const querySnapshot = await db.collection(`users/${userId}/tasks`).get();
        const tasks = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log('Tareas del usuario:', tasks);
    } catch (error) {
        console.error('Error al obtener las tareas del usuario:', error);
    }
};

const deleteUserTask = async (userId, taskId) => {
    try {
        await db.doc(`users/${userId}/tasks/${taskId}`).delete();
        console.log('Tarea eliminada con éxito.');
    } catch (error) {
        console.error('Error al eliminar la tarea:', error);
    }
};

// Funciones para etiquetas
const addTag = async (userId, tagData) => {
    try {
        const tagRef = await db.collection(`users/${userId}/tags`).add(tagData);
        console.log('Etiqueta registrada con éxito. ID de etiqueta:', tagRef.id);
    } catch (error) {
        console.error('Error al registrar la etiqueta:', error);
    }
};

const deleteTag = async (userId, tagId) => {
    try {
        await db.doc(`users/${userId}/tags/${tagId}`).delete();
        console.log('Etiqueta eliminada con éxito.');
    } catch (error) {
        console.error('Error al eliminar la etiqueta:', error);
    }
};



// Función para editar una etiqueta
const editTag = async (userId, tagId, updatedTagData) => {
    try {
        await db.doc(`users/${userId}/tags/${tagId}`).update(updatedTagData);
        console.log('Etiqueta actualizada con éxito.');
    } catch (error) {
        console.error('Error al actualizar la etiqueta:', error);
    }
};


export {
    addUser,
    editUser,
    getUsers,
    verifyUser,
    deleteUser,
    addUserTask,
    editUserTask,
    getUserTasks,
    deleteUserTask,
    addTag,
    editTag,
    deleteTag,
};
