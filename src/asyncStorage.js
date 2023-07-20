import AsyncStorage from '@react-native-async-storage/async-storage';

const TASKS = 'tasks'
const TAGS = 'tags'

const storeTasks = async (value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(TASKS, jsonValue);
        console.log('Tareas guardadas con éxito.');
    } catch (e) {
        // saving error
        console.error('Error al guardar las tareas:', error);
    }
};

const getTasks = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem(TASKS);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
        console.error('Error al leer las tareas:', error);
    }
};

const addTask = async (value) => {
    try {
        taskList = await getTasks();
        taskList.push(value);
        await storeTasks(taskList);
    } catch (error) {
        console.error('Error al guardar la tarea:', error);
    }
};

const editTask = async (idx, value) => {
    try {
        taskList = await getTasks();
        taskList[idx] = value;
        await storeTasks(taskList);
    } catch (error) {
        console.error('Error al editar la tarea:', error);
    }
}

const deleteTask = async (value) => {
    try {
        taskList = await getTasks();
        taskList.splice(value, 1);
        await storeTasks(taskList);
    } catch (error) {
        console.error('Error al borrar la tarea:', error);
    }
};


//Funciones para las etiquetas

const storeTags = async (value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(TAGS, jsonValue);
        console.log('Etiquetas guardadas con éxito.');
    } catch (e) {
        // saving error
        console.error('Error al guardar las etiquetas:', error);
    }
};

const getTags = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem(TAGS);
        return jsonValue!= null? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
        console.error('Error al leer las etiquetas:', error);
    }
};

const addTag = async (value) => {
    try {
        tagList = await getTags();
        tagList.push(value);
        await storeTags(tagList);
    } catch (error) {
        console.error('Error al guardar la etiqueta:', error);
    }
};

const editTag = async (idx, value) => {
    try {
        tagList = await getTags();
        tagList[idx] = value;
        await storeTags(tagList);
    } catch (error) {
        console.error('Error al editar la etiqueta:', error);
    }
}

const deleteTag = async (value) => {
    try {
        tagList = await getTags();
        tagList.splice(value, 1);
        await storeTags(tagList);
    } catch (error) {
        console.error('Error al borrar la etiqueta:', error);
    }
};

export {
    storeTasks,
    getTasks,
    addTask,
    editTask,
    deleteTask,
    storeTags,
    getTags,
    addTag,
    editTag,
    deleteTag
};