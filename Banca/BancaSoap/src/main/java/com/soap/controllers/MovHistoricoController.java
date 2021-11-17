package com.soap.controllers;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.jws.WebParam;

import java.util.Date;

import com.soap.config.Conexion;
import com.soap.models.CuentaBancaria;
import com.soap.models.MovHistorico;
import com.soap.models.Tarjeta;

public class MovHistoricoController extends Conexion {

	Connection con = null;
	PreparedStatement ps = null;
	ResultSet rs = null;

	// Obtener todos los movimientos de la base de datos
	public List<MovHistorico> findAll() throws SQLException {
		try {
			String sql = "SELECT * FROM movHistorico";
			List<MovHistorico> lista = new ArrayList<MovHistorico>();

			con = conectar();
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();

			while (rs.next()) {
				MovHistorico movHistorico = new MovHistorico(rs.getInt(1), rs.getDate(2), rs.getInt(3), rs.getDouble(4),
						rs.getInt(5), rs.getInt(6), rs.getInt(7));
				lista.add(movHistorico);
			}
			return lista;
		} catch (SQLException ex) {
			Logger.getLogger(MovHistoricoController.class.getName()).log(Level.SEVERE, null, ex);
			return null;
		} finally {
			rs.close();
			ps.close();
			con.close();
		}
	}

	// Obtener un MovHistorico por su id
	public MovHistorico findById(int id) throws SQLException {
		try {
			String sql = "SELECT * FROM movHistorico WHERE idTransaccion = " + id + "";

			MovHistorico movHistorico = null;

			con = conectar();
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();

			if (rs.next()) {
				movHistorico = new MovHistorico(rs.getInt(1), rs.getDate(2), rs.getInt(3), rs.getDouble(4),
						rs.getInt(5), rs.getInt(6), rs.getInt(7));

			}

			return movHistorico;
		} catch (SQLException ex) {
			Logger.getLogger(MovHistoricoController.class.getName()).log(Level.SEVERE, null, ex);
			return null;
		} finally {
			rs.close();
			ps.close();
			con.close();
		}
	}

	// Crear un nuevo usuario
	public boolean create(MovHistorico movHistorico) throws SQLException {
		try {
			String sql = "INSERT INTO movHistorico (idTransaccion, fecha, signo, monto, idUsuario, idCuentaBancaria, idMediosPago) "
					+ "VALUES (null, ?, ?, ?, ?, ?, ?);";
			boolean respuesta = false;

			con = conectar();

			ps = con.prepareStatement(sql);

			ps.setDate(1, (java.sql.Date) movHistorico.getFecha());
			ps.setInt(2, movHistorico.getSigno());
			ps.setDouble(3, movHistorico.getMonto());
			ps.setInt(4, movHistorico.getIdUsuario());
			ps.setInt(5, movHistorico.getIdCuentaBancaria());
			ps.setInt(6, movHistorico.getIdMedioDePago());

			if (ps.executeUpdate() == 1) {
				respuesta = true;
			}

			return respuesta;
		} catch (SQLException ex) {
			Logger.getLogger(MovHistoricoController.class.getName()).log(Level.SEVERE, null, ex);
			return false;
		} finally {
			ps.close();
			con.close();
		}
	}

	// Actualizar un usuario por su id
	public boolean update(MovHistorico movHistorico) throws SQLException {
		try {

			String sql = "update movHistorico set  fecha = ?, signo = ?, monto = ?,"
					+ " idUsuario = ?, idCuentaBancaria = ?, idMediosPago = ? where idTransaccion = ?";
			boolean respuesta = false;

			con = conectar();

			ps = con.prepareStatement(sql);
			ps.setDate(1, (java.sql.Date) movHistorico.getFecha());
			ps.setInt(2, movHistorico.getSigno());
			ps.setDouble(3, movHistorico.getMonto());
			ps.setInt(4, movHistorico.getIdUsuario());
			ps.setInt(5, movHistorico.getIdCuentaBancaria());
			ps.setInt(6, movHistorico.getIdMedioDePago());
			ps.setInt(7, movHistorico.getIdTransaccion());

			if (ps.executeUpdate() == 1) {
				respuesta = true;
			}

			return respuesta;
		} catch (SQLException ex) {
			Logger.getLogger(MovHistoricoController.class.getName()).log(Level.SEVERE, null, ex);
			return false;
		} finally {
			ps.close();
			con.close();
		}
	}

	// Eliminar un usuario por su id
	public boolean delete(int id) throws SQLException {
		try {
			String sql = "DELETE FROM movHistorico WHERE idTransaccion = " + id + "";

			boolean respuesta = false;

			con = conectar();
			ps = con.prepareStatement(sql);

			if (ps.executeUpdate() == 1) {
				respuesta = true;
			}

			return respuesta;
		} catch (SQLException ex) {
			Logger.getLogger(MovHistoricoController.class.getName()).log(Level.SEVERE, null, ex);
			return false;
		} finally {
			ps.close();
			con.close();
		}
	}

	// ------------------------------------------------------------------------------------
	public boolean pagarConTajetaCredito(double monto, int idUsuario, int idCuentaBancaria, int idMediosPago, int idTarjeta)
			throws SQLException {
		try {

			TarjetaController tarjetaController = new TarjetaController();

			Tarjeta tarjeta = tarjetaController.findById(idTarjeta);

			if ((tarjeta.getMontoUtilizado() + monto) <= tarjeta.getLimite() && (tarjeta.getSaldo() - monto) >= 0) {

				String sql = "INSERT INTO movHistorico (idTransaccion, fecha, signo, monto, idUsuario, idCuentaBancaria, idMediosPago) VALUES (null, now(), 1, ?, ?, ?, ?);";
				String sql2 = "UPDATE tarjeta SET  montoUtilizado = (montoUtilizado + ?) , saldo = (saldo - ?) WHERE idTarjeta = ? and idCuentaBancaria= ? ; ";

				boolean respuesta = false;

				con = conectar();

				ps = con.prepareStatement(sql);
				ps.setDouble(1, monto);
				ps.setInt(2, idUsuario);
				ps.setInt(3, idCuentaBancaria);
				ps.setInt(4, idMediosPago);

				PreparedStatement ps2 = con.prepareStatement(sql2);
				ps2.setDouble(1, monto);
				ps2.setDouble(2, monto);
				ps2.setInt(3, idTarjeta);
				ps2.setInt(4, idCuentaBancaria);

				if (ps.executeUpdate() == 1 && ps2.executeUpdate() == 1) {
					respuesta = true;
				}

				return respuesta;

			} else {
				return false;
			}

		} catch (SQLException ex) {
			Logger.getLogger(MovHistoricoController.class.getName()).log(Level.SEVERE, null, ex);
			return false;
		} finally {
			ps.close();
			con.close();
		}
	}

	// ------------------------------------------------------------------------------------
	public boolean devolucionConTajetaCredito(double monto, int idUsuario, int idCuentaBancaria, int idMediosPago,
			int idTarjeta) throws SQLException {
		try {

			TarjetaController tarjetaController = new TarjetaController();

			Tarjeta tarjeta = tarjetaController.findById(idTarjeta);

			if ((tarjeta.getMontoUtilizado() - monto) <= tarjeta.getLimite() && (tarjeta.getSaldo() + monto) >= 0) {

				String sql = "INSERT INTO movHistorico (idTransaccion, fecha, signo, monto, idUsuario, idCuentaBancaria, idMediosPago) VALUES (null, now(), -1, ?, ?, ?, ?);";
				String sql2 = "UPDATE tarjeta SET  montoUtilizado = (montoUtilizado - ?) , saldo = (saldo + ?) WHERE idTarjeta = ? and idCuentaBancaria= ? ; ";

				boolean respuesta = false;

				con = conectar();

				ps = con.prepareStatement(sql);
				ps.setDouble(1, monto);
				ps.setInt(2, idUsuario);
				ps.setInt(3, idCuentaBancaria);
				ps.setInt(4, idMediosPago);

				PreparedStatement ps2 = con.prepareStatement(sql2);
				ps2.setDouble(1, monto);
				ps2.setDouble(2, monto);
				ps2.setInt(3, idTarjeta);
				ps2.setInt(4, idCuentaBancaria);

				if (ps.executeUpdate() == 1 && ps2.executeUpdate() == 1) {
					respuesta = true;
				}

				return respuesta;

			} else {
				return false;
			}

		} catch (SQLException ex) {
			Logger.getLogger(MovHistoricoController.class.getName()).log(Level.SEVERE, null, ex);
			return false;
		} finally {
			ps.close();
			con.close();
		}
	}
	// ------------------------------------------------------------------------------------	
	
	public boolean pagarConTajetaDebito(double monto, int idUsuario, int idCuentaBancaria, int idMediosPago) throws SQLException {
		try {

			CuentaBancariaController cuentaBancariaController = new CuentaBancariaController();

			CuentaBancaria cuentaBancaria = cuentaBancariaController.findById(idCuentaBancaria);

			if ((cuentaBancaria.getMonto() - monto) >= 0) {

				String sql = "INSERT INTO movHistorico (idTransaccion, fecha, signo, monto, idUsuario, idCuentaBancaria, idMediosPago) VALUES (null, now(), 1, ?, ?, ?, ?);";
				String sql2 = "UPDATE cuentaBancaria SET  monto = (monto - ?) WHERE idUsuario = ? and idCuentaBancaria= ? ; ";

				boolean respuesta = false;

				con = conectar();

				ps = con.prepareStatement(sql);
				ps.setDouble(1, monto);
				ps.setInt(2, idUsuario);
				ps.setInt(3, idCuentaBancaria);
				ps.setInt(4, idMediosPago);

				PreparedStatement ps2 = con.prepareStatement(sql2);
				ps2.setDouble(1, monto);
				ps2.setInt(2, idUsuario);
				ps2.setInt(3, idCuentaBancaria);

				if (ps.executeUpdate() == 1 && ps2.executeUpdate() == 1) {
					respuesta = true;
				}

				return respuesta;

			} else {
				return false;
			}

		} catch (SQLException ex) {
			Logger.getLogger(MovHistoricoController.class.getName()).log(Level.SEVERE, null, ex);
			return false;
		} finally {
			ps.close();
			con.close();
		}
	}

	// ------------------------------------------------------------------------------------
	public boolean devolucionConTajetaDebito(double monto, int idUsuario, int idCuentaBancaria, int idMediosPago) throws SQLException {
		try {

			CuentaBancariaController cuentaBancariaController = new CuentaBancariaController();

			CuentaBancaria cuentaBancaria = cuentaBancariaController.findById(idCuentaBancaria);

			String sql = "INSERT INTO movHistorico (idTransaccion, fecha, signo, monto, idUsuario, idCuentaBancaria, idMediosPago) VALUES (null, now(), -1, ?, ?, ?, ?);";
			String sql2 = "UPDATE cuentaBancaria SET  monto = (monto + ?) WHERE idUsuario = ? and idCuentaBancaria= ? ; ";

			boolean respuesta = false;

			con = conectar();

			ps = con.prepareStatement(sql);
			ps.setDouble(1, monto);
			ps.setInt(2, idUsuario);
			ps.setInt(3, idCuentaBancaria);
			ps.setInt(4, idMediosPago);

			PreparedStatement ps2 = con.prepareStatement(sql2);
			ps2.setDouble(1, monto);
			ps2.setInt(2, idUsuario);
			ps2.setInt(3, idCuentaBancaria);

			if (ps.executeUpdate() == 1 && ps2.executeUpdate() == 1) {
				respuesta = true;
			}

			return respuesta;

		} catch (SQLException ex) {
			Logger.getLogger(MovHistoricoController.class.getName()).log(Level.SEVERE, null, ex);
			return false;
		} finally {
			ps.close();
			con.close();
		}
	}
	
	// ------------------------------------------------------------------------------------
	public boolean pagarConEfectivo(double monto, int idUsuario, int idCuentaBancaria, int idMediosPago) throws SQLException {
		try {

			CuentaBancariaController cuentaBancariaController = new CuentaBancariaController();

			CuentaBancaria cuentaBancaria = cuentaBancariaController.findById(idCuentaBancaria);

			if ((cuentaBancaria.getMonto() - monto) >= 0) {

				String sql = "INSERT INTO movHistorico (idTransaccion, fecha, signo, monto, idUsuario, idCuentaBancaria, idMediosPago) VALUES (null, now(), 1, ?, ?, ?, ?);";
				String sql2 = "UPDATE cuentaBancaria SET  monto = (monto - ?) WHERE idUsuario = ? and idCuentaBancaria= ? ; ";

				boolean respuesta = false;

				con = conectar();

				ps = con.prepareStatement(sql);
				ps.setDouble(1, monto);
				ps.setInt(2, idUsuario);
				ps.setInt(3, idCuentaBancaria);
				ps.setInt(4, idMediosPago);

				PreparedStatement ps2 = con.prepareStatement(sql2);
				ps2.setDouble(1, monto);
				ps2.setInt(2, idUsuario);
				ps2.setInt(3, idCuentaBancaria);

				if (ps.executeUpdate() == 1 && ps2.executeUpdate() == 1) {
					respuesta = true;
				}

				return respuesta;

			} else {
				return false;
			}

		} catch (SQLException ex) {
			Logger.getLogger(MovHistoricoController.class.getName()).log(Level.SEVERE, null, ex);
			return false;
		} finally {
			ps.close();
			con.close();
		}
	}

	// ------------------------------------------------------------------------------------
	public boolean devolucionConEfectivo(double monto, int idUsuario, int idCuentaBancaria, int idMediosPago) throws SQLException {
		try {

			CuentaBancariaController cuentaBancariaController = new CuentaBancariaController();

			CuentaBancaria cuentaBancaria = cuentaBancariaController.findById(idCuentaBancaria);

			String sql = "INSERT INTO movHistorico (idTransaccion, fecha, signo, monto, idUsuario, idCuentaBancaria, idMediosPago) VALUES (null, now(), -1, ?, ?, ?, ?);";
			String sql2 = "UPDATE cuentaBancaria SET  monto = (monto + ?) WHERE idUsuario = ? and idCuentaBancaria= ? ; ";

			boolean respuesta = false;

			con = conectar();

			ps = con.prepareStatement(sql);
			ps.setDouble(1, monto);
			ps.setInt(2, idUsuario);
			ps.setInt(3, idCuentaBancaria);
			ps.setInt(4, idMediosPago);

			PreparedStatement ps2 = con.prepareStatement(sql2);
			ps2.setDouble(1, monto);
			ps2.setInt(2, idUsuario);
			ps2.setInt(3, idCuentaBancaria);

			if (ps.executeUpdate() == 1 && ps2.executeUpdate() == 1) {
				respuesta = true;
			}

			return respuesta;

		} catch (SQLException ex) {
			Logger.getLogger(MovHistoricoController.class.getName()).log(Level.SEVERE, null, ex);
			return false;
		} finally {
			ps.close();
			con.close();
		}
	}
	// ------------------------------------------------------------------------------------
	
	
	
	
	public boolean intercambioEntreCuentas(double monto,int idUsuario,int idCuentaBancariaAnterior,int idCuentaBancariaNueva,int idMediosPagoAnterior,int idMediosPagoNuevo)
			throws SQLException {
		try {

			CuentaBancariaController cuentaBancariaController = new CuentaBancariaController();

			CuentaBancaria cuentaBancariaAnterior = cuentaBancariaController.findById(idCuentaBancariaAnterior);
			CuentaBancaria cuentaBancariaNueva = cuentaBancariaController.findById(idCuentaBancariaNueva);

			if ((cuentaBancariaAnterior.getMonto() - monto) >=0 ) {
				//inserto la baja de la primer cuenta
				String sql = "INSERT INTO movHistorico (idTransaccion, fecha, signo, monto, idUsuario, idCuentaBancaria, idMediosPago) VALUES (null, now(), -1, ?, ?, ?, ?);";
				//inserto el alata en la segunda cuenta
				String sql1 = "INSERT INTO movHistorico (idTransaccion, fecha, signo, monto, idUsuario, idCuentaBancaria, idMediosPago) VALUES (null, now(), +1, ?, ?, ?, ?);";
				//actualizo la primer cuenta
				String sql2 = "UPDATE cuentaBancaria SET  monto = (monto - ?) WHERE idUsuario = ? and idCuentaBancaria= ? ; ";
				//actualizo la segunda cuenta
				String sql3 = "UPDATE cuentaBancaria SET  monto = (monto + ?) WHERE idUsuario = ? and idCuentaBancaria= ? ; ";
				
				boolean respuesta = false;

				con = conectar();

				ps = con.prepareStatement(sql);
				ps.setDouble(1, monto);
				ps.setInt(2, idUsuario);
				ps.setInt(3, idCuentaBancariaAnterior);
				ps.setInt(4, idMediosPagoAnterior);
				
				PreparedStatement ps1 = con.prepareStatement(sql1);
				ps1.setDouble(1, monto);
				ps1.setInt(2, idUsuario);
				ps1.setInt(3, idCuentaBancariaNueva);
				ps1.setInt(4, idMediosPagoNuevo);


				PreparedStatement ps2 = con.prepareStatement(sql2);
				ps2.setDouble(1, monto);
				ps2.setInt(2, idUsuario);
				ps2.setInt(3, idCuentaBancariaAnterior);
				
				
				PreparedStatement ps3 = con.prepareStatement(sql3);
				ps3.setDouble(1, monto);
				ps3.setInt(2, idUsuario);
				ps3.setInt(3, idCuentaBancariaNueva);
				

				if (ps.executeUpdate() == 1 && ps1.executeUpdate() == 1 && ps2.executeUpdate() == 1 && ps3.executeUpdate() == 1) {
					respuesta = true;
				}

				return respuesta;

			} else {
				return false;
			}

		} catch (SQLException ex) {
			Logger.getLogger(MovHistoricoController.class.getName()).log(Level.SEVERE, null, ex);
			return false;
		} finally {
			ps.close();
			con.close();
		}
	}

}
