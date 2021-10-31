package com.soap.services;

import java.sql.SQLException;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebService;

import com.soap.controllers.EnvioController;
import com.soap.models.Envio;



@WebService(serviceName = "EnvioService")
public class EnvioService {
	EnvioController envioController = new EnvioController();

	// Obtener todos los Envios
	@WebMethod(operationName = "findAll")
	public List<Envio> findAll() {
		try {
			return envioController.findAll();
		} catch (SQLException ex) {
			Logger.getLogger(EnvioController.class.getName()).log(Level.SEVERE, null, ex);
			return null;
		}
	}

	// Obtener un envio por su id
	@WebMethod(operationName = "findById")
	public Envio findById(@WebParam(name = "id") int id) {
		try {
			return envioController.findById(id);
		} catch (SQLException ex) {
			Logger.getLogger(EnvioController.class.getName()).log(Level.SEVERE, null, ex);
			return null;
		}
	}

	// Crear un nuevo envio
	@WebMethod(operationName = "create")
	public String create(@WebParam(name = "envio") Envio envio) {
		try {
			if (envioController.create(envio)) {
				return "Envio con codigo de seguimiento" + envio.getCodSeguimiento() + " ha sido creado correctamente.";
			}
			return "Error al crear el envio";
		} catch (SQLException ex) {
			Logger.getLogger(EnvioController.class.getName()).log(Level.SEVERE, null, ex);
			return "Error al realizar la petición";
		}
	}

	// Actualizar un envio por su id
	@WebMethod(operationName = "update")
	public Envio update(@WebParam(name = "envio") Envio envio) {
		try {
			Envio envioUpdated = null;
			if (envioController.update(envio)) {
				envioUpdated = envioController.findById(envio.getIdEnvio());
			}
			return envioUpdated;
		} catch (SQLException ex) {
			Logger.getLogger(EnvioController.class.getName()).log(Level.SEVERE, null, ex);
			return null;
		}
	}

	// Eliminar un envio por su id
	@WebMethod(operationName = "delete")
	public String delete(@WebParam(name = "id") int id) {
		try {
			String msg = "El envio no se ha podido eliminar";
			if (envioController.delete(id)) {
				msg = "El envio se ha eliminado correctamente";
			}
			return msg;
		} catch (SQLException ex) {
			Logger.getLogger(EnvioController.class.getName()).log(Level.SEVERE, null, ex);
			return "Error al realizar la petición";
		}
	}


}
