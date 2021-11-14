const {EnvioService_Service} = require ("./EnvioWsdl"); 
//import EnvioService_Service from "./EnvioWsdl"; 
//import EnvioService_Service from "./EnvioWsdl/Envio"; 
//import EnvioService_Service from "./EnvioWsdl/EnvioService"; 
//import EnvioService_Service from "./EnvioWsdl/EnvioService_Service"; 

var envioService_service = new EnvioService_Service();
var service= new EnvioService();
var envio = new Envio();

service= envioService_service.getEnvioServicePort();
 envio = service.findById(1);

console.log(envio);



//---------EJEMPLO--------
//https://www.youtube.com/watch?v=vpirrqkm0h8
//https://www.youtube.com/watch?v=Q9fwkpxr3Dw
	//alert("hola mundo");

	/*	var nombre = "Pepe";
		var altura = 150;
		
		var concat= nombre + " " + altura;
		
		//document.write(nombre);
		var datos = document.getElementById("datos");
		
		//datos.innerHTML=concat;
		datos.innerHTML = `
        <div class="container p-4">
            <div class="row">
              <div class="col mx-auto">
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    No tiene noticias para ver debido a que no sigue a ndsasdsadsadingún usuario.
                </div>
              </div>
            </div>
          </div>
        `;	*/