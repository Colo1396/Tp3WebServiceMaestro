package com.soap.services;

import java.sql.SQLException;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebService;
import javax.xml.ws.RequestWrapper;

import com.soap.controllers.MedioDePagoController;
import com.soap.models.MedioDePago;


@WebService(serviceName = "MedioDePagoService")
public class MedioDePagoService {


	MedioDePagoController medioDePagoController = new MedioDePagoController();

	// Obtener todos los MediosDePago
	@WebMethod(operationName = "findAll")
	@RequestWrapper(className="com.soap.services.MedioDePagoService.findAll")
	public List<MedioDePago> findAll() {
		try {
			return medioDePagoController.findAll();
		} catch (SQLException ex) {
			Logger.getLogger(MedioDePagoService.class.getName()).log(Level.SEVERE, null, ex);
			return null;
		}
	}

	// Obtener un MedioDePago por su id
	@WebMethod(operationName = "findById")
	@RequestWrapper(className="com.soap.services.MedioDePagoService.findById")
	public MedioDePago findById(@WebParam(name = "id") int id) {
		try {
			return medioDePagoController.findById(id);
		} catch (SQLException ex) {
			Logger.getLogger(MedioDePagoService.class.getName()).log(Level.SEVERE, null, ex);
			return null;
		}
	}

	// Crear un nuevo MedioDePago
	@WebMethod(operationName = "create")
	@RequestWrapper(className="com.soap.services.MedioDePagoService.create")
	public String create(@WebParam(name = "medioDePago") MedioDePago medioDePago) {
		try {
			if (medioDePagoController.create(medioDePago)) {
				return "MedioDePago " + medioDePago.getNombre() + " ha sido creado correctamente.";
			}
			return "Error al crear el MedioDePago";
		} catch (SQLException ex) {
			Logger.getLogger(MedioDePagoService.class.getName()).log(Level.SEVERE, null, ex);
			return "Error al realizar la petición";
		}
	}

	// Actualizar un Cliente por su id
	@WebMethod(operationName = "update")
	@RequestWrapper(className="com.soap.services.MedioDePagoService.update")
	public MedioDePago update(@WebParam(name = "medioDePago") MedioDePago medioDePago) {
		try {
			MedioDePago medioDePagoUpdated = null;
			if (medioDePagoController.update(medioDePago)) {
				medioDePagoUpdated = medioDePagoController.findById(medioDePago.getIdMedioDePago());
			}
			return medioDePagoUpdated;
		} catch (SQLException ex) {
			Logger.getLogger(MedioDePagoService.class.getName()).log(Level.SEVERE, null, ex);
			return null;
		}
	}

	// Eliminar un MedioDePago por su id
	@WebMethod(operationName = "delete")
	@RequestWrapper(className="com.soap.services.MedioDePagoService.delete")
	public String delete(@WebParam(name = "id") int id) {
		try {
			String msg = "El medioDePago no se ha podido eliminar";
			if (medioDePagoController.delete(id)) {
				msg = "El medioDePago se ha eliminado correctamente";
			}
			return msg;
		} catch (SQLException ex) {
			Logger.getLogger(MedioDePagoService.class.getName()).log(Level.SEVERE, null, ex);
			return "Error al realizar la petición";
		}
	}


}
