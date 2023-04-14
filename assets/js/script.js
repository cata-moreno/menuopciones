function evaluarEleccion(){

    //obtengo la referencia del elemento html 
    let laEleccionString = document.getElementById('cajaeleccion');

    //manipulamos
    let laEleccionInt = parseInt(laEleccionString.value);

    //evaluacion
    switch(laEleccionInt){
        case 1:
            alert('Usted eligio ver cual es el numero mayor');
            break;
        case 2:
            alert('Usted elegio sumar');
            break;
        case 3:
            alert('Usted eligión restar');
            break;
        case 4:
            alert('Usted eligió multiplicar');
            break;
        case 5: 
            alert('Usted eligió dividir');
            break;
        case 6:
            alert('Usted dicidió mostrar los números');
            break;
        case 7:
            alert('Usted eligió salir');
            break;
    } //fin switch
} //fin funcion

function activarIngresoDatos(){
    let laCajaIngreso = document.getElementById('seccionIngreso');

}