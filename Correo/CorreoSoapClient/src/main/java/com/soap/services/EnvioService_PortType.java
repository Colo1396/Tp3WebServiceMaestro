/**
 * EnvioService_PortType.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package com.soap.services;

public interface EnvioService_PortType extends java.rmi.Remote {
    public com.soap.services.Envio findById(int id) throws java.rmi.RemoteException;
    public java.lang.String delete(int id) throws java.rmi.RemoteException;
    public com.soap.services.Envio[] findAll() throws java.rmi.RemoteException;
    public java.lang.String create(com.soap.services.Envio envio) throws java.rmi.RemoteException;
    public com.soap.services.Envio update(com.soap.services.Envio envio) throws java.rmi.RemoteException;
}
