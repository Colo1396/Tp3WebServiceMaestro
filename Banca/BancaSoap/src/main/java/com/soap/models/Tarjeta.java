package com.soap.models;

public class Tarjeta {
	private int idTarjeta;
	private String nroTarjeta;
	private String tipo;
	private double limite;
	private double montoUtilizado;
	private double saldo;
	private int idCuentaBancaria;

	public Tarjeta(int idTarjeta, String nroTarjeta, String tipo, double limite, double montoUtilizado, double saldo,
			int idCuentaBancaria) {

		this.idTarjeta = idTarjeta;
		this.nroTarjeta = nroTarjeta;
		this.tipo = tipo;
		this.limite = limite;
		this.montoUtilizado = montoUtilizado;
		this.saldo = saldo;
		this.idCuentaBancaria = idCuentaBancaria;
	}

	public Tarjeta() {

	}

	public int getIdTarjeta() {
		return idTarjeta;
	}

	public void setIdTarjeta(int idTarjeta) {
		this.idTarjeta = idTarjeta;
	}

	public String getNroTarjeta() {
		return nroTarjeta;
	}

	public void setNroTarjeta(String nroTarjeta) {
		this.nroTarjeta = nroTarjeta;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public double getLimite() {
		return limite;
	}

	public void setLimite(double limite) {
		this.limite = limite;
	}

	public double getMontoUtilizado() {
		return montoUtilizado;
	}

	public void setMontoUtilizado(double montoUtilizado) {
		this.montoUtilizado = montoUtilizado;
	}

	public double getSaldo() {
		return saldo;
	}

	public void setSaldo(double saldo) {
		this.saldo = saldo;
	}

	public int getIdCuentaBancaria() {
		return idCuentaBancaria;
	}

	public void setIdCuentaBancaria(int idCuentaBancaria) {
		this.idCuentaBancaria = idCuentaBancaria;
	}

}
