package com.soap.services;


import com.soap.controllers.UsuarioController;
import com.soap.models.Usuario;
import java.sql.SQLException;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.jws.WebService;
import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebResult;


@WebService(serviceName = "UsuarioService")
public class UsuarioService {

	UsuarioController usuarioController = new UsuarioController();

	// Obtener todos los Clientes
	@WebMethod(operationName = "findAll")
	public List<Usuario> findAll() {
		try {
			return usuarioController.findAll();
		} catch (SQLException ex) {
			Logger.getLogger(UsuarioService.class.getName()).log(Level.SEVERE, null, ex);
			return null;
		}
	}

	// Obtener un Cliente por su id
	@WebMethod(operationName = "findById")
	public Usuario findById(@WebParam(name = "id") int id) {
		try {
			return usuarioController.findById(id);
		} catch (SQLException ex) {
			Logger.getLogger(UsuarioService.class.getName()).log(Level.SEVERE, null, ex);
			return null;
		}
	}

	// Crear un nuevo Cliente
	@WebMethod(operationName = "create")
	public String create(@WebParam(name = "usuario") Usuario usuario) {
		try {
			if (usuarioController.create(usuario)) {
				return "Usuario " + usuario.getRazonSocial() + " ha sido creado correctamente.";
			}
			return "Error al crear el usuario";
		} catch (SQLException ex) {
			Logger.getLogger(UsuarioService.class.getName()).log(Level.SEVERE, null, ex);
			return "Error al realizar la petición";
		}
	}

	// Actualizar un Cliente por su id
	@WebMethod(operationName = "update")
	public Usuario update(@WebParam(name = "usuario") Usuario usuario) {
		try {
			Usuario usuarioUpdated = null;
			if (usuarioController.update(usuario)) {
				usuarioUpdated = usuarioController.findById(usuario.getIdUsuario());
			}
			return usuarioUpdated;
		} catch (SQLException ex) {
			Logger.getLogger(UsuarioService.class.getName()).log(Level.SEVERE, null, ex);
			return null;
		}
	}

	// Eliminar un Cliente por su id
	@WebMethod(operationName = "delete")
	public String delete(@WebParam(name = "id") int id) {
		try {
			String msg = "El usuario no se ha podido eliminar";
			if (usuarioController.delete(id)) {
				msg = "El usuario se ha eliminado correctamente";
			}
			return msg;
		} catch (SQLException ex) {
			Logger.getLogger(UsuarioService.class.getName()).log(Level.SEVERE, null, ex);
			return "Error al realizar la petición";
		}
	}


	
}
