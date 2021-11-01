package com.soap.config;

import javax.jws.WebMethod;
import javax.jws.WebService;
import javax.jws.soap.SOAPBinding;
import javax.jws.soap.SOAPBinding.Style;
 
@WebService
@SOAPBinding(style = Style.RPC)
public class IndexWs {
 
    @WebMethod
    public String Bienvenido(String name) {
        return String.format("Bienvenido %s", name);
    }
}