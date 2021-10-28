package com.soap.services;

import com.soap.controllers.ClientController;
import com.soap.models.Client;
import java.sql.SQLException;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.jws.WebService;
import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebResult;

@WebService(serviceName = "ClientService")
public class ClientService {

	ClientController clientController = new ClientController();

	// Obtener todos los Clientes
	@WebMethod(operationName = "findAll")
	public List<Client> findAll() {
		try {
			return clientController.findAll();
		} catch (SQLException ex) {
			Logger.getLogger(ClientService.class.getName()).log(Level.SEVERE, null, ex);
			return null;
		}
	}

	// Obtener un Cliente por su id
	@WebMethod(operationName = "findById")
	public Client findById(@WebParam(name = "id") int id) {
		try {
			return clientController.findById(id);
		} catch (SQLException ex) {
			Logger.getLogger(ClientService.class.getName()).log(Level.SEVERE, null, ex);
			return null;
		}
	}

	// Crear un nuevo Cliente
	@WebMethod(operationName = "create")
	public String create(@WebParam(name = "client") Client client) {
		try {
			if (clientController.create(client)) {
				return "Cliente " + client.getName() + " ha sido creado correctamente.";
			}
			return "Error al crear el cliente";
		} catch (SQLException ex) {
			Logger.getLogger(ClientService.class.getName()).log(Level.SEVERE, null, ex);
			return "Error al realizar la petición";
		}
	}

	// Actualizar un Cliente por su id
	@WebMethod(operationName = "update")
	public Client update(@WebParam(name = "client") Client client) {
		try {
			Client clientUpdated = null;
			if (clientController.update(client)) {
				clientUpdated = clientController.findById(client.getId());
			}
			return clientUpdated;
		} catch (SQLException ex) {
			Logger.getLogger(ClientService.class.getName()).log(Level.SEVERE, null, ex);
			return null;
		}
	}

	// Eliminar un Cliente por su id
	@WebMethod(operationName = "delete")
	public String delete(@WebParam(name = "id") int id) {
		try {
			String msg = "El cliente no se ha podido eliminar";
			if (clientController.delete(id)) {
				msg = "El cliente se ha eliminado correctamente";
			}
			return msg;
		} catch (SQLException ex) {
			Logger.getLogger(ClientService.class.getName()).log(Level.SEVERE, null, ex);
			return "Error al realizar la petición";
		}
	}

	/*
	 * @WebMethod(operationName="getEmpleado") public String
	 * getEmpleadoById(@WebParam(name="idEmpleado")int idEmpleado) { String
	 * resultado =(idEmpleado==10)?"Empleado encontrado":"Error"; return resultado;
	 * }
	 */

}
