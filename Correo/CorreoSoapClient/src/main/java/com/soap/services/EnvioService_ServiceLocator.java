/**
 * EnvioService_ServiceLocator.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package com.soap.services;

public class EnvioService_ServiceLocator extends org.apache.axis.client.Service implements com.soap.services.EnvioService_Service {

    public EnvioService_ServiceLocator() {
    }


    public EnvioService_ServiceLocator(org.apache.axis.EngineConfiguration config) {
        super(config);
    }

    public EnvioService_ServiceLocator(java.lang.String wsdlLoc, javax.xml.namespace.QName sName) throws javax.xml.rpc.ServiceException {
        super(wsdlLoc, sName);
    }

    // Use to get a proxy class for EnvioServicePort
    private java.lang.String EnvioServicePort_address = "http://localhost:8080/CorreoSoapServer-0.0.1/EnvioService";

    public java.lang.String getEnvioServicePortAddress() {
        return EnvioServicePort_address;
    }

    // The WSDD service name defaults to the port name.
    private java.lang.String EnvioServicePortWSDDServiceName = "EnvioServicePort";

    public java.lang.String getEnvioServicePortWSDDServiceName() {
        return EnvioServicePortWSDDServiceName;
    }

    public void setEnvioServicePortWSDDServiceName(java.lang.String name) {
        EnvioServicePortWSDDServiceName = name;
    }

    public com.soap.services.EnvioService_PortType getEnvioServicePort() throws javax.xml.rpc.ServiceException {
       java.net.URL endpoint;
        try {
            endpoint = new java.net.URL(EnvioServicePort_address);
        }
        catch (java.net.MalformedURLException e) {
            throw new javax.xml.rpc.ServiceException(e);
        }
        return getEnvioServicePort(endpoint);
    }

    public com.soap.services.EnvioService_PortType getEnvioServicePort(java.net.URL portAddress) throws javax.xml.rpc.ServiceException {
        try {
            com.soap.services.EnvioServiceSoapBindingStub _stub = new com.soap.services.EnvioServiceSoapBindingStub(portAddress, this);
            _stub.setPortName(getEnvioServicePortWSDDServiceName());
            return _stub;
        }
        catch (org.apache.axis.AxisFault e) {
            return null;
        }
    }

    public void setEnvioServicePortEndpointAddress(java.lang.String address) {
        EnvioServicePort_address = address;
    }

    /**
     * For the given interface, get the stub implementation.
     * If this service has no port for the given interface,
     * then ServiceException is thrown.
     */
    public java.rmi.Remote getPort(Class serviceEndpointInterface) throws javax.xml.rpc.ServiceException {
        try {
            if (com.soap.services.EnvioService_PortType.class.isAssignableFrom(serviceEndpointInterface)) {
                com.soap.services.EnvioServiceSoapBindingStub _stub = new com.soap.services.EnvioServiceSoapBindingStub(new java.net.URL(EnvioServicePort_address), this);
                _stub.setPortName(getEnvioServicePortWSDDServiceName());
                return _stub;
            }
        }
        catch (java.lang.Throwable t) {
            throw new javax.xml.rpc.ServiceException(t);
        }
        throw new javax.xml.rpc.ServiceException("There is no stub implementation for the interface:  " + (serviceEndpointInterface == null ? "null" : serviceEndpointInterface.getName()));
    }

    /**
     * For the given interface, get the stub implementation.
     * If this service has no port for the given interface,
     * then ServiceException is thrown.
     */
    public java.rmi.Remote getPort(javax.xml.namespace.QName portName, Class serviceEndpointInterface) throws javax.xml.rpc.ServiceException {
        if (portName == null) {
            return getPort(serviceEndpointInterface);
        }
        java.lang.String inputPortName = portName.getLocalPart();
        if ("EnvioServicePort".equals(inputPortName)) {
            return getEnvioServicePort();
        }
        else  {
            java.rmi.Remote _stub = getPort(serviceEndpointInterface);
            ((org.apache.axis.client.Stub) _stub).setPortName(portName);
            return _stub;
        }
    }

    public javax.xml.namespace.QName getServiceName() {
        return new javax.xml.namespace.QName("http://services.soap.com/", "EnvioService");
    }

    private java.util.HashSet ports = null;

    public java.util.Iterator getPorts() {
        if (ports == null) {
            ports = new java.util.HashSet();
            ports.add(new javax.xml.namespace.QName("http://services.soap.com/", "EnvioServicePort"));
        }
        return ports.iterator();
    }

    /**
    * Set the endpoint address for the specified port name.
    */
    public void setEndpointAddress(java.lang.String portName, java.lang.String address) throws javax.xml.rpc.ServiceException {
        
if ("EnvioServicePort".equals(portName)) {
            setEnvioServicePortEndpointAddress(address);
        }
        else 
{ // Unknown Port Name
            throw new javax.xml.rpc.ServiceException(" Cannot set Endpoint Address for Unknown Port" + portName);
        }
    }

    /**
    * Set the endpoint address for the specified port name.
    */
    public void setEndpointAddress(javax.xml.namespace.QName portName, java.lang.String address) throws javax.xml.rpc.ServiceException {
        setEndpointAddress(portName.getLocalPart(), address);
    }

}
