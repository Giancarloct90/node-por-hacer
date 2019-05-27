// const argv = require('yargs').command().command().argv;
// const argv = require('./config/yargs');
const argv = require('./config/yargs').argv;
const colors = require('colors');
const {
    crearTarea,
    cargarDB,
    getListado,
    actualizar,
    borrar
} = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log(crearTarea(argv.descripcion));
        break;
    case 'listar':
        let listadoTareas = getListado();
        console.log(`======== Por hacer ========`.green);
        listadoTareas.forEach(tarea => {
            console.log('');
            console.log(`Tarea: ${tarea.descripcion}`);
            let state = '';
            if (tarea.completado) {
                state = 'Completado';
                console.log(`Estado : ${state.green}`);
            } else {
                state = 'Incompleto';
                console.log(`Estado : ${state.red}`);
            }
        });
        console.log("");
        console.log(`===========================`.green);
        break;
    case 'actualizar':
        actualizar(argv.descripcion, argv.completado);
        break;
    case 'borrar':
        console.log(borrar(argv.descripcion));
        break;
    default:
        console.log('Comando no es reconocido');
}