var keys = {UP:38, DOWN:40, LEFT:37, RIGHT:39};
var zone = document.getElementById("dibujo");
var paper = zone.getContext("2d");
var posicion ={x:250,y:250};
var width = zone.width;
var height = zone.height;
var etiqueta = [];
var cuentaBoton = 0;
var pivote;
var movaux;
var color = "black";


document.addEventListener("keydown", presionarTecla);
document.addEventListener("keyup", soltarTecla);


function presionarTecla(evento)
{

	if (evento.keyCode == keys.UP || evento.keyCode == keys.DOWN || evento.keyCode  == keys.LEFT || evento.keyCode == keys.RIGHT)
	{

	  pivote = false;
		clearInterval(movaux);
		zone.style.backgroundColor = "black";
		cuentaBoton +=1;
		etiqueta[cuentaBoton] = evento.keyCode;
			if (etiqueta[cuentaBoton] == etiqueta[cuentaBoton-1])
			{
			etiqueta[cuentaBoton] = undefined;
			cuentaBoton -=1;
			}
		movimientos(evento.keyCode);
	}
	else
	{
		alert("Usa las flechas Mecolin UuUr");
	}
}


function soltarTecla(evento)
{

  if (evento.keyCode == keys.UP || evento.keyCode == keys.DOWN || evento.keyCode  == keys.LEFT || evento.keyCode == keys.RIGHT)

  {

        if (evento.keyCode == etiqueta[cuentaBoton])
		{
			pivote = true;
		}

		cuentaBoton -=1;


		for ( i = 0;i<etiqueta.length;i++)
			{
				if (evento.keyCode == etiqueta[i])
				{
					for( k = i;k<etiqueta.length;k++)
					{
					etiqueta[k] = etiqueta[k+1];
					}

				}
			}


		// Aqui deberia moverse como esta indefinidamente mientras este presionada alguna tecla pero
		// no conozco manera de controlar la velocidad de iteracion de un ciclo while ni de llamar a otro
	  // manejador de eventos si no es presionando nuevamente la tecla....
	  // La solucion momentanea es con set interval.
		// Quedara incompleto debido que al presionar arriba e izquierda bloquea la deteccion de una 3ra tecla
		// No solo flecha sino algunas letras tambien.

		if(pivote==true && cuentaBoton>2)
		{

		    movaux = setInterval(movimientoaux,30);


		}
		else if (pivote==true && cuentaBoton>1)
		{
			clearInterval(movaux);
			movaux = setInterval(movimientoaux,30);


		}
		else if (pivote==true && cuentaBoton>0)
		{
			clearInterval(movaux);
			movaux = setInterval(movimientoaux,30);


		}
		else
		{
			clearInterval(movaux);
		}

  }

}

function movimientoaux()
    {

	movimientos(etiqueta[cuentaBoton]);

	}

