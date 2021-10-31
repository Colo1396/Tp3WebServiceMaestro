package com.soap.controllers;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import com.soap.config.Conexion;
import com.soap.models.Envio;


public class EnvioController extends Conexion{
	Connection con = null;
	PreparedStatement ps = null;
	ResultSet rs = null;

	// Obtener todos los envios de la base de datos
	public List<Envio> findAll() throws SQLException {
		try {
			String sql = "SELECT * FROM envio";
			List<Envio> lista = new ArrayList<Envio>();

			con = conectar();
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();

			while (rs.next()) {
				//Usuario usuario = new Usuario(int idUsuario, String razonSocial, int idUsuarioRef);
				Envio envio = new Envio(rs.getInt(1),rs.getInt(2), rs.getString(3), rs.getString(4),rs.getInt(5),rs.getInt(6));
				lista.add(envio);
			}
			return lista;
		} catch (SQLException ex) {
			Logger.getLogger(EnvioController.class.getName()).log(Level.SEVERE, null, ex);
			return null;
		} finally {
			rs.close();
			ps.close();
			con.close();
		}
	}

	// Obtener un envio por su id
	public Envio findById(int id) throws SQLException {
		try {
			String sql = "SELECT * FROM envio WHERE idEnvio = " + id + "";

			Envio envio = null;

			con = conectar();
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();

			if (rs.next()) {
				envio =  new Envio(rs.getInt(1),rs.getInt(2), rs.getString(3), rs.getString(4),rs.getInt(5),rs.getInt(6));

			}

			return envio;
		} catch (SQLException ex) {
			Logger.getLogger(EnvioController.class.getName()).log(Level.SEVERE, null, ex);
			return null;
		} finally {
			rs.close();
			ps.close();
			con.close();
		}
	}

	// Crear un nuevo envio
	public boolean create(Envio envio) throws SQLException {
		try {
			String sql = "INSERT INTO envio VALUES(null, ?, ?,?,?,?)";

			boolean respuesta = false;

			con = conectar();

			ps = con.prepareStatement(sql);
			ps.setInt(1, envio.getCodSeguimiento());
			ps.setString(2, envio.getDomicilio());
			ps.setString(3, envio.getEstado());
			ps.setInt(4, envio.getIdVendedor());
			ps.setInt(5, envio.getIdUsuario());

			if (ps.executeUpdate() == 1) {
				respuesta = true;
			}

			return respuesta;
		} catch (SQLException ex) {
			Logger.getLogger(EnvioController.class.getName()).log(Level.SEVERE, null, ex);
			return false;
		} finally {
			ps.close();
			con.close();
		}
	}

	// Actualizar un envio por su id
	public boolean update(Envio envio) throws SQLException {
		try {
			String sql = "UPDATE envio SET codSeguimiento = ?, domicilio = ?,estado=?,idVendedor=?,idUsuario=? WHERE idEnvio = ?";

			boolean respuesta = false;

			con = conectar();

			ps = con.prepareStatement(sql);
			ps.setInt(1, envio.getCodSeguimiento());
			ps.setString(2, envio.getDomicilio());
			ps.setString(3, envio.getEstado());
			ps.setInt(4, envio.getIdVendedor());
			ps.setInt(5, envio.getIdUsuario());
			ps.setInt(6, envio.getIdEnvio());

			if (ps.executeUpdate() == 1) {
				respuesta = true;
			}

			return respuesta;
		} catch (SQLException ex) {
			Logger.getLogger(EnvioController.class.getName()).log(Level.SEVERE, null, ex);
			return false;
		} finally {
			ps.close();
			con.close();
		}
	}

	// Eliminar un envio por su id
	public boolean delete(int id) throws SQLException {
		try {
			String sql = "DELETE FROM envio WHERE idEnvio = " + id + "";

			boolean respuesta = false;

			con = conectar();
			ps = con.prepareStatement(sql);

			if (ps.executeUpdate() == 1) {
				respuesta = true;
			}

			return respuesta;
		} catch (SQLException ex) {
			Logger.getLogger(EnvioController.class.getName()).log(Level.SEVERE, null, ex);
			return false;
		} finally {
			ps.close();
			con.close();
		}
	}

}
