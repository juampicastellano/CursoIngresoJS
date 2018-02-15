/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var dividendo;
    var divisor;
    var numeroUno
    var numeroDos
    
    var resultado;


    numeroUno= document.getElementById("numeroDividendo").value;
    numeroDos= document.getElementById("numeroDivisor").value;
    
    numeroDividendo =parseInt(numeroUno);
    numeroDivisor =parseInt(numeroDos);
    
    resultado=numeroDividendo%numeroDivisor;

    alert(resultado);	
     


    
}
