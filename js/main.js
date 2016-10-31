function validateForm(){
	//variables globales:
	var nombre = document.getElementById('name');
	var apellido = document.getElementById('lastname');
	var email = document.getElementById('input-email').value;
	var pass = document.getElementById('input-password').value;
	var indice = document.getElementsByTagName('select')[0].selectedIndex;
	var tw= document.getElementById('input-social').value;
	/*Paso1: Los campos nombre y apellido sólo deben permitir caracteres de la A-Z
	Para los campos nombre y apellido la primera letra debe ser mayúscula*/
	function nomBre(){
		if( nombre.value == null || nombre.value.length == 0 || /^\s+$/.test(nombre.value) ) {
			//alert("Favor ingresar un nombre, sin espacios y/o números");
			var contenedor = document.getElementsByClassName('name-container')[0];
			var nombreSpan = document.createElement('span');
			var nodoAlerta = document.createTextNode("Favor ingresar un nombre, sin espacios y/o números");
			nombreSpan.appendChild(nodoAlerta);
			contenedor.appendChild(nombreSpan);
			return false;
		}
		else if(/^^[a-zA-Z]*$/.test(nombre.value) == false){
			//alert ("Favor ingresar solo letras, sin espacios en blanco");
			var contenedor = document.getElementsByClassName('name-container')[0];
			var nombreSpan = document.createElement('span');
			var nodoAlerta = document.createTextNode("Favor ingresar solo letras, sin espacios en blanco");
			nombreSpan.appendChild(nodoAlerta);
			contenedor.appendChild(nombreSpan);
			return true;
		}    
		else if(nombre.value.charAt(0).toUpperCase()!== nombre.value.charAt(0)){
			//alert ("Favor ingresar su Nombre con la primera letra en Mayúscula");
			var contenedor = document.getElementsByClassName('name-container')[0];
			var nombreSpan = document.createElement('span');
			var nodoAlerta = document.createTextNode("Favor ingresar su Nombre con la primera letra en Mayúscula");
			nombreSpan.appendChild(nodoAlerta);
			contenedor.appendChild(nombreSpan);
			return false;
		}
	}
	nomBre();
	function apeLlido(){
		if( apellido.value == null || apellido.value.length == 0 || /^\s+$/.test(apellido.value) ) {
			//alert("Favor ingresar un apellido, sin espacios y/o números");
			var contenedor = document.getElementsByClassName('lastname-container')[0];
			var nombreSpan = document.createElement('span');
			var nodoAlerta = document.createTextNode("Favor ingresar un apellido, sin espacios y/o números");
			nombreSpan.appendChild(nodoAlerta);
			contenedor.appendChild(nombreSpan);
			return false;
		}
		else if(/^^[a-zA-Z]*$/.test(apellido.value) == false){
			//alert ("Favor ingresar solo letras, sin espacios en blanco");
			var contenedor = document.getElementsByClassName('lastname-container')[0];
			var nombreSpan = document.createElement('span');
			var nodoAlerta = document.createTextNode("Favor ingresar solo letras, sin espacios en blanco");
			nombreSpan.appendChild(nodoAlerta);
			contenedor.appendChild(nombreSpan);
			return false;
		}
		else if(apellido.value.charAt(0).toUpperCase()!== apellido.value.charAt(0)){
			//alert ("Favor ingresar su Apellido con la primera letra en Mayúscula");
			var contenedor = document.getElementsByClassName('lastname-container')[0];
			var nombreSpan = document.createElement('span');
			var nodoAlerta = document.createTextNode("La primera letra en Mayúscula");
			nombreSpan.appendChild(nodoAlerta);
			contenedor.appendChild(nombreSpan);
			return false;
		}
	}
	apeLlido();
	/*Paso2: Validar que el campo email tenga un formato válido. Ej: name@domain.com*/
	function correo(){
		if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email))){
			//alert("Campo de email en blanco, siga el formato válido. Ej: name@domain.com");
			var contenedor = document.getElementsByClassName('email-container')[0];
			var nombreSpan = document.createElement('span');
			var nodoAlerta = document.createTextNode("formato válido name@domain.com");
			nombreSpan.appendChild(nodoAlerta);
			contenedor.appendChild(nombreSpan);
			return false;
		}
	}
	correo();
	/*Paso3: El campo password debe tener al menos 6 caracteres
	El campo password no puede ser igual a "password" ó "123456" ó "098754"*/
	function clave(){
		if (pass === null || pass.length === 0 || pass.length<6 || pass == 'password' || pass == 123456 || pass == 098754){
			var contenedor = document.getElementsByClassName('form-group')[0];
			var nombreSpan = document.createElement('span');
			var nodoAlerta = document.createTextNode("Contraseña Invalida");
			nombreSpan.appendChild(nodoAlerta);
			contenedor.appendChild(nombreSpan);
			return false;
		}
	}
	clave();
	/*Paso4:El valor seleccionado de bicis, debe ser una de las opciones presentadas*/
	function seleccion(){
		if( indice == null || indice == 0 ) {
			//alert("No haz seleccionado una opción, favor escoge")
			var lista = document.getElementsByClassName('form-group input-box')[1].classList.add('indice')
			var contenedor = document.getElementsByClassName('indice')[0];
			var nombreSpan = document.createElement('span');
			var nodoAlerta = document.createTextNode("No haz seleccionado una opción, favor escoge");
			nombreSpan.appendChild(nodoAlerta);
			contenedor.appendChild(nombreSpan);
			return false;
		}
	}
	seleccion();
	function twitter(){
		if (tw== null || tw==0){
			var contenedor = document.getElementsByClassName('input-group')[0];
			var nombreSpan = document.createElement('span');
			var nodoAlerta = document.createTextNode("Debes completar este campo");
			nombreSpan.appendChild(nodoAlerta);
			contenedor.appendChild(nombreSpan);
			return false;
		}
	}
	twitter();
}