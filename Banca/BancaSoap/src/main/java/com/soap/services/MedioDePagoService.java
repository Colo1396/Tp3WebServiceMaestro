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
import com.soap.models.Usuario;


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
	//------------------------------------------------------------------------------------
	//Asignar medio de Pago
	@WebMethod(operationName = "asociarMedioDePago")
	@RequestWrapper(className="com.soap.services.MedioDePagoService.asociarMedioDePago")
	public String asociarMedioDePago(@WebParam(name = "usuario") Usuario usuario,@WebParam(name = "medioDePago") MedioDePago medioDePago) {
		try {
			if (medioDePagoController.asociarMedioDePago(usuario,medioDePago)) {
				return "MedioDePago " + medioDePago.getNombre() + " asociado al usuario "+usuario.getRazonSocial()+ " ID Banca:"+usuario.getIdUsuario();
			}
			return "Error al Asignar el MedioDePago";
		} catch (SQLException ex) {
			Logger.getLogger(MedioDePagoService.class.getName()).log(Level.SEVERE, null, ex);
			return "Error al realizar la petición, talves ya tiene ese medio de pago asignado.";
		}
	}
	//------------------------------------------------------------------------------------
	//Asignar medio de Pago por id de usuario y mp
	@WebMethod(operationName = "asociarMedioDePagoXId")
	@RequestWrapper(className="com.soap.services.MedioDePagoService.asociarMedioDePagoXId")
	public String asociarMedioDePagoXId(@WebParam(name = "idUsuario") int idUsuario,@WebParam(name = "idMedioDePago") int idMedioDePago) {
		try {
			if (medioDePagoController.asociarMedioDePagoXId(idUsuario,idMedioDePago)) {
				return "MedioDePago ID:" + idMedioDePago + " asociado al usuario  ID Banca:"+idUsuario;
			}
			return "Error al Asignar el MedioDePago";
		} catch (SQLException ex) {
			Logger.getLogger(MedioDePagoService.class.getName()).log(Level.SEVERE, null, ex);
			return "Error al realizar la petición, talves ya tiene ese medio de pago asignado.";
		}
	}
	//------------------------------------------------------------------------------------
	// Eliminar un MedioDePago por su id
	@WebMethod(operationName = "desasociarMedioDePago")
	@RequestWrapper(className="com.soap.services.MedioDePagoService.desasociarMedioDePago")
	public String desasociarMedioDePago(@WebParam(name = "usuario") Usuario usuario,@WebParam(name = "medioDePago") MedioDePago medioDePago) {
		try {
			String msg = "El medioDePago no se ha podido desasociar del usuario";
			if (medioDePagoController.desasociarMedioDePago(usuario,medioDePago)) {
				msg = "El medioDePago se ha desasociar correctamente";
			}
			return msg;
		} catch (SQLException ex) {
			Logger.getLogger(MedioDePagoService.class.getName()).log(Level.SEVERE, null, ex);
			return "Error al realizar la petición";
		}
	}
	
	//------------------------------------------------------------------------------------
	// Eliminar un MedioDePago por su id
	@WebMethod(operationName = "desasociarMedioDePagoXId")
	@RequestWrapper(className="com.soap.services.MedioDePagoService.desasociarMedioDePagoXId")
	public String desasociarMedioDePagoXId(@WebParam(name = "idUsuario") int idUsuario,@WebParam(name = "idMedioDePago") int idMedioDePago) {
		try {
			String msg = "El medioDePago no se ha podido desasociar del usuario";
			if (medioDePagoController.desasociarMedioDePagoXId(idUsuario,idMedioDePago)) {
				msg = "El medioDePago se ha desasociar correctamente";
			}
			return msg;
		} catch (SQLException ex) {
			Logger.getLogger(MedioDePagoService.class.getName()).log(Level.SEVERE, null, ex);
			return "Error al realizar la petición";
		}
	}
	
	//------------------------------------------------------------------------------------
	@WebMethod(operationName = "findByNombreMedioDePago")
	@RequestWrapper(className="com.soap.services.MedioDePagoService.findByNombreMedioDePago")
	public MedioDePago findByNombreMedioDePago(@WebParam(name = "nombreMP") String nombreMP) {
		try {
			return medioDePagoController.findByNombreMedioDePago(nombreMP);
		} catch (SQLException ex) {
			Logger.getLogger(MedioDePagoService.class.getName()).log(Level.SEVERE, null, ex);
			return null;
		}
	}

}
