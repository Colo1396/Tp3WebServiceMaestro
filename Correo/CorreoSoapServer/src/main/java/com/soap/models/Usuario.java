package com.soap.models;

public class Usuario {

	private int idUsuario;
	private String razonSocial;
	private int idUsuarioRef;
	private int dni;
	private String usuario;
	private String contrase�a;
	
	//(idUsuario,razonSocial,idUsuarioRef,dni,usuario,contrase�a)
	public Usuario() {
	}


	public Usuario(int idUsuario, String razonSocial, int idUsuarioRef, int dni, String usuario, String contrase�a) {
		this.idUsuario = idUsuario;
		this.razonSocial = razonSocial;
		this.idUsuarioRef = idUsuarioRef;
		this.dni = dni;
		this.usuario = usuario;
		this.contrase�a = contrase�a;
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


	public String getContrase�a() {
		return contrase�a;
	}


	public void setContrase�a(String contrase�a) {
		this.contrase�a = contrase�a;
	}



}
