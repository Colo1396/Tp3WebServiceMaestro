package com.soap.models;

public class Usuario {

	private int idUsuario;
	private String razonSocial;
	private int idUsuarioRef;
	private int dni;
	private String usuario;
	private String contraseña;
	
	//(idUsuario,razonSocial,idUsuarioRef,dni,usuario,contraseña)
	public Usuario() {
	}


	public Usuario(int idUsuario, String razonSocial, int idUsuarioRef, int dni, String usuario, String contraseña) {
		this.idUsuario = idUsuario;
		this.razonSocial = razonSocial;
		this.idUsuarioRef = idUsuarioRef;
		this.dni = dni;
		this.usuario = usuario;
		this.contraseña = contraseña;
	}


	public int getIdUsuario() {
		return idUsuario;
	}


	public void setIdUsuario(int idUsuario) {
		this.idUsuario = idUsuario;
	}


	public String getRazonSocial() {
		return razonSocial;
	}


	public void setRazonSocial(String razonSocial) {
		this.razonSocial = razonSocial;
	}


	public int getIdUsuarioRef() {
		return idUsuarioRef;
	}


	public void setIdUsuarioRef(int idUsuarioRef) {
		this.idUsuarioRef = idUsuarioRef;
	}


	public int getDni() {
		return dni;
	}


	public void setDni(int dni) {
		this.dni = dni;
	}


	public String getUsuario() {
		return usuario;
	}


	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}


	public String getContraseña() {
		return contraseña;
	}


	public void setContraseña(String contraseña) {
		this.contraseña = contraseña;
	}



}
