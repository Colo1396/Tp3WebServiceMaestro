package com.soap.models;

public class Envio {
	
	private int idEnvio;
	private int codSeguimiento;
	private String domicilio;
	private String estado;
	private int dni;
	private int idUsuario;
	public Envio() {
	}
	public Envio(int idEnvio, int codSeguimiento, String domicilio, String estado, int dni, int idUsuario) {
		this.idEnvio = idEnvio;
		this.codSeguimiento = codSeguimiento;
		this.domicilio = domicilio;
		this.estado = estado;
		this.dni = dni;
		this.idUsuario = idUsuario;
	}
	public int getIdEnvio() {
		return idEnvio;
	}
	public void setIdEnvio(int idEnvio) {
		this.idEnvio = idEnvio;
	}
	public int getCodSeguimiento() {
		return codSeguimiento;
	}
	public void setCodSeguimiento(int codSeguimiento) {
		this.codSeguimiento = codSeguimiento;
	}
	public String getDomicilio() {
		return domicilio;
	}
	public void setDomicilio(String domicilio) {
		this.domicilio = domicilio;
	}
	public String getEstado() {
		return estado;
	}
	public void setEstado(String estado) {
		this.estado = estado;
	}
	public int getDni() {
		return dni;
	}
	public void setDni(int dni) {
		this.dni = dni;
	}
	public int getIdUsuario() {
		return idUsuario;
	}
	public void setIdUsuario(int idUsuario) {
		this.idUsuario = idUsuario;
	}
	
	
}
