package com.soap.models;

import java.util.GregorianCalendar;

public class MovHistorico {
	private int idTransaccion;
	private GregorianCalendar fecha;
	private int signo;
	private double monto;
	private int idUsuario;
	private int idCuentaBancaria;
	private int idMedioDePago;

	public MovHistorico() {

	}

	public MovHistorico(int idTransaccion, GregorianCalendar fecha, int signo, double monto, int idUsuario,
			int idCuentaBancaria, int idMedioDePago) {

		this.idTransaccion = idTransaccion;
		this.fecha = fecha;
		this.signo = signo;
		this.monto = monto;
		this.idUsuario = idUsuario;
		this.idCuentaBancaria = idCuentaBancaria;
		this.idMedioDePago = idMedioDePago;
	}

	public int getIdTransaccion() {
		return idTransaccion;
	}

	public void setIdTransaccion(int idTransaccion) {
		this.idTransaccion = idTransaccion;
	}

	public GregorianCalendar getFecha() {
		return fecha;
	}

	public void setFecha(GregorianCalendar fecha) {
		this.fecha = fecha;
	}

	public int getSigno() {
		return signo;
	}

	public void setSigno(int signo) {
		this.signo = signo;
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

	public int getIdCuentaBancaria() {
		return idCuentaBancaria;
	}

	public void setIdCuentaBancaria(int idCuentaBancaria) {
		this.idCuentaBancaria = idCuentaBancaria;
	}

	public int getIdMedioDePago() {
		return idMedioDePago;
	}

	public void setIdMedioDePago(int idMedioDePago) {
		this.idMedioDePago = idMedioDePago;
	}

}
