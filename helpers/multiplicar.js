const fs = require('fs');

//forma que no permite control del reject en este caso

const crearArchivo = (multiplicador) => {
    return new Promise((resolve,reject)=>{      
        
        let contador = 1;
        let salida = '';
        console.clear();    

        for (contador=1;contador<=10;contador++){
            salida += `${multiplicador} x ${contador} = ${multiplicador*contador}\n`;
        }

        fs.writeFileSync(`tabla-${multiplicador}.txt`,salida); 

        resolve(`Tabla del ${multiplicador} creada.`);   
    });    
}

//mejor forma
const crearArchivo2 = async (multiplicador, listar, hasta) => {
    try{
        let contador = 1;
        let salida = '';  
        
        for (contador=1;contador<=hasta;contador++){
            salida += `${multiplicador} x ${contador} = ${multiplicador*contador}\n`;
        }

        fs.writeFileSync(`./Archivos/tabla-${multiplicador}.txt`,salida); 

        if(listar){       
            console.log(salida);             
        }
        
        return `Tabla del ${multiplicador} creada.`;  
    }catch(error){
        throw error;
    }    
}

module.exports = {
    crearArchivo: crearArchivo,
    crearArchivo2: crearArchivo2
}

// module.exports = {
//     crearArchivo
// }