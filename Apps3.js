let readline = require('readline')

let rl= readline.createInterface(
    process.stdin,
    process.stdout
)


rl.question('Ingrese su mensaje:',(mensaje)=>{
    const numCaracteres=mensaje.length
    console.log('EL numero de caracteres del mensaje es:' + numCaracteres)

})