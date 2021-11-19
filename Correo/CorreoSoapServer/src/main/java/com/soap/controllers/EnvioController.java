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

import com.soap.config.Conexion;
import com.soap.models.Envio;
import com.soap.models.Usuario;

public class EnvioController extends Conexion {
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
				// Usuario usuario = new Usuario(int idUsuario, String razonSocial, int
				// idUsuarioRef);
				Envio envio = new Envio(rs.getInt(1), rs.getInt(2), rs.getString(3), rs.getString(4), rs.getInt(5),
						rs.getInt(6));
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
				envio = new Envio(rs.getInt(1), rs.getInt(2), rs.getString(3), rs.getString(4), rs.getInt(5),
						rs.getInt(6));

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
			ps.setInt(4, envio.getDni());
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
			ps.setInt(4, envio.getDni());
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

	// ----------------------------------------------------------------------------------
	public boolean updateEstadoEnvio(Envio envio, String estado) throws SQLException {
		try {
			String sql = "UPDATE envio SET estado=? WHERE idEnvio = ?";

			boolean respuesta = false;

			con = conectar();

			ps = con.prepareStatement(sql);

			ps.setString(1, estado);

			ps.setInt(2, envio.getIdEnvio());

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
	// ----------------------------------------------------------------------------------
		public boolean updateEstadoEnvioXId(int idEnvio, String estado) throws SQLException {
			try {
				String sql = "UPDATE envio SET estado=? WHERE idEnvio = ?";

				boolean respuesta = false;

				con = conectar();

				ps = con.prepareStatement(sql);

				ps.setString(1, estado);

				ps.setInt(2, idEnvio);

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
	// ----------------------------------------------------------------------------------
	public List<Envio> traerAllMisDespachos(int idUsuario, String orden) throws SQLException {
		try {
			
			String sql="SELECT * FROM envio where idUsuario = ? order by "+ orden +" asc";

			List<Envio> lista = new ArrayList<Envio>();

			con = conectar();
			ps = con.prepareStatement(sql);
			ps.setInt(1, idUsuario);
			rs = ps.executeQuery();

			while (rs.next()) {
				// Usuario usuario = new Usuario(int idUsuario, String razonSocial, int
				// idUsuarioRef);
				Envio envio = new Envio(rs.getInt(1), rs.getInt(2), rs.getString(3), rs.getString(4), rs.getInt(5),
						rs.getInt(6));
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

	// ----------------------------------------------------------------------------------
	public List<Envio> traerAllMisPedidos(int dni, String orden) throws SQLException {
		try {
			String sql = "SELECT * FROM envio where dni = ?  order by "+ orden +" asc";
			List<Envio> lista = new ArrayList<Envio>();

			con = conectar();
			ps = con.prepareStatement(sql);
			ps.setInt(1, dni);
			rs = ps.executeQuery();

			while (rs.next()) {
				// Usuario usuario = new Usuario(int idUsuario, String razonSocial, int
				// idUsuarioRef);
				Envio envio = new Envio(rs.getInt(1), rs.getInt(2), rs.getString(3), rs.getString(4), rs.getInt(5),
						rs.getInt(6));
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
	// ----------------------------------------------------------------------------------
	public Envio solicitarCodSeguimiento(int dniDestinatario,int dniOrigen,String domicilio) throws SQLException {
		try {
			
			UsuarioController usuarioController = new UsuarioController();
			Usuario usuario=usuarioController.findByDni(dniOrigen);
			
			String sql = "INSERT INTO envio VALUES(null, ?, ?,?,?,?)";

			Envio respuesta = null;

			con = conectar();

			ps = con.prepareStatement(sql);
			ps.setInt(1, (int) (100000 * Math.random()));
			ps.setString(2, domicilio);
			ps.setString(3, "1.En Preparacion");
			ps.setInt(4, dniDestinatario);
			ps.setInt(5, usuario.getIdUsuario());

			if (ps.executeUpdate() == 1) {
				PreparedStatement ps2 = con.prepareStatement("SELECT LAST_INSERT_ID();");
				rs = ps2.executeQuery();
				if (rs.next()) {
					int idEnvioRecienCreado = rs.getInt(1);
					EnvioController envioController= new EnvioController();
					respuesta=envioController.findById(idEnvioRecienCreado);
					System.out.println("El id de envio recien cargado es : "+respuesta.getIdEnvio());
				}
				 
			}

			return respuesta;
		} catch (SQLException ex) {
			Logger.getLogger(EnvioController.class.getName()).log(Level.SEVERE, null, ex);
			return null;
		} finally {
			ps.close();
			con.close();
		}
	}
	//----------------------------------------------------------------------------------
	public String traerEstado(int codSeguimiento,int dni) throws SQLException {
		try {
			String sql = "SELECT estado FROM envio WHERE codSeguimiento = " + codSeguimiento + " and dni= "+dni;

			String estado = null;

			con = conectar();
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();

			if (rs.next()) {
				estado = rs.getString(1);

			}

			return estado;
		} catch (SQLException ex) {
			Logger.getLogger(EnvioController.class.getName()).log(Level.SEVERE, null, ex);
			return null;
		} finally {
			rs.close();
			ps.close();
			con.close();
		}
	}
}
