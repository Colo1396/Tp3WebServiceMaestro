package test;

import wsdl.EnvioWsdl.Envio;
import wsdl.EnvioWsdl.EnvioService;
import wsdl.EnvioWsdl.EnvioService_Service;
import wsdl.UsuarioWsdl.Usuario;
import wsdl.UsuarioWsdl.UsuarioService;
import wsdl.UsuarioWsdl.UsuarioService_Service;

public class UsuarioServiceTest {

	public static void main(String[] args) {
		UsuarioService_Service service = new UsuarioService_Service();
		UsuarioService usuario = service.getUsuarioServicePort();
		Usuario user=usuario.findById(2);
		System.out.println(user.getRazonSocial());

		EnvioService_Service envioService = new EnvioService_Service();
		EnvioService envioS = envioService.getEnvioServicePort();
		Envio envio= envioS.findById(1);
		System.out.println(envio.getCodSeguimiento());


		
	}

}