function movimientos(movimiento)
{

	switch(movimiento)
	{

		case keys.UP:


			if (etiqueta[cuentaBoton-1] == keys["RIGHT"])
			{
			dibujarLinea("red",posicion.x,posicion.y,posicion.x+10,posicion.y-10,paper);
			posicion.x+=10;
			posicion.y-=10;
			}
			else if (etiqueta[cuentaBoton-1] == keys["DOWN"])
			{
		    dibujarLinea("red",posicion.x,posicion.y,posicion.x,posicion.y,paper);
			}
			else if (etiqueta[cuentaBoton-1] == keys["LEFT"])
			{
		    dibujarLinea("red",posicion.x,posicion.y,posicion.x-10,posicion.y-10,paper);
	        posicion.x-=10;
	        posicion.y-=10;
			}
			else
			{
		    dibujarLinea("red",posicion.x,posicion.y,posicion.x,posicion.y-10,paper);
		    posicion.y -=10;
			}

		break;

		case keys.DOWN:


			if (etiqueta[cuentaBoton-1] == keys["LEFT"])
			{
		    dibujarLinea("red",posicion.x,posicion.y,posicion.x-10,posicion.y+10,paper);
	        posicion.x-=10;
	        posicion.y+=10;
			}
			else if (etiqueta[cuentaBoton-1] == keys["UP"])
			{
		    dibujarLinea("red",posicion.x,posicion.y,posicion.x,posicion.y,paper);
			}
			else if (etiqueta[cuentaBoton-1] == keys["RIGHT"])
			{
		    dibujarLinea("red",posicion.x,posicion.y,posicion.x+10,posicion.y+10,paper);
	        posicion.x+=10;
	        posicion.y+=10;
			}
			else
			{
	        dibujarLinea("red",posicion.x,posicion.y,posicion.x,posicion.y+10,paper);
	        posicion.y += 10;
		    }

		break;

		case keys.LEFT:

			if (etiqueta[cuentaBoton-1] == keys["UP"])
			{
		    dibujarLinea("red",posicion.x,posicion.y,posicion.x-10,posicion.y-10,paper);
	        posicion.x-=10;
	        posicion.y-=10;
			}
			else if (etiqueta[cuentaBoton-1] == keys["RIGHT"])
			{
		    dibujarLinea("red",posicion.x,posicion.y,posicion.x,posicion.y,paper);
		    }
			else if (etiqueta[cuentaBoton-1] == keys["DOWN"])
			{
		    dibujarLinea("red",posicion.x,posicion.y,posicion.x-10,posicion.y+10,paper);
	        posicion.x-=10;
	        posicion.y+=10;
			}
			else
			{
			dibujarLinea("red",posicion.x,posicion.y,posicion.x-10,posicion.y,paper);
			posicion.x-= 10;
			}


		break;

		case keys.RIGHT:

			if  (etiqueta[cuentaBoton-1] == keys["UP"])
			{
		    dibujarLinea("red",posicion.x,posicion.y,posicion.x+10,posicion.y-10,paper);
	        posicion.x+=10;
	        posicion.y-=10;
			}
			else if (etiqueta[cuentaBoton-1] == keys["LEFT"])
			{
		    dibujarLinea("red",posicion.x,posicion.y,posicion.x,posicion.y,paper);
			}
			else if (etiqueta[cuentaBoton-1] == keys["DOWN"])
			{
		    dibujarLinea("red",posicion.x,posicion.y,posicion.x+10,posicion.y+10,paper);
	        posicion.x+=10;
	        posicion.y+=10;
			}
			else
			{
			dibujarLinea("red",posicion.x,posicion.y,posicion.x+10,posicion.y,paper);
			posicion.x+=10;
			}

		break;

	    default:
	}

	limiteCuadro();

}


function limiteCuadro()
{
	if (posicion.x > width || posicion.x < 0 || posicion.y > height || posicion.y < 0)
	{


			color = (color == "red")? "black" : "red";
            zone.style.backgroundColor = color;

			if (posicion.x > width)
			{
				posicion.x = width;

			}
			else if ( posicion.x < 0)
			{
				posicion.x = 0;
			}

		    if (posicion.y > height)
			{
				posicion.y = height;
			}
			else if(posicion.y < 0)
			{
				posicion.y = 0;
			}

	}

}





function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal,lienzo)
{

    lienzo.beginPath();
    lienzo.strokeStyle = color;
	  lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();

}




//Forma de hacer la discliminacion de movimientos con if else (muy cutre).
/*if(evento.keyCode == 38)
	{
	 alert("arriba");

	}
    else if(evento.keyCode == keys["DOWN"])
	{
		alert("abajo");
	}
	else if(evento.keyCode == keys["LEFT"])
	{

		 alert("izquierda");
	}
	else if(evento.keyCode == keys["RIGHT"])
	{
		alert("derecha");

	}
	else
	{
	alert("Usa las flechas Mecolin");

	}
    */
