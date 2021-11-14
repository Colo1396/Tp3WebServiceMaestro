package test;

import EnvioWsdl.Envio;
import EnvioWsdl.EnvioService;
import EnvioWsdl.EnvioService_Service;

public class TestWsdl {
	public static void main(String[] args) {
		EnvioService_Service envioService_service = new EnvioService_Service();
        EnvioService service = envioService_service.getEnvioServicePort();
        Envio envio = service.findById(1);
        int response = envio.getCodSeguimiento(); 
        System.out.println(response);
    }
}
