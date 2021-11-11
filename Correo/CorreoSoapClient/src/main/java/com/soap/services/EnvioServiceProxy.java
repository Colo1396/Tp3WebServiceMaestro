package com.soap.services;

public class EnvioServiceProxy implements com.soap.services.EnvioService_PortType {
  private String _endpoint = null;
  private com.soap.services.EnvioService_PortType envioService_PortType = null;
  
  public EnvioServiceProxy() {
    _initEnvioServiceProxy();
  }
  
  public EnvioServiceProxy(String endpoint) {
    _endpoint = endpoint;
    _initEnvioServiceProxy();
  }
  
  private void _initEnvioServiceProxy() {
    try {
      envioService_PortType = (new com.soap.services.EnvioService_ServiceLocator()).getEnvioServicePort();
      if (envioService_PortType != null) {
        if (_endpoint != null)
          ((javax.xml.rpc.Stub)envioService_PortType)._setProperty("javax.xml.rpc.service.endpoint.address", _endpoint);
        else
          _endpoint = (String)((javax.xml.rpc.Stub)envioService_PortType)._getProperty("javax.xml.rpc.service.endpoint.address");
      }
      
    }
    catch (javax.xml.rpc.ServiceException serviceException) {}
  }
  
  public String getEndpoint() {
    return _endpoint;
  }
  
  public void setEndpoint(String endpoint) {
    _endpoint = endpoint;
    if (envioService_PortType != null)
      ((javax.xml.rpc.Stub)envioService_PortType)._setProperty("javax.xml.rpc.service.endpoint.address", _endpoint);
    
  }
  
  public com.soap.services.EnvioService_PortType getEnvioService_PortType() {
    if (envioService_PortType == null)
      _initEnvioServiceProxy();
    return envioService_PortType;
  }
  
  public com.soap.services.Envio findById(int id) throws java.rmi.RemoteException{
    if (envioService_PortType == null)
      _initEnvioServiceProxy();
    return envioService_PortType.findById(id);
  }
  
  public java.lang.String delete(int id) throws java.rmi.RemoteException{
    if (envioService_PortType == null)
      _initEnvioServiceProxy();
    return envioService_PortType.delete(id);
  }
  
  public com.soap.services.Envio[] findAll() throws java.rmi.RemoteException{
    if (envioService_PortType == null)
      _initEnvioServiceProxy();
    return envioService_PortType.findAll();
  }
  
  public java.lang.String create(com.soap.services.Envio envio) throws java.rmi.RemoteException{
    if (envioService_PortType == null)
      _initEnvioServiceProxy();
    return envioService_PortType.create(envio);
  }
  
  public com.soap.services.Envio update(com.soap.services.Envio envio) throws java.rmi.RemoteException{
    if (envioService_PortType == null)
      _initEnvioServiceProxy();
    return envioService_PortType.update(envio);
  }
  
  
}