const fs = require('fs');

let listadoToDo = [];

const saveToDo = () => {
    let data = JSON.stringify(listadoToDo);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error(err);
        //else console.log(`datos del tarea guardados ${data}`);
    });
}

const loadToDo = () => {
    try {
        listadoToDo = require('../db/data.json');
    } catch(e){
        listadoToDo = [];
    }
}

const getAllToDo = () => {
    loadToDo();
    return listadoToDo;
}

const updateToDo = (desc, completado = true) => {
    loadToDo();
    let index = listadoToDo.findIndex(t => t.desc === desc);
    if(index >= 0){
        listadoToDo[index].completado = completado;
        saveToDo();
        return true;
    } else {
        return false;
    }
}

const crear = desc => {
    loadToDo();
    let toDoObj = {
        desc,
        completado: false
    };
    listadoToDo.push(toDoObj);
    saveToDo();
    return toDoObj;
}

const deleteToDo = desc => {
    loadToDo();
    let index = listadoToDo.findIndex(t => t.desc === desc);
    if(index >= 0){
        listadoToDo.splice(index, 1);
        saveToDo();
        return true;
    } else {
        return false;
    }
}

module.exports = {
    crear,
    getAllToDo,
    updateToDo,
    deleteToDo
}