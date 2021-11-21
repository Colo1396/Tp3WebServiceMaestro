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
import com.soap.models.CuentaBancaria;


public class CuentaBancariaController extends Conexion {
	Connection con = null;
	PreparedStatement ps = null;
	ResultSet rs = null;

	// Obtener todos las cuentaBancaria de la base de datos
	public List<CuentaBancaria> findAll() throws SQLException {
		try {
			String sql = "SELECT * FROM cuentaBancaria";
			List<CuentaBancaria> lista = new ArrayList<CuentaBancaria>();

			con = conectar();
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();

			while (rs.next()) {
				//Usuario usuario = new Usuario(int idUsuario, String razonSocial, int idUsuarioRef);
				CuentaBancaria cuentaBancaria = new CuentaBancaria(rs.getInt(1), rs.getString(2), rs.getDouble(3),rs.getInt(4),rs.getString(5));
				lista.add(cuentaBancaria);
			}
			return lista;
		} catch (SQLException ex) {
			Logger.getLogger(CuentaBancariaController.class.getName()).log(Level.SEVERE, null, ex);
			return null;
		} finally {
			rs.close();
			ps.close();
			con.close();
		}
	}

	// Obtener una cuentaBancaria por su id
	public CuentaBancaria findById(int id) throws SQLException {
		try {
			String sql = "SELECT * FROM cuentaBancaria WHERE idCuentaBancaria = " + id + "";

			CuentaBancaria cuentaBancaria = null;

			con = conectar();
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();

			if (rs.next()) {
				cuentaBancaria = new CuentaBancaria(rs.getInt(1), rs.getString(2), rs.getDouble(3),rs.getInt(4),rs.getString(5));

			}

			return cuentaBancaria;
		} catch (SQLException ex) {
			Logger.getLogger(CuentaBancariaController.class.getName()).log(Level.SEVERE, null, ex);
			return null;
		} finally {
			rs.close();
			ps.close();
			con.close();
		}
	}

	// Crear una nueva cuentaBancaria
	public boolean create(CuentaBancaria cuentaBancaria) throws SQLException {
		try {
			String sql = "INSERT INTO cuentaBancaria VALUES(null, ?, ?, ?, ?)";

			boolean respuesta = false;

			con = conectar();

			ps = con.prepareStatement(sql);
			ps.setString(1, cuentaBancaria.getNroCuenta());
			ps.setDouble(2, cuentaBancaria.getMonto());
			ps.setInt(3, cuentaBancaria.getIdUsuario());
			ps.setString(4, cuentaBancaria.getTipo());
			
			if (ps.executeUpdate() == 1) {
				respuesta = true;
			}

			return respuesta;
		} catch (SQLException ex) {
			Logger.getLogger(CuentaBancariaController.class.getName()).log(Level.SEVERE, null, ex);
			return false;
		} finally {
			ps.close();
			con.close();
		}
	}

	// Actualizar una cuentaBancaria por su id
	public boolean update(CuentaBancaria cuentaBancaria) throws SQLException {
		try {
			String sql = "UPDATE cuentaBancaria SET nroCuenta = ?, monto = ?,idUsuario = ? ,tipo = ? WHERE idCuentaBancaria = ?";

			boolean respuesta = false;

			con = conectar();

			ps = con.prepareStatement(sql);
			
			ps.setString(1, cuentaBancaria.getNroCuenta());
			ps.setDouble(2, cuentaBancaria.getMonto());
			ps.setInt(3, cuentaBancaria.getIdUsuario());
			ps.setString(4, cuentaBancaria.getTipo());
			ps.setInt(5, cuentaBancaria.getIdCuentaBancaria());

			if (ps.executeUpdate() == 1) {
				respuesta = true;
			}

			return respuesta;
		} catch (SQLException ex) {
			Logger.getLogger(CuentaBancariaController.class.getName()).log(Level.SEVERE, null, ex);
			return false;
		} finally {
			ps.close();
			con.close();
		}
	}

	// Eliminar una cuentaBancaria por su id
	public boolean delete(int id) throws SQLException {
		try {
			String sql = "DELETE FROM cuentaBancaria WHERE idCuentaBancaria = " + id + "";

			boolean respuesta = false;

			con = conectar();
			ps = con.prepareStatement(sql);

			if (ps.executeUpdate() == 1) {
				respuesta = true;
			}

			return respuesta;
		} catch (SQLException ex) {
			Logger.getLogger(CuentaBancariaController.class.getName()).log(Level.SEVERE, null, ex);
			return false;
		} finally {
			ps.close();
			con.close();
		}
	}
	
	public CuentaBancaria findByNroCta(String nroCuentaBancaria) throws SQLException {
		try {
			String sql = "SELECT * FROM cuentaBancaria WHERE nroCuenta = " + nroCuentaBancaria + "";

			CuentaBancaria cuentaBancaria = null;

			con = conectar();
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();

			if (rs.next()) {
				cuentaBancaria = new CuentaBancaria(rs.getInt(1), rs.getString(2), rs.getDouble(3),rs.getInt(4),rs.getString(5));

			}

			return cuentaBancaria;
		} catch (SQLException ex) {
			Logger.getLogger(CuentaBancariaController.class.getName()).log(Level.SEVERE, null, ex);
			return null;
		} finally {
			rs.close();
			ps.close();
			con.close();
		}
	}
}
