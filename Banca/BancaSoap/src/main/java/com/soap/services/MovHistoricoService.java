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
	@RequestWrapper(className = "com.soap.services.MovHistoricoService.findAll")
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
	@RequestWrapper(className = "com.soap.services.MovHistoricoService.findById")
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
	@RequestWrapper(className = "com.soap.services.MovHistoricoService.create")
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
	@RequestWrapper(className = "com.soap.services.MovHistoricoService.update")
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
	@RequestWrapper(className = "com.soap.services.MovHistoricoService.delete")
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

	// ------------------------------------------------------------------------------------
	@WebMethod(operationName = "pagarConTajetaCredito")
	@RequestWrapper(className = "com.soap.services.MovHistoricoService.pagarConTajetaCredito")
	public String pagarConTajetaCredito(@WebParam(name = "monto") double monto,
			@WebParam(name = "idUsuario") int idUsuario, @WebParam(name = "idCuentaBancaria") int idCuentaBancaria,
			@WebParam(name = "idMediosPago") int idMediosPago, @WebParam(name = "idTarjeta") int idTarjeta) {
		try {
			if (movHistoricoController.pagarConTajetaCredito(monto, idUsuario, idCuentaBancaria, idMediosPago,
					idTarjeta)) {
				return "Transaccion cobro por tarjeta ha sido creado correctamente.";
			}
			return "Error al crear el movimiento";
		} catch (SQLException ex) {
			Logger.getLogger(MovHistoricoService.class.getName()).log(Level.SEVERE, null, ex);
			return "Error al realizar la petición";
		}
	}

	// ------------------------------------------------------------------------------------
	@WebMethod(operationName = "devolucionConTajetaCredito")
	@RequestWrapper(className = "com.soap.services.MovHistoricoService.devolucionConTajetaCredito")
	public String devolucionConTajetaCredito(@WebParam(name = "monto") double monto,
			@WebParam(name = "idUsuario") int idUsuario, @WebParam(name = "idCuentaBancaria") int idCuentaBancaria,
			@WebParam(name = "idMediosPago") int idMediosPago, @WebParam(name = "idTarjeta") int idTarjeta) {
		try {
			if (movHistoricoController.devolucionConTajetaCredito(monto, idUsuario, idCuentaBancaria, idMediosPago,
					idTarjeta)) {
				return "Transaccion de devolucion de tarjeta ha sido creado correctamente.";
			}
			return "Error al crear el movimiento";
		} catch (SQLException ex) {
			Logger.getLogger(MovHistoricoService.class.getName()).log(Level.SEVERE, null, ex);
			return "Error al realizar la petición";
		}
	}

	// ------------------------------------------------------------------------------------
	@WebMethod(operationName = "pagarConTajetaDebito")
	@RequestWrapper(className = "com.soap.services.MovHistoricoService.pagarConTajetaDebito")
	public String pagarConTajetaDebito(@WebParam(name = "monto") double monto, @WebParam(name = "idUsuario") int idUsuario,
			@WebParam(name = "idCuentaBancaria") int idCuentaBancaria,
			@WebParam(name = "idMediosPago") int idMediosPago) {
		try {
			if (movHistoricoController.pagarConEfectivo(monto, idUsuario, idCuentaBancaria, idMediosPago)) {
				return "Transaccion cobro por efectivo ha sido creado correctamente.";
			}
			return "Error al crear el movimiento";
		} catch (SQLException ex) {
			Logger.getLogger(MovHistoricoService.class.getName()).log(Level.SEVERE, null, ex);
			return "Error al realizar la petición";
		}
	}

	// ------------------------------------------------------------------------------------
	@WebMethod(operationName = "devolucionConTajetaDebito")
	@RequestWrapper(className = "com.soap.services.MovHistoricoService.devolucionConTajetaDebito")
	public String devolucionConTajetaDebito(@WebParam(name = "monto") double monto,
			@WebParam(name = "idUsuario") int idUsuario, @WebParam(name = "idCuentaBancaria") int idCuentaBancaria,
			@WebParam(name = "idMediosPago") int idMediosPago) {
		try {
			if (movHistoricoController.devolucionConTajetaDebito(monto, idUsuario, idCuentaBancaria, idMediosPago)) {
				return "Transaccion de devolucion de efectivo ha sido creado correctamente.";
			}
			return "Error al crear el movimiento";
		} catch (SQLException ex) {
			Logger.getLogger(MovHistoricoService.class.getName()).log(Level.SEVERE, null, ex);
			return "Error al realizar la petición";
		}
	}

	// ------------------------------------------------------------------------------------
	@WebMethod(operationName = "pagarConEfectivo")
	@RequestWrapper(className = "com.soap.services.MovHistoricoService.pagarConEfectivo")
	public String pagarConEfectivo(@WebParam(name = "monto") double monto, @WebParam(name = "idUsuario") int idUsuario,
			@WebParam(name = "idCuentaBancaria") int idCuentaBancaria,
			@WebParam(name = "idMediosPago") int idMediosPago) {
		try {
			if (movHistoricoController.pagarConEfectivo(monto, idUsuario, idCuentaBancaria, idMediosPago)) {
				return "Transaccion cobro por efectivo ha sido creado correctamente.";
			}
			return "Error al crear el movimiento";
		} catch (SQLException ex) {
			Logger.getLogger(MovHistoricoService.class.getName()).log(Level.SEVERE, null, ex);
			return "Error al realizar la petición";
		}
	}

	// ------------------------------------------------------------------------------------
	@WebMethod(operationName = "devolucionConEfectivo")
	@RequestWrapper(className = "com.soap.services.MovHistoricoService.devolucionConEfectivo")
	public String devolucionConEfectivo(@WebParam(name = "monto") double monto,
			@WebParam(name = "idUsuario") int idUsuario, @WebParam(name = "idCuentaBancaria") int idCuentaBancaria,
			@WebParam(name = "idMediosPago") int idMediosPago) {
		try {
			if (movHistoricoController.devolucionConEfectivo(monto, idUsuario, idCuentaBancaria, idMediosPago)) {
				return "Transaccion de devolucion de efectivo ha sido creado correctamente.";
			}
			return "Error al crear el movimiento";
		} catch (SQLException ex) {
			Logger.getLogger(MovHistoricoService.class.getName()).log(Level.SEVERE, null, ex);
			return "Error al realizar la petición";
		}
	}
	// ------------------------------------------------------------------------------------
	@WebMethod(operationName = "ntercambioEntreCuentas")
	@RequestWrapper(className = "com.soap.services.MovHistoricoService.ntercambioEntreCuentas")
	public String intercambioEntreCuentas(@WebParam(name = "monto") double monto,
			@WebParam(name = "idUsuario") int idUsuario, 
			@WebParam(name = "idCuentaBancariaAnterior") int idCuentaBancariaAnterior, 
			@WebParam(name = "idCuentaBancariaNueva") int idCuentaBancariaNueva,
			@WebParam(name = "idMediosPagoAnterior") int idMediosPagoAnterior,
			@WebParam(name = "idMediosPagoNueva") int idMediosPagoNueva) {
		try {
			if (movHistoricoController.intercambioEntreCuentas(monto, idUsuario, idCuentaBancariaAnterior,idCuentaBancariaNueva, idMediosPagoAnterior,idMediosPagoNueva)) {
				return "El intercambio entre cuentas ID:"+idCuentaBancariaAnterior+ "-->"+idCuentaBancariaNueva+ " ha sido creado correctamente.";
			}
			return "Error al crear el movimiento";
		} catch (SQLException ex) {
			Logger.getLogger(MovHistoricoService.class.getName()).log(Level.SEVERE, null, ex);
			return "Error al realizar la petición";
		}
	}
	
}
