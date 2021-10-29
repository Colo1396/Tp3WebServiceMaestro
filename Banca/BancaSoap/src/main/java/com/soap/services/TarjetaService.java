package com.soap.services;

import java.sql.SQLException;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebService;

import com.soap.controllers.TarjetaController;
import com.soap.models.Tarjeta;



@WebService(serviceName = "TarjetaService")
public class TarjetaService {
	TarjetaController tarjetaController = new TarjetaController();

	// Obtener todos los Clientes
	@WebMethod(operationName = "findAll")
	public List<Tarjeta> findAll() {
		try {
			return tarjetaController.findAll();
		} catch (SQLException ex) {
			Logger.getLogger(TarjetaService.class.getName()).log(Level.SEVERE, null, ex);
			return null;
		}
	}

	// Obtener un Cliente por su id
	@WebMethod(operationName = "findById")
	public Tarjeta findById(@WebParam(name = "id") int id) {
		try {
			return tarjetaController.findById(id);
		} catch (SQLException ex) {
			Logger.getLogger(TarjetaService.class.getName()).log(Level.SEVERE, null, ex);
			return null;
		}
	}

	// Crear un nuevo Cliente
	@WebMethod(operationName = "create")
	public String create(@WebParam(name = "tarjeta") Tarjeta tarjeta) {
		try {
			if (tarjetaController.create(tarjeta)) {
				return "Tarjeta nro:" + tarjeta.getNroTarjeta() + " ha sido creado correctamente.";
			}
			return "Error al crear la tarjeta";
		} catch (SQLException ex) {
			Logger.getLogger(TarjetaService.class.getName()).log(Level.SEVERE, null, ex);
			return "Error al realizar la petición";
		}
	}

	// Actualizar un Cliente por su id
	@WebMethod(operationName = "update")
	public Tarjeta update(@WebParam(name = "tarjeta") Tarjeta tarjeta) {
		try {
			Tarjeta tarjetaUpdated = null;
			if (tarjetaController.update(tarjeta)) {
				tarjetaUpdated = tarjetaController.findById(tarjeta.getIdTarjeta());
			}
			return tarjetaUpdated;
		} catch (SQLException ex) {
			Logger.getLogger(TarjetaService.class.getName()).log(Level.SEVERE, null, ex);
			return null;
		}
	}

	// Eliminar un Cliente por su id
	@WebMethod(operationName = "delete")
	public String delete(@WebParam(name = "id") int id) {
		try {
			String msg = "La tarjeta no se ha podido eliminar";
			if (tarjetaController.delete(id)) {
				msg = "La tarjeta se ha eliminado correctamente";
			}
			return msg;
		} catch (SQLException ex) {
			Logger.getLogger(TarjetaService.class.getName()).log(Level.SEVERE, null, ex);
			return "Error al realizar la petición";
		}
	}
}
