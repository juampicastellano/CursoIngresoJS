function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

	while(respuesta=="si")

	{
		contador++;
		num=prompt("numero");
		num=parseInt(num);
	respuesta=prompt("quiere continuar");
	acumulador=acumulador+num;
	if(respuesta=="no")
	break; 

	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN