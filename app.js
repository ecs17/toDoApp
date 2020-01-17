const argv = require('./config/yargs').argv;
const toDo = require('./todo/toDo');


let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = toDo.crear(argv.desc);
        console.log(tarea);
        break;
    case 'listar':
        let listToDo = toDo.getAllToDo();
        for(let tarea of listToDo){
            console.log('=========== Por Hacer =========');
            console.log(tarea.desc);
            console.log('Estado: ', tarea.completado);
            console.log('===============================');
        }
        break;
    case 'actualizar':
        let actualizado = toDo.updateToDo(argv.desc, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = toDo.deleteToDo(argv.desc);
        console.log(borrado);
        break;
    default:
        console.log('Comando invalido')
}

console.log();