package com.soap.models;

public class Usuario {

	private int idUsuario;
	private String razonSocial;
	private int idUsuarioRef;

	public Usuario() {
	}

	public Usuario(int idUsuario, String razonSocial, int idUsuarioRef) {
		this.idUsuario = idUsuario;
		this.razonSocial = razonSocial;
		this.idUsuarioRef = idUsuarioRef;
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

}
