package com.soap.services;

import java.sql.SQLException;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebService;
import javax.xml.ws.RequestWrapper;

import com.soap.controllers.MovHistoricoController;
import com.soap.models.MovHistorico;



@WebService(serviceName = "MovHistoricoService")
public class MovHistoricoService {
	MovHistoricoController movHistoricoController = new MovHistoricoController();

	// Obtener todos los movimientos
	@WebMethod(operationName = "findAll")
	@RequestWrapper(className="com.soap.services.MovHistoricoService.findAll")
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
	@RequestWrapper(className="com.soap.services.MovHistoricoService.findById")
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
	@RequestWrapper(className="com.soap.services.MovHistoricoService.create")
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
	@RequestWrapper(className="com.soap.services.MovHistoricoService.update")
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
	@RequestWrapper(className="com.soap.services.MovHistoricoService.delete")
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
	//------------------------------------------------------------------------------------
	@WebMethod(operationName = "pagarConTajeta")
	@RequestWrapper(className="com.soap.services.MovHistoricoService.pagarConTajeta")
	public String pagarConTajeta(@WebParam(name = "monto") double monto,@WebParam(name = "idUsuario") int idUsuario, 
			@WebParam(name = "idCuentaBancaria") int idCuentaBancaria,@WebParam(name = "idMediosPago") int idMediosPago,@WebParam(name = "idTarjeta") int idTarjeta) {
		try {
			if (movHistoricoController.pagarConTajeta( monto,  idUsuario,  idCuentaBancaria,  idMediosPago,  idTarjeta)) {
				return "Transaccion cobro por tarjeta ha sido creado correctamente.";
			}
			return "Error al crear el movimiento";
		} catch (SQLException ex) {
			Logger.getLogger(MovHistoricoService.class.getName()).log(Level.SEVERE, null, ex);
			return "Error al realizar la petición";
		}
	}
	//------------------------------------------------------------------------------------
		@WebMethod(operationName = "devolucionConTajeta")
	@RequestWrapper(className="com.soap.services.MovHistoricoService.devolucionConTajeta")
	public String devolucionConTajeta(@WebParam(name = "monto") double monto,@WebParam(name = "idUsuario") int idUsuario, 
			@WebParam(name = "idCuentaBancaria") int idCuentaBancaria,@WebParam(name = "idMediosPago") int idMediosPago,@WebParam(name = "idTarjeta") int idTarjeta) {
		try {
			if (movHistoricoController.devolucionConTajeta( monto,  idUsuario,  idCuentaBancaria,  idMediosPago,  idTarjeta)) {
				return "Transaccion de devolucion de tarjeta ha sido creado correctamente.";
			}
			return "Error al crear el movimiento";
		} catch (SQLException ex) {
			Logger.getLogger(MovHistoricoService.class.getName()).log(Level.SEVERE, null, ex);
			return "Error al realizar la petición";
		}
	}
	//------------------------------------------------------------------------------------
	//------------------------------------------------------------------------------------
}
