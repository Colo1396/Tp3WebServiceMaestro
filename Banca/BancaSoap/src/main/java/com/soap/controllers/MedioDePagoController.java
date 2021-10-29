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
import com.soap.models.MedioDePago;


public class MedioDePagoController extends Conexion{
	Connection con = null;
	PreparedStatement ps = null;
	ResultSet rs = null;

	// Obtener todos los MediosDePago de la base de datos
	public List<MedioDePago> findAll() throws SQLException {
		try {
			String sql = "SELECT * FROM mediosPago";
			List<MedioDePago> lista = new ArrayList<MedioDePago>();

			con = conectar();
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();

			while (rs.next()) {
				
				MedioDePago medioDePago = new MedioDePago(rs.getInt(1), rs.getString(2));
				lista.add(medioDePago);
			}
			return lista;
		} catch (SQLException ex) {
			Logger.getLogger(MedioDePagoController.class.getName()).log(Level.SEVERE, null, ex);
			return null;
		} finally {
			rs.close();
			ps.close();
			con.close();
		}
	}

	// Obtener un MedioDePago por su id
	public MedioDePago findById(int id) throws SQLException {
		try {
			String sql = "SELECT * FROM mediosPago WHERE idMediosPago = " + id + "";

			MedioDePago medioDePago = null;

			con = conectar();
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();

			if (rs.next()) {
				medioDePago = new MedioDePago(rs.getInt(1), rs.getString(2));

			}

			return medioDePago;
		} catch (SQLException ex) {
			Logger.getLogger(MedioDePagoController.class.getName()).log(Level.SEVERE, null, ex);
			return null;
		} finally {
			rs.close();
			ps.close();
			con.close();
		}
	}

	// Crear un nuevo MedioDePago
	public boolean create(MedioDePago medioDePago) throws SQLException {
		try {
			String sql = "INSERT INTO mediosPago VALUES(null, ?)";

			boolean respuesta = false;

			con = conectar();

			ps = con.prepareStatement(sql);
			ps.setString(1, medioDePago.getNombre());
			
			

			if (ps.executeUpdate() == 1) {
				respuesta = true;
			}

			return respuesta;
		} catch (SQLException ex) {
			Logger.getLogger(MedioDePagoController.class.getName()).log(Level.SEVERE, null, ex);
			return false;
		} finally {
			ps.close();
			con.close();
		}
	}

	// Actualizar un MedioDePago por su id
	public boolean update(MedioDePago medioDePago) throws SQLException {
		try {
			String sql = "UPDATE mediosPago SET nombre = ? WHERE idMediosPago = ?";

			boolean respuesta = false;

			con = conectar();

			ps = con.prepareStatement(sql);
			ps.setString(1, medioDePago.getNombre());
			ps.setInt(2, medioDePago.getIdMedioDePago());
			

			if (ps.executeUpdate() == 1) {
				respuesta = true;
			}

			return respuesta;
		} catch (SQLException ex) {
			Logger.getLogger(MedioDePagoController.class.getName()).log(Level.SEVERE, null, ex);
			return false;
		} finally {
			ps.close();
			con.close();
		}
	}

	// Eliminar un MedioDePago por su id
	public boolean delete(int id) throws SQLException {
		try {
			String sql = "DELETE FROM mediosPago WHERE idMediosPago = " + id + "";

			boolean respuesta = false;

			con = conectar();
			ps = con.prepareStatement(sql);

			if (ps.executeUpdate() == 1) {
				respuesta = true;
			}

			return respuesta;
		} catch (SQLException ex) {
			Logger.getLogger(MedioDePagoController.class.getName()).log(Level.SEVERE, null, ex);
			return false;
		} finally {
			ps.close();
			con.close();
		}
	}
}
