package com.soap.services;

import java.sql.SQLException;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebService;
import javax.xml.ws.RequestWrapper;

import com.soap.controllers.CuentaBancariaController;
import com.soap.models.CuentaBancaria;



@WebService(serviceName = "CuentaBancariaService")
public class CuentaBancariaService {
	CuentaBancariaController cuentaBancariaController = new CuentaBancariaController();

	// Obtener todos los Clientes
	@WebMethod(operationName = "findAll")
	@RequestWrapper(className="com.soap.services.CuentaBancariaService.findAll")
	public List<CuentaBancaria> findAll() {
		try {
			return cuentaBancariaController.findAll();
		} catch (SQLException ex) {
			Logger.getLogger(CuentaBancariaController.class.getName()).log(Level.SEVERE, null, ex);
			return null;
		}
	}

	// Obtener un Cliente por su id
	@WebMethod(operationName = "findById")
	@RequestWrapper(className="com.soap.services.CuentaBancariaService.findById")
	public CuentaBancaria findById(@WebParam(name = "id") int id) {
		try {
			return cuentaBancariaController.findById(id);
		} catch (SQLException ex) {
			Logger.getLogger(CuentaBancariaController.class.getName()).log(Level.SEVERE, null, ex);
			return null;
		}
	}

	// Crear un nuevo Cliente
	@WebMethod(operationName = "create")
	@RequestWrapper(className="com.soap.services.CuentaBancariaService.create")
	public String create(@WebParam(name = "cuentaBancaria") CuentaBancaria cuentaBancaria) {
		try {
			if (cuentaBancariaController.create(cuentaBancaria)) {
				return "La cuenta nro: " + cuentaBancaria.getNroCuenta() + " ha sido creado correctamente.";
			}
			return "Error al crear el cuentaBancaria";
		} catch (SQLException ex) {
			Logger.getLogger(CuentaBancariaController.class.getName()).log(Level.SEVERE, null, ex);
			return "Error al realizar la petición";
		}
	}

	// Actualizar un Cliente por su id
	@WebMethod(operationName = "update")
	@RequestWrapper(className="com.soap.services.CuentaBancariaService.update")
	public CuentaBancaria update(@WebParam(name = "cuentaBancaria") CuentaBancaria cuentaBancaria) {
		try {
			CuentaBancaria cuentaBancariaUpdated = null;
			if (cuentaBancariaController.update(cuentaBancaria)) {
				cuentaBancariaUpdated = cuentaBancariaController.findById(cuentaBancaria.getIdCuentaBancaria());
			}
			return cuentaBancariaUpdated;
		} catch (SQLException ex) {
			Logger.getLogger(CuentaBancariaController.class.getName()).log(Level.SEVERE, null, ex);
			return null;
		}
	}

	// Eliminar un Cliente por su id
	@WebMethod(operationName = "delete")
	@RequestWrapper(className="com.soap.services.CuentaBancariaService.delete")
	public String delete(@WebParam(name = "id") int id) {
		try {
			String msg = "La cuenta bancaria no se ha podido eliminar";
			if (cuentaBancariaController.delete(id)) {
				msg = "El cuenta bancaria se ha eliminado correctamente";
			}
			return msg;
		} catch (SQLException ex) {
			Logger.getLogger(CuentaBancariaController.class.getName()).log(Level.SEVERE, null, ex);
			return "Error al realizar la petición";
		}
	}
}
