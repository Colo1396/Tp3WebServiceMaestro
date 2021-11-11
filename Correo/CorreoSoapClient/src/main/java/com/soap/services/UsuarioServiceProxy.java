package com.soap.services;

public class UsuarioServiceProxy implements com.soap.services.UsuarioService_PortType {
  private String _endpoint = null;
  private com.soap.services.UsuarioService_PortType usuarioService_PortType = null;
  
  public UsuarioServiceProxy() {
    _initUsuarioServiceProxy();
  }
  
  public UsuarioServiceProxy(String endpoint) {
    _endpoint = endpoint;
    _initUsuarioServiceProxy();
  }
  
  private void _initUsuarioServiceProxy() {
    try {
      usuarioService_PortType = (new com.soap.services.UsuarioService_ServiceLocator()).getUsuarioServicePort();
      if (usuarioService_PortType != null) {
        if (_endpoint != null)
          ((javax.xml.rpc.Stub)usuarioService_PortType)._setProperty("javax.xml.rpc.service.endpoint.address", _endpoint);
        else
          _endpoint = (String)((javax.xml.rpc.Stub)usuarioService_PortType)._getProperty("javax.xml.rpc.service.endpoint.address");
      }
      
    }
    catch (javax.xml.rpc.ServiceException serviceException) {}
  }
  
  public String getEndpoint() {
    return _endpoint;
  }
  
  public void setEndpoint(String endpoint) {
    _endpoint = endpoint;
    if (usuarioService_PortType != null)
      ((javax.xml.rpc.Stub)usuarioService_PortType)._setProperty("javax.xml.rpc.service.endpoint.address", _endpoint);
    
  }
  
  public com.soap.services.UsuarioService_PortType getUsuarioService_PortType() {
    if (usuarioService_PortType == null)
      _initUsuarioServiceProxy();
    return usuarioService_PortType;
  }
  
  public com.soap.services.Usuario findById(int id) throws java.rmi.RemoteException{
    if (usuarioService_PortType == null)
      _initUsuarioServiceProxy();
    return usuarioService_PortType.findById(id);
  }
  
  public java.lang.String delete(int id) throws java.rmi.RemoteException{
    if (usuarioService_PortType == null)
      _initUsuarioServiceProxy();
    return usuarioService_PortType.delete(id);
  }
  
  public com.soap.services.Usuario[] findAll() throws java.rmi.RemoteException{
    if (usuarioService_PortType == null)
      _initUsuarioServiceProxy();
    return usuarioService_PortType.findAll();
  }
  
  public java.lang.String create(com.soap.services.Usuario usuario) throws java.rmi.RemoteException{
    if (usuarioService_PortType == null)
      _initUsuarioServiceProxy();
    return usuarioService_PortType.create(usuario);
  }
  
  public com.soap.services.Usuario update(com.soap.services.Usuario usuario) throws java.rmi.RemoteException{
    if (usuarioService_PortType == null)
      _initUsuarioServiceProxy();
    return usuarioService_PortType.update(usuario);
  }
  
  
}