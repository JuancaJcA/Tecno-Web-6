let x = 0;
let y = 0;
let cuadradito = document.getElementById('cuadrado');
let misil= document.getElementById('misil');
function movimiento(event){
	if(event.keyCode == '39'){//derecha
		x= x + 50;
		cuadradito.style.left = x + 'px';
        }

	if(event.keyCode == '37'){//Izquierda
		x= x - 50;
		cuadradito.style.left = x +'px';

	}
	
	if(event.keyCode == '38'){//arriba
		y = y + 50;                               
		cuadradito.style.top = (-y) + 'px';
	}

	if(event.keyCode == '40'){//abajo
		y = y - 50;                            
		cuadradito.style.top = (-y) + 'px';
	}

	if(event.keyCode == '32'){//espacio
        misil.style.visibility='visible';
        misil.style.left = (x+100) + 'px';
        misil.style.top = (-y) + 'px';
        misil.classList.add('moviendo');
	}
}

window.onkeyup = movimiento;