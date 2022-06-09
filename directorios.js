const fs = require('fs');
const mes = ['Enero', 'Febrero', 'Marzo', 'Abril' ,'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const anio= ['2017', '2018', '2019', '2020', '2021','2022'];
const dias =['lunes', 'martes','miercoles','jueves','viernes','sabado', 'domingo'];

if(fs.existsSync('2017')){    
    console.log('Las carpetas ya existen');
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
            });
            var numdias= new Date([i],[m],0).getDate();
            console.log(numdias);
            for(var nd=1 ; nd<=numdias;nd++)
            {
                fs.writeFileSync(anio[i] + '\\' +mes[m]+'\\'+ nd+'.txt','',function(err){
                });
            }
        }
    }
}

