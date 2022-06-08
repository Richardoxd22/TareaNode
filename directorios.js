const fs = require('fs');
const mes = ['Enero', 'Febrero', 'Marzo', 'Abril' ,'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const anio= ['2017', '2018', '2019', '2020', '2021','2022'];


fs.mkdir('\\',(err)=>{
    if(!err)
    {
        console.log('se creo esa carpeta')
    }
})

    for(var i =0 ; i<anio.length ;i++){
        fs.mkdir(anio[i],function(err){        
            if(err){throw(err);}              
            console.log('la carpeta ha sido creada..');
        });    
        for(var m=0; m <mes.length;m++){
            fs.mkdir(anio[i]+'\\'+mes[m],function(err){
                console.log('se crearon los meses');
            });   
        }
    }

function getDias(anioac,mesac){
    return new Date (anioac,mesac,0).getDate();
}