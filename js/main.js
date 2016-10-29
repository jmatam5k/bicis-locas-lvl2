function validateForm(){
	//variables globales:
	var nombre = document.getElementById("name");
	var apellido = document.getElementById("lastname");
	var email = document.getElementById("input-email").value;
	var pass = document.getElementById("input-password");
	var indice = document.getElementById("selector").selectedIndex;
	/*Paso1: Los campos nombre y apellido sólo deben permitir caracteres de la A-Z
	Para los campos nombre y apellido la primera letra debe ser mayúscula*/
	function usuario(){
		if( nombre.value == null || nombre.value.length == 0 || /^\s+$/.test(nombre.value) ) {
			//alert("Favor ingresar un nombre, sin espacios y/o números");
			var contenedor = document.getElementsByClassName("name-container")[0];
			var nombreSpan = document.createElement("span");
			var nodoAlerta = document.createTextNode("Favor ingresar un nombre, sin espacios y/o números");
			nombreSpan.appendChild(nodoAlerta);
			contenedor.appendChild(nombreSpan);
			return false;
		}
		else if(/^^[a-zA-Z]*$/.test(nombre.value) == false){
			//alert ("Favor ingresar solo letras, sin espacios en blanco");
			var contenedor = document.getElementsByClassName('lastname-container')[0];
			var nombreSpan = document.createElement('span');
			var nodoAlerta = document.createTextNode("Favor ingresar solo letras, sin espacios en blanco");
			nombreSpan.appendChild(nodoAlerta);
			contenedor.appendChild(nombreSpan);
			return true;
		}    
		else if(nombre.value.charAt(0).toUpperCase()!== nombre.value.charAt(0)){
			//alert ("Favor ingresar su Nombre con la primera letra en Mayúscula");
			return false;
		}
		if( apellido.value == null || apellido.value.length == 0 || /^\s+$/.test(apellido.value) ) {
			//alert("Favor ingresar un apellido, sin espacios y/o números");
			return false;
		}
		else if(/^^[a-zA-Z]*$/.test(apellido.value) == false){
			//alert ("Favor ingresar solo letras, sin espacios en blanco");
			return true;
		}
		else if(apellido.value.charAt(0).toUpperCase()!== apellido.value.charAt(0)){
			//alert ("Favor ingresar su Apellido con la primera letra en Mayúscula");
			return false;
		}
	}
	usuario();
	/*Paso2: Validar que el campo email tenga un formato válido. Ej: name@domain.com*/
	function correo(){
		if( email === null || email.length === 0 || /^\s+$/.test(email) ) {
			//alert("Campo de email en blanco, siga el formato válido. Ej: name@domain.com");
			return false;
		}
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if( !re.test(email) ) {
			//alert("Dirección de correo invalida, siga el formato válido. Ej: name@domain.com");
			return false;
		}
	}
	correo();
	/*Paso3: El campo password debe tener al menos 6 caracteres
	El campo password no puede ser igual a "password" ó "123456" ó "098754"*/
	function password(){
		if (pass.value.length < 6){
			//alert("Debes ingresar al menos 6 caracteres");
			return false;
		} else if (pass.value=="password"){
			//alert("Contraseña invalida");
			return false;	
		} else if (pass.value=="123456"){
			//alert("Contraseña invalida");
			return false;
		} else if (pass.value=="098754"){
			//alert("Contraseña invalida");
			return false;
		}else{
			return true;
		}
	}
	password();
	/*Paso4:El valor seleccionado de bicis, debe ser una de las opciones presentadas*/
	function seleccion(){
		if( indice == null || indice == 0 ) {
			//alert("No haz seleccionado una opción, favor escoge")
			return false;
		}
	}
	seleccion();
}