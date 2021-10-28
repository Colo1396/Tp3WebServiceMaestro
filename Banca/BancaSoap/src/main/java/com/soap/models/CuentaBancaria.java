package com.soap.models;

public class CuentaBancaria {
	private int idCuentaBancaria;
	private String nroCuenta;
	private double monto;

	private int idUsuario;

	public CuentaBancaria(int idCuentaBancaria, String nroCuenta, double monto, int idUsuario) {

		this.idCuentaBancaria = idCuentaBancaria;
		this.nroCuenta = nroCuenta;
		this.monto = monto;
		this.idUsuario = idUsuario;
	}

	public CuentaBancaria() {

	}

	public int getIdCuentaBancaria() {
		return idCuentaBancaria;
	}

	public void setIdCuentaBancaria(int idCuentaBancaria) {
		this.idCuentaBancaria = idCuentaBancaria;
	}

	public String getNroCuenta() {
		return nroCuenta;
	}

	public void setNroCuenta(String nroCuenta) {
		this.nroCuenta = nroCuenta;
	}

	public double getMonto() {
		return monto;
	}

	public void setMonto(double monto) {
		this.monto = monto;
	}

	public int getIdUsuario() {
		return idUsuario;
	}

	public void setIdUsuario(int idUsuario) {
		this.idUsuario = idUsuario;
	}

}
