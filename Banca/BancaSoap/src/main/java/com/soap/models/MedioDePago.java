package com.soap.models;

public class MedioDePago {
	private int idMedioDePago;
	private String nombre;

	public MedioDePago() {
	}

	public MedioDePago(int idMedioDePago, String nombre) {
		this.idMedioDePago = idMedioDePago;
		this.nombre = nombre;
	}

	public int getIdMedioDePago() {
		return idMedioDePago;
	}

	public void setIdMedioDePago(int idMedioDePago) {
		this.idMedioDePago = idMedioDePago;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

}
