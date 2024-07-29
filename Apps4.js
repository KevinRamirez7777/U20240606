let readline = require('readline')

let rl= readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('Ingrese su mensaje:',(mensaje)=>{
    const cadena=mensaje.length
    console.log('EL numero de caracteres en mayuscula es:' + cadena)

})