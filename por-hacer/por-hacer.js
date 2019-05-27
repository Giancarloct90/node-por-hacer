const fs = require('fs');

let listadoPorHacer = [];

let crearTarea = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    }
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

let guardarDB = () => {
    // con el comando JSON.Stringify convierte un objeto a json para poderlo guardar.
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('./db/data.json', data, err => {
        if (err) {
            console.log(`Error`, err);
        } else {
            console.log(`se Guardo con Exito`);
        }
    });

};

let cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

};

let getListado = () => {
    cargarDB();
    return listadoPorHacer;
};

let actualizar = (descripcion, completado) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

let borrar = (descripcion) => {
    cargarDB();
    index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });
    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }
};

module.exports = {
    crearTarea,
    cargarDB,
    getListado,
    actualizar,
    borrar
}