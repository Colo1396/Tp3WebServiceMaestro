/**
 * Usuario.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package com.soap.services;

public class Usuario  implements java.io.Serializable {
    private java.lang.String contraseña;

    private int dni;

    private int idUsuario;

    private int idUsuarioRef;

    private java.lang.String razonSocial;

    private java.lang.String usuario;

    public Usuario() {
    }

    public Usuario(
           java.lang.String contraseña,
           int dni,
           int idUsuario,
           int idUsuarioRef,
           java.lang.String razonSocial,
           java.lang.String usuario) {
           this.contraseña = contraseña;
           this.dni = dni;
           this.idUsuario = idUsuario;
           this.idUsuarioRef = idUsuarioRef;
           this.razonSocial = razonSocial;
           this.usuario = usuario;
    }


    /**
     * Gets the contraseña value for this Usuario.
     * 
     * @return contraseña
     */
    public java.lang.String getContraseña() {
        return contraseña;
    }


    /**
     * Sets the contraseña value for this Usuario.
     * 
     * @param contraseña
     */
    public void setContraseña(java.lang.String contraseña) {
        this.contraseña = contraseña;
    }


    /**
     * Gets the dni value for this Usuario.
     * 
     * @return dni
     */
    public int getDni() {
        return dni;
    }


    /**
     * Sets the dni value for this Usuario.
     * 
     * @param dni
     */
    public void setDni(int dni) {
        this.dni = dni;
    }


    /**
     * Gets the idUsuario value for this Usuario.
     * 
     * @return idUsuario
     */
    public int getIdUsuario() {
        return idUsuario;
    }


    /**
     * Sets the idUsuario value for this Usuario.
     * 
     * @param idUsuario
     */
    public void setIdUsuario(int idUsuario) {
        this.idUsuario = idUsuario;
    }


    /**
     * Gets the idUsuarioRef value for this Usuario.
     * 
     * @return idUsuarioRef
     */
    public int getIdUsuarioRef() {
        return idUsuarioRef;
    }


    /**
     * Sets the idUsuarioRef value for this Usuario.
     * 
     * @param idUsuarioRef
     */
    public void setIdUsuarioRef(int idUsuarioRef) {
        this.idUsuarioRef = idUsuarioRef;
    }


    /**
     * Gets the razonSocial value for this Usuario.
     * 
     * @return razonSocial
     */
    public java.lang.String getRazonSocial() {
        return razonSocial;
    }


    /**
     * Sets the razonSocial value for this Usuario.
     * 
     * @param razonSocial
     */
    public void setRazonSocial(java.lang.String razonSocial) {
        this.razonSocial = razonSocial;
    }


    /**
     * Gets the usuario value for this Usuario.
     * 
     * @return usuario
     */
    public java.lang.String getUsuario() {
        return usuario;
    }


    /**
     * Sets the usuario value for this Usuario.
     * 
     * @param usuario
     */
    public void setUsuario(java.lang.String usuario) {
        this.usuario = usuario;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof Usuario)) return false;
        Usuario other = (Usuario) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.contraseña==null && other.getContraseña()==null) || 
             (this.contraseña!=null &&
              this.contraseña.equals(other.getContraseña()))) &&
            this.dni == other.getDni() &&
            this.idUsuario == other.getIdUsuario() &&
            this.idUsuarioRef == other.getIdUsuarioRef() &&
            ((this.razonSocial==null && other.getRazonSocial()==null) || 
             (this.razonSocial!=null &&
              this.razonSocial.equals(other.getRazonSocial()))) &&
            ((this.usuario==null && other.getUsuario()==null) || 
             (this.usuario!=null &&
              this.usuario.equals(other.getUsuario())));
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
        if (getContraseña() != null) {
            _hashCode += getContraseña().hashCode();
        }
        _hashCode += getDni();
        _hashCode += getIdUsuario();
        _hashCode += getIdUsuarioRef();
        if (getRazonSocial() != null) {
            _hashCode += getRazonSocial().hashCode();
        }
        if (getUsuario() != null) {
            _hashCode += getUsuario().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(Usuario.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://services.soap.com/", "usuario"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("contraseña");
        elemField.setXmlName(new javax.xml.namespace.QName("", "contraseña"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("dni");
        elemField.setXmlName(new javax.xml.namespace.QName("", "dni"));
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
        elemField.setFieldName("idUsuarioRef");
        elemField.setXmlName(new javax.xml.namespace.QName("", "idUsuarioRef"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "int"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("razonSocial");
        elemField.setXmlName(new javax.xml.namespace.QName("", "razonSocial"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("usuario");
        elemField.setXmlName(new javax.xml.namespace.QName("", "usuario"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
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
