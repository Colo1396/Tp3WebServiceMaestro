package com.soap.services;

import java.sql.SQLException;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebService;

import com.soap.controllers.MovHistoricoController;
import com.soap.models.MovHistorico;



@WebService(serviceName = "MovHistoricoService")
public class MovHistoricoService {
	MovHistoricoController movHistoricoController = new MovHistoricoController();

	// Obtener todos los movimientos
	@WebMethod(operationName = "findAll")
	public List<MovHistorico> findAll() {
		try {
			return movHistoricoController.findAll();
		} catch (SQLException ex) {
			Logger.getLogger(MovHistoricoService.class.getName()).log(Level.SEVERE, null, ex);
			return null;
		}
	}

	// Obtener un movimiento por su id
	@WebMethod(operationName = "findById")
	public MovHistorico findById(@WebParam(name = "id") int id) {
		try {
			return movHistoricoController.findById(id);
		} catch (SQLException ex) {
			Logger.getLogger(MovHistoricoService.class.getName()).log(Level.SEVERE, null, ex);
			return null;
		}
	}

	// Crear un nuevo movimiento
	@WebMethod(operationName = "create")
	public String create(@WebParam(name = "movHistorico") MovHistorico movHistorico) {
		try {
			if (movHistoricoController.create(movHistorico)) {
				return "Transaccion " + movHistorico.getIdTransaccion() + " ha sido creado correctamente.";
			}
			return "Error al crear el movimiento";
		} catch (SQLException ex) {
			Logger.getLogger(MovHistoricoService.class.getName()).log(Level.SEVERE, null, ex);
			return "Error al realizar la petición";
		}
	}

	// Actualizar un movimiento por su id
	@WebMethod(operationName = "update")
	public MovHistorico update(@WebParam(name = "movHistorico") MovHistorico movHistorico) {
		try {
			MovHistorico movHistoricoUpdated = null;
			if (movHistoricoController.update(movHistorico)) {
				movHistoricoUpdated = movHistoricoController.findById(movHistorico.getIdTransaccion());
			}
			return movHistoricoUpdated;
		} catch (SQLException ex) {
			Logger.getLogger(MovHistoricoService.class.getName()).log(Level.SEVERE, null, ex);
			return null;
		}
	}

	// Eliminar un movimiento por su id
	@WebMethod(operationName = "delete")
	public String delete(@WebParam(name = "id") int id) {
		try {
			String msg = "El movimiento no se ha podido eliminar";
			if (movHistoricoController.delete(id)) {
				msg = "El movimiento se ha eliminado correctamente";
			}
			return msg;
		} catch (SQLException ex) {
			Logger.getLogger(MovHistoricoService.class.getName()).log(Level.SEVERE, null, ex);
			return "Error al realizar la petición";
		}
	}
}
