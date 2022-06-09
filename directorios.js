const fs = require('fs');
const mes = ['Enero', 'Febrero', 'Marzo', 'Abril' ,'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const anio= ['2017', '2018', '2019', '2020', '2021','2022'];

if(fs.existsSync(anio+ '\\')){    
    console.log('La carpeta ya existe');
}

else{
    for(var i =0 ; i<anio.length ;i++){
        fs.mkdir(anio[i],function(err){        
            if(err){throw(err);}              
            console.log('la carpeta ha sido creada..');
        });    
        for(var m=0; m <mes.length;m++){
            fs.mkdir(anio[i]+'\\'+mes[m],function(err){
                console.log('se crearon los meses');
            })
            numdias= getDias(anio[i],mes[m]);
            for(var nd=1 ; nd<=numdias;nd++)
            {
                fs.writeFileSync(anio[i]+'\\'+mes[m]+'\\'+nd.toString()+'.txt',function(err){
                });
            }
        }
    }
}

function getDias(anioac,mesac){
    return new Date (anioac,mesac,0).getDate();
}
