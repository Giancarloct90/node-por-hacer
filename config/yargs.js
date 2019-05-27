const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la traea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Descripcion de la tarea '
};

const argv = require('yargs')
    .command('crear', 'Aniade tareas a la lista de tareas ', {
        descripcion
    })
    .command('actualizar', 'Actualiza elemento en la lista de tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar un elemento de Arreglo', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
};