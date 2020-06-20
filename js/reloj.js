function obtenerHora() {
    let fecha = new Date();    //traer etiquetas html
    let pDiaSemana = document.getElementById('diaSemana'),
        pDia = document.getElementById('dia'),
        pMes = document.getElementById('mes'),
        pAnio = document.getElementById('anio'),
        pHora = document.getElementById('horas'),
        pMinutos = document.getElementById('minutos'),
        pSegundos = document.getElementById('segundos'),
        pAmPm = document.getElementById('ampm');    
        let diaSemanas = [ 'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado' ];    
        let meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio', 'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre' ];
    //asignar valores
    pDiaSemana.innerText = diaSemanas[fecha.getDay()];
    pDia.innerText = fecha.getDate();
    pMes.innerText = meses[fecha.getMonth()];
    pAnio.innerText = fecha.getFullYear();   
     if (fecha.getHours() > 12) {
        if (fecha.getHours() - 12 < 10) {
            pHora.innerText = '0' + (fecha.getHours() - 12);
        } else {
            pHora.innerText = fecha.getHours() - 12;
        }
    }   
     if(fecha.getHours() >=12){
        pAmPm.innerText = "PM"
      }else{
        pAmPm.innerText = "AM"
    }   
     if (fecha.getMinutes() < 10) {
        pMinutos.innerText = '0' + fecha.getMinutes();
    } else {
        pMinutos.innerText = fecha.getMinutes();
    }   
     if (fecha.getSeconds() < 10) {
        pSegundos.innerText = '0' + fecha.getSeconds();
    } else {
        pSegundos.innerText = fecha.getSeconds();
    }
}window.setInterval(obtenerHora,1000);