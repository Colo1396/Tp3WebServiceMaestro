/**
 * Envio.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package com.soap.services;

public class Envio  implements java.io.Serializable {
    private int codSeguimiento;

    private java.lang.String domicilio;

    private java.lang.String estado;

    private int idEnvio;

    private int idUsuario;

    private int idVendedor;

    public Envio() {
    }

    public Envio(
           int codSeguimiento,
           java.lang.String domicilio,
           java.lang.String estado,
           int idEnvio,
           int idUsuario,
           int idVendedor) {
           this.codSeguimiento = codSeguimiento;
           this.domicilio = domicilio;
           this.estado = estado;
           this.idEnvio = idEnvio;
           this.idUsuario = idUsuario;
           this.idVendedor = idVendedor;
    }


    /**
     * Gets the codSeguimiento value for this Envio.
     * 
     * @return codSeguimiento
     */
    public int getCodSeguimiento() {
        return codSeguimiento;
    }


    /**
     * Sets the codSeguimiento value for this Envio.
     * 
     * @param codSeguimiento
     */
    public void setCodSeguimiento(int codSeguimiento) {
        this.codSeguimiento = codSeguimiento;
    }


    /**
     * Gets the domicilio value for this Envio.
     * 
     * @return domicilio
     */
    public java.lang.String getDomicilio() {
        return domicilio;
    }


    /**
     * Sets the domicilio value for this Envio.
     * 
     * @param domicilio
     */
    public void setDomicilio(java.lang.String domicilio) {
        this.domicilio = domicilio;
    }


    /**
     * Gets the estado value for this Envio.
     * 
     * @return estado
     */
    public java.lang.String getEstado() {
        return estado;
    }


    /**
     * Sets the estado value for this Envio.
     * 
     * @param estado
     */
    public void setEstado(java.lang.String estado) {
        this.estado = estado;
    }


    /**
     * Gets the idEnvio value for this Envio.
     * 
     * @return idEnvio
     */
    public int getIdEnvio() {
        return idEnvio;
    }


    /**
     * Sets the idEnvio value for this Envio.
     * 
     * @param idEnvio
     */
    public void setIdEnvio(int idEnvio) {
        this.idEnvio = idEnvio;
    }


    /**
     * Gets the idUsuario value for this Envio.
     * 
     * @return idUsuario
     */
    public int getIdUsuario() {
        return idUsuario;
    }


    /**
     * Sets the idUsuario value for this Envio.
     * 
     * @param idUsuario
     */
    public void setIdUsuario(int idUsuario) {
        this.idUsuario = idUsuario;
    }


    /**
     * Gets the idVendedor value for this Envio.
     * 
     * @return idVendedor
     */
    public int getIdVendedor() {
        return idVendedor;
    }


    /**
     * Sets the idVendedor value for this Envio.
     * 
     * @param idVendedor
     */
    public void setIdVendedor(int idVendedor) {
        this.idVendedor = idVendedor;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof Envio)) return false;
        Envio other = (Envio) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            this.codSeguimiento == other.getCodSeguimiento() &&
            ((this.domicilio==null && other.getDomicilio()==null) || 
             (this.domicilio!=null &&
              this.domicilio.equals(other.getDomicilio()))) &&
            ((this.estado==null && other.getEstado()==null) || 
             (this.estado!=null &&
              this.estado.equals(other.getEstado()))) &&
            this.idEnvio == other.getIdEnvio() &&
            this.idUsuario == other.getIdUsuario() &&
            this.idVendedor == other.getIdVendedor();
        __equalsCalc = null;
        return _equals;
    }

    private boolean __hashCodeCalc = false;
    public synchronized int hashCode() {
        if (__hashCodeCalc) {
            return 0;
        }
        __hashCodeCalc = true;
        int _hashCode = 1;
        _hashCode += getCodSeguimiento();
        if (getDomicilio() != null) {
            _hashCode += getDomicilio().hashCode();
        }
        if (getEstado() != null) {
            _hashCode += getEstado().hashCode();
        }
        _hashCode += getIdEnvio();
        _hashCode += getIdUsuario();
        _hashCode += getIdVendedor();
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(Envio.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://services.soap.com/", "envio"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("codSeguimiento");
        elemField.setXmlName(new javax.xml.namespace.QName("", "codSeguimiento"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "int"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("domicilio");
        elemField.setXmlName(new javax.xml.namespace.QName("", "domicilio"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("estado");
        elemField.setXmlName(new javax.xml.namespace.QName("", "estado"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("idEnvio");
        elemField.setXmlName(new javax.xml.namespace.QName("", "idEnvio"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "int"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("idUsuario");
        elemField.setXmlName(new javax.xml.namespace.QName("", "idUsuario"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "int"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("idVendedor");
        elemField.setXmlName(new javax.xml.namespace.QName("", "idVendedor"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "int"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
    }

    /**
     * Return type metadata object
     */
    public static org.apache.axis.description.TypeDesc getTypeDesc() {
        return typeDesc;
    }

    /**
     * Get Custom Serializer
     */
    public static org.apache.axis.encoding.Serializer getSerializer(
           java.lang.String mechType, 
           java.lang.Class _javaType,  
           javax.xml.namespace.QName _xmlType) {
        return 
          new  org.apache.axis.encoding.ser.BeanSerializer(
            _javaType, _xmlType, typeDesc);
    }

    /**
     * Get Custom Deserializer
     */
    public static org.apache.axis.encoding.Deserializer getDeserializer(
           java.lang.String mechType, 
           java.lang.Class _javaType,  
           javax.xml.namespace.QName _xmlType) {
        return 
          new  org.apache.axis.encoding.ser.BeanDeserializer(
            _javaType, _xmlType, typeDesc);
    }

}
