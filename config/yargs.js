const desc = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de tarea por hacer'
};
const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}
const argv = require('yargs')
.command('crear', 'Crea un elemento por hacer', {
    desc
})
.command('actualizar', 'Actualiza el estado completado de una tarea', {
    desc,
    completado
})
.command('borrar', 'Borra un elemento de la lista de tareas', {
    desc
})
.help().argv;

module.exports = {
    argv
}

