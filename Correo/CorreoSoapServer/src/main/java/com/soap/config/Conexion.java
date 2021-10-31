package com.soap.config;

import java.sql.*;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexion {

	Connection conectar = null;

	// Librería de MySQL
	public String driver = "com.mysql.jdbc.Driver";
	// Nombre de la base de datos
	public String database = "bucp5em1rpmwnjz26n5s";
	// Host
	public String hostname = "bucp5em1rpmwnjz26n5s-mysql.services.clever-cloud.com";
	// Puerto
	public String port = "3306";
	// Ruta de nuestra base de datos
	public String url = "jdbc:mysql://" + hostname + ":" + port + "/" + database;
	// Nombre de usuario
	public String username = "unwylvaeollm3kce";
	// Clave de usuario
	public String password = "sOKeiQxAPvSo9iv2E8Pj";

	public Connection conectar() {
		try {
			Class.forName(driver);
			conectar = DriverManager.getConnection(url, username, password);
			System.out.println("CONECTADO");
		} catch (ClassNotFoundException | SQLException e) {
			System.out.println("Error al conectar: " + e.getMessage());
		}

		return conectar;
	}
}
