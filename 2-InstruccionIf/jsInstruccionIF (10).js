function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero;
	numero=parseInt((Math.random()*(11-1))+1);
	if(numero>=9)

{
	alert("Excelente");

}

	else if (numero>=6)
	{
	 alert("muy bien");
	 
	}
else if (numero>=4)
{
	alert("bien");

}
else if (numero>=2)
{
	alert("mal");
}

else
{
	alert("desaprobado");
}




}//FIN DE LA FUNCIÓN