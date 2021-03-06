package com.soap.services;

import java.sql.SQLException;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebService;
import javax.jws.soap.SOAPBinding;
import javax.jws.soap.SOAPBinding.Use;
import javax.xml.ws.RequestWrapper;

import com.soap.controllers.EnvioController;
import com.soap.models.Envio;



@WebService(serviceName = "EnvioService")
@SOAPBinding(style= SOAPBinding.Style.DOCUMENT, use =Use.LITERAL)
public class EnvioService {
	EnvioController envioController = new EnvioController();

	// Obtener todos los Envios
	@WebMethod(operationName = "findAll")
	@RequestWrapper(className="com.soap.services.EnvioService.findAll")
	public List<Envio> findAll() {
		try {
			return envioController.findAll();
		} catch (SQLException ex) {
			Logger.getLogger(EnvioService.class.getName()).log(Level.SEVERE, null, ex);
			return null;
		}
	}

	// Obtener un envio por su id
	@WebMethod(operationName = "findById")
	@RequestWrapper(className="com.soap.services.EnvioService.findById")
	public Envio findById(@WebParam(name = "id") int id) {
		try {
			return envioController.findById(id);
		} catch (SQLException ex) {
			Logger.getLogger(EnvioService.class.getName()).log(Level.SEVERE, null, ex);
			return null;
		}
	}

	// Crear un nuevo envio
	@WebMethod(operationName = "create")
	@RequestWrapper(className="com.soap.services.EnvioService.create")
	public String create(@WebParam(name = "envio") Envio envio) {
		try {
			if (envioController.create(envio)) {
				return "Envio con codigo de seguimiento" + envio.getCodSeguimiento() + " ha sido creado correctamente.";
			}
			return "Error al crear el envio";
		} catch (SQLException ex) {
			Logger.getLogger(EnvioService.class.getName()).log(Level.SEVERE, null, ex);
			return "Error al realizar la petici?n";
		}
	}

	// Actualizar un envio por su id
	@WebMethod(operationName = "update")
	@RequestWrapper(className="com.soap.services.EnvioService.update")
	public Envio update(@WebParam(name = "envio") Envio envio) {
		try {
			Envio envioUpdated = null;
			if (envioController.update(envio)) {
				envioUpdated = envioController.findById(envio.getIdEnvio());
			}
			return envioUpdated;
		} catch (SQLException ex) {
			Logger.getLogger(EnvioService.class.getName()).log(Level.SEVERE, null, ex);
			return null;
		}
	}

	// Eliminar un envio por su id
	@WebMethod(operationName = "delete")
	@RequestWrapper(className="com.soap.services.EnvioService.delete")
	public String delete(@WebParam(name = "id") int id) {
		try {
			String msg = "El envio no se ha podido eliminar";
			if (envioController.delete(id)) {
				msg = "El envio se ha eliminado correctamente";
			}
			return msg;
		} catch (SQLException ex) {
			Logger.getLogger(EnvioService.class.getName()).log(Level.SEVERE, null, ex);
			return "Error al realizar la petici?n";
		}
	}
	//----------------------------------------------------------------------------------
	@WebMethod(operationName = "updateEstadoEnvio")
	@RequestWrapper(className="com.soap.services.EnvioService.updateEstadoEnvio")
	public Envio updateEstadoEnvio(@WebParam(name = "envio") Envio envio,@WebParam(name = "estado") String estado) {
		try {
			Envio envioUpdated = null;
			if (envioController.updateEstadoEnvio(envio,estado)) {
				envioUpdated = envioController.findById(envio.getIdEnvio());
			}
			return envioUpdated;
		} catch (SQLException ex) {
			Logger.getLogger(EnvioService.class.getName()).log(Level.SEVERE, null, ex);
			return null;
		}
	}
	//----------------------------------------------------------------------------------
	@WebMethod(operationName = "updateEstadoEnvioXId")
	@RequestWrapper(className="com.soap.services.EnvioService.updateEstadoEnvioXId")
	public Envio updateEstadoEnvioXId(@WebParam(name = "idEnvio") int idEnvio,@WebParam(name = "estado") String estado) {
		try {
			Envio envioUpdated = null;
			if (envioController.updateEstadoEnvioXId(idEnvio,estado)) {
				envioUpdated = envioController.findById(idEnvio);
			}
			return envioUpdated;
		} catch (SQLException ex) {
			Logger.getLogger(EnvioService.class.getName()).log(Level.SEVERE, null, ex);
			return null;
		}
	}
	//----------------------------------------------------------------------------------
	@WebMethod(operationName = "traerAllMisDespachos")
	@RequestWrapper(className="com.soap.services.EnvioService.traerAllMisDespachos")
	public List<Envio> traerAllMisDespachos(@WebParam(name = "idUsuario")int idUsuario, @WebParam(name = "orden")String orden) {
		try {
			return envioController.traerAllMisDespachos(idUsuario,orden);
		} catch (SQLException ex) {
			Logger.getLogger(EnvioService.class.getName()).log(Level.SEVERE, null, ex);
			return null;
		}
	}

	//----------------------------------------------------------------------------------
	@WebMethod(operationName = "traerAllMisPedidos")
	@RequestWrapper(className="com.soap.services.EnvioService.traerAllMisPedidos")
	public List<Envio> traerAllMisPedidos(@WebParam(name = "dni")int dni, @WebParam(name = "orden")String orden) {
		try {
			return envioController.traerAllMisPedidos(dni,orden);
		} catch (SQLException ex) {
			Logger.getLogger(EnvioService.class.getName()).log(Level.SEVERE, null, ex);
			return null;
		}
	}

	//----------------------------------------------------------------------------------
	@WebMethod(operationName = "solicitarCodSeguimiento")
	@RequestWrapper(className="com.soap.services.EnvioService.solicitarCodSeguimiento")
	public int solicitarCodSeguimiento(@WebParam(name = "dniDestinatario") int dniDestinatario,@WebParam(name = "dni") int dniOrigen,@WebParam(name = "domicilio") String domicilio) {
		try {
			Envio envio = envioController.solicitarCodSeguimiento(dniDestinatario,dniOrigen,domicilio);
			if (envio!=null) {
				System.out.println( "Envio con codigo de seguimiento" + envio.getCodSeguimiento() + " ha sido creado correctamente.");
				return envio.getCodSeguimiento();
			}
			return 0;
		} catch (SQLException ex) {
			Logger.getLogger(EnvioService.class.getName()).log(Level.SEVERE, null, ex);
			return 0;
		}
	}
	//-----------------------------------------------------------------------------------
	@WebMethod(operationName = "traerEstado")
	@RequestWrapper(className="com.soap.services.EnvioService.traerEstado")
	public String traerEstado(@WebParam(name = "codSeguimiento") int codSeguimiento,@WebParam(name = "dni") int dni) {
		try {
			return envioController.traerEstado(codSeguimiento,dni);
		} catch (SQLException ex) {
			Logger.getLogger(EnvioService.class.getName()).log(Level.SEVERE, null, ex);
			return null;
		}
	}

}
