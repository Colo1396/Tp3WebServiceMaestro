package com.soap.controllers;

import com.soap.config.Conexion;
import com.soap.models.Usuario;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;


public class UsuarioController  extends Conexion  {
	Connection con = null;
	PreparedStatement ps = null;
	ResultSet rs = null;

	// Obtener todos los usuarios de la base de datos
	public List<Usuario> findAll() throws SQLException {
		try {
			String sql = "SELECT idUsuario,razonSocial,idUsuarioRef,dni,usuario,contraseņa FROM usuario";
			List<Usuario> lista = new ArrayList<Usuario>();

			con = conectar();
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();

			while (rs.next()) {
				//Usuario usuario = new Usuario(int idUsuario, String razonSocial, int idUsuarioRef);
				Usuario usuario = new Usuario(rs.getInt(1), rs.getString(2), rs.getInt(3),rs.getInt(4), rs.getString(5),rs.getString(6));
				lista.add(usuario);
			}
			return lista;
		} catch (SQLException ex) {
			Logger.getLogger(UsuarioController.class.getName()).log(Level.SEVERE, null, ex);
			return null;
		} finally {
			rs.close();
			ps.close();
			con.close();
		}
	}

	// Obtener un Usuario por su id
	public Usuario findById(int id) throws SQLException {
		try {
			String sql = "SELECT idUsuario,razonSocial,idUsuarioRef,dni,usuario,contraseņa FROM usuario WHERE idUsuario = " + id + "";

			Usuario usuario = null;

			con = conectar();
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();

			if (rs.next()) {
				usuario =  new Usuario(rs.getInt(1), rs.getString(2), rs.getInt(3),rs.getInt(4), rs.getString(5),rs.getString(6));

			}

			return usuario;
		} catch (SQLException ex) {
			Logger.getLogger(UsuarioController.class.getName()).log(Level.SEVERE, null, ex);
			return null;
		} finally {
			rs.close();
			ps.close();
			con.close();
		}
	}

	// Crear un nuevo usuario
	public boolean create(Usuario usuario) throws SQLException {
		try {
			String sql = "INSERT INTO usuario (idUsuario,razonSocial,idUsuarioRef,dni,usuario,contraseņa) VALUES(null, ?, ?,?,?,?)";

			boolean respuesta = false;

			con = conectar();

			ps = con.prepareStatement(sql);
			ps.setString(1, usuario.getRazonSocial());
			ps.setInt(2, usuario.getIdUsuarioRef());
			ps.setInt(3, usuario.getDni());
			ps.setString(4, usuario.getUsuario());
			ps.setString(5, usuario.getContraseņa());

			if (ps.executeUpdate() == 1) {
				respuesta = true;
			}

			return respuesta;
		} catch (SQLException ex) {
			Logger.getLogger(UsuarioController.class.getName()).log(Level.SEVERE, null, ex);
			return false;
		} finally {
			ps.close();
			con.close();
		}
	}

	// Actualizar un usuario por su id
	public boolean update(Usuario usuario) throws SQLException {
		try {
			String sql = "UPDATE usuario SET razonSocial = ?, idUsuarioRef = ?,dni=?,usuario=?,contraseņa=? WHERE idUsuario = ?";

			boolean respuesta = false;

			con = conectar();

			ps = con.prepareStatement(sql);
			ps.setString(1, usuario.getRazonSocial());
			ps.setInt(2, usuario.getIdUsuarioRef());
			ps.setInt(3, usuario.getDni());
			ps.setString(4, usuario.getUsuario());
			ps.setString(5, usuario.getContraseņa());
			ps.setInt(6, usuario.getIdUsuario());

			if (ps.executeUpdate() == 1) {
				respuesta = true;
			}

			return respuesta;
		} catch (SQLException ex) {
			Logger.getLogger(UsuarioController.class.getName()).log(Level.SEVERE, null, ex);
			return false;
		} finally {
			ps.close();
			con.close();
		}
	}

	// Eliminar un usuario por su id
	public boolean delete(int id) throws SQLException {
		try {
			String sql = "DELETE FROM usuario WHERE idUsuario = " + id + "";

			boolean respuesta = false;

			con = conectar();
			ps = con.prepareStatement(sql);

			if (ps.executeUpdate() == 1) {
				respuesta = true;
			}

			return respuesta;
		} catch (SQLException ex) {
			Logger.getLogger(UsuarioController.class.getName()).log(Level.SEVERE, null, ex);
			return false;
		} finally {
			ps.close();
			con.close();
		}
	}
	
	//----------------------------------------------------------------------------------
	public Usuario validarLogin (String usuarioLog, String passwordLog) throws SQLException {
		try {
			String sql = "SELECT idUsuario,razonSocial,idUsuarioRef,dni,usuario,contraseņa FROM usuario WHERE usuario = '" + usuarioLog + "' and contraseņa='"+ passwordLog+"'";

			Usuario usuario = null;

			con = conectar();
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();

			if (rs.next()) {
				usuario =  new Usuario(rs.getInt(1), rs.getString(2), rs.getInt(3),rs.getInt(4), rs.getString(5),rs.getString(6));

			}
			return usuario;
		} catch (SQLException ex) {
			Logger.getLogger(UsuarioController.class.getName()).log(Level.SEVERE, null, ex);
			return null;
		} finally {
			rs.close();
			ps.close();
			con.close();
		}
	}
	
	//----------------------------------------------------------------------------------
	public Usuario findByDni(int dni) throws SQLException {
		try {
			String sql = "SELECT idUsuario,razonSocial,idUsuarioRef,dni,usuario,contraseņa FROM usuario WHERE dni = " + dni + "";

			Usuario usuario = null;

			con = conectar();
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();

			if (rs.next()) {
				usuario =  new Usuario(rs.getInt(1), rs.getString(2), rs.getInt(3),rs.getInt(4), rs.getString(5),rs.getString(6));

			}

			return usuario;
		} catch (SQLException ex) {
			Logger.getLogger(UsuarioController.class.getName()).log(Level.SEVERE, null, ex);
			return null;
		} finally {
			rs.close();
			ps.close();
			con.close();
		}
	}

}
