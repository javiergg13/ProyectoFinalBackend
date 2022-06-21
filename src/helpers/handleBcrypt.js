let texto = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
let alphabet = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ123';


const encrypt = (textPlain) => {
    let arrayHash = texto.split(' ', textPlain.length)
    let finalHash = ''
    for(let i = 0; i < textPlain.length; i++){
        arrayHash[i] += textPlain.charAt(i)
    }
    for(let hash of arrayHash){
        finalHash += cifrarCesar(hash)
    }
    return finalHash
}

const compare = (passwordPlain, hashPassword) => {
    return (hashPassword === encrypt(passwordPlain))
}

const cifrarCesar = (palabra) => {
    const clave = 3;
    let palabraCifrada = '';
    for(let i = 0; i < palabra.length; i++){
        let letraPalabra = palabra.charAt(i)
        let posicionAlfhabet = alphabet.indexOf(letraPalabra)
        palabraCifrada += alphabet.charAt(clave + posicionAlfhabet)
    }
    return palabraCifrada;
}

module.exports = { encrypt, compare }