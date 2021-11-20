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
import com.soap.models.Tarjeta;



public class TarjetaController  extends Conexion  {
	Connection con = null;
	PreparedStatement ps = null;
	ResultSet rs = null;

	// Obtener todos las tarjetas de la base de datos
	public List<Tarjeta> findAll() throws SQLException {
		try {
			String sql = "SELECT * FROM tarjeta";
			List<Tarjeta> lista = new ArrayList<Tarjeta>();

			con = conectar();
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();

			while (rs.next()) {
				
				Tarjeta tarjeta = new Tarjeta(
						rs.getInt(1),
						rs.getString(2),
						rs.getString(3),
						rs.getDouble(4),
						rs.getDouble(5),
						rs.getDouble(6),
						rs.getInt(7));
				lista.add(tarjeta);
			}
			return lista;
		} catch (SQLException ex) {
			Logger.getLogger(TarjetaController.class.getName()).log(Level.SEVERE, null, ex);
			return null;
		} finally {
			rs.close();
			ps.close();
			con.close();
		}
	}

	// Obtener una tarjeta por su id
	public Tarjeta findById(int id) throws SQLException {
		try {
			String sql = "SELECT * FROM tarjeta WHERE idTarjeta = " + id + "";

			Tarjeta tarjeta = null;

			con = conectar();
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();

			if (rs.next()) {
				tarjeta = new Tarjeta(
						rs.getInt(1),
						rs.getString(2),
						rs.getString(3),
						rs.getDouble(4),
						rs.getDouble(5),
						rs.getDouble(6),
						rs.getInt(7));

			}

			return tarjeta;
		} catch (SQLException ex) {
			Logger.getLogger(TarjetaController.class.getName()).log(Level.SEVERE, null, ex);
			return null;
		} finally {
			rs.close();
			ps.close();
			con.close();
		}
	}

	// Crear una nueva tarjeta
	public boolean create(Tarjeta tarjeta) throws SQLException {
		try {
			String sql = "INSERT INTO tarjeta (idTarjeta, nroTarjeta, tipo, limite, montoUtilizado, saldo, idCuentaBancaria)"
					+ " VALUES (null, ?, ?, ?, ?, ?, ?)";

			boolean respuesta = false;

			con = conectar();

			ps = con.prepareStatement(sql);

			
			ps.setString(1,tarjeta.getNroTarjeta());
			ps.setString(2,tarjeta.getTipo());
			ps.setDouble(3,tarjeta.getLimite());
			ps.setDouble(4,tarjeta.getMontoUtilizado());
			ps.setDouble(5,tarjeta.getSaldo());
			ps.setInt(6,tarjeta.getIdCuentaBancaria());


			if (ps.executeUpdate() == 1) {
				respuesta = true;
			}

			return respuesta;
		} catch (SQLException ex) {
			Logger.getLogger(TarjetaController.class.getName()).log(Level.SEVERE, null, ex);
			return false;
		} finally {
			ps.close();
			con.close();
		}
	}

	// Actualizar una tarjeta por su id
	public boolean update(Tarjeta tarjeta) throws SQLException {
		try {
			String sql = "UPDATE tarjeta SET nroTarjeta = ? ,tipo = ?, limite = ?, montoUtilizado = ?, saldo = ? ,idCuentaBancaria = ? WHERE idTarjeta = ?";
			boolean respuesta = false;

			con = conectar();

			ps = con.prepareStatement(sql);
					
			ps.setString(1,tarjeta.getNroTarjeta());
			ps.setString(2,tarjeta.getTipo());
			ps.setDouble(3,tarjeta.getLimite());
			ps.setDouble(4,tarjeta.getMontoUtilizado());
			ps.setDouble(5,tarjeta.getSaldo());
			ps.setInt(6,tarjeta.getIdCuentaBancaria());
			ps.setInt(7,tarjeta.getIdTarjeta());

			if (ps.executeUpdate() == 1) {
				respuesta = true;
			}

			return respuesta;
		} catch (SQLException ex) {
			Logger.getLogger(TarjetaController.class.getName()).log(Level.SEVERE, null, ex);
			return false;
		} finally {
			ps.close();
			con.close();
		}
	}

	// Eliminar una tarjeta por su id
	public boolean delete(int id) throws SQLException {
		try {
			String sql = "DELETE FROM tarjeta WHERE idTarjeta = " + id + "";

			boolean respuesta = false;

			con = conectar();
			ps = con.prepareStatement(sql);

			if (ps.executeUpdate() == 1) {
				respuesta = true;
			}

			return respuesta;
		} catch (SQLException ex) {
			Logger.getLogger(TarjetaController.class.getName()).log(Level.SEVERE, null, ex);
			return false;
		} finally {
			ps.close();
			con.close();
		}
	}
	//------------------------------------------------------------------------------------
	public boolean validarTarjeta(int dni, String nroTarjeta ) throws SQLException {
		try {
			String sql = "select true from tarjeta t inner join cuentaBancaria cb on cb.idCuentaBancaria=t.idCuentaBancaria inner join usuario u on u.idUsuario=cb.idUsuario where u.idUsuarioRef = ? and t.nroTarjeta=?";

			boolean respuesta = false;

			con = conectar();
			ps = con.prepareStatement(sql);
			ps.setInt(1,dni);
			ps.setString(2,nroTarjeta);
			
			rs= ps.executeQuery();
			if (rs.next()) {
				respuesta = rs.getBoolean(1);

			}
		

			return respuesta;
		} catch (SQLException ex) {
			Logger.getLogger(TarjetaController.class.getName()).log(Level.SEVERE, null, ex);
			return false;
		} finally {
			ps.close();
			con.close();
		}
	}
	//------------------------------------------------------------------------------------
	//------------------------------------------------------------------------------------
	//------------------------------------------------------------------------------------
	//------------------------------------------------------------------------------------
	

}
