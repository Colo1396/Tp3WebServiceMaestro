
package wsdlBanca.CuentaBancariaWsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para cuentaBancaria complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType name="cuentaBancaria">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="idCuentaBancaria" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="idUsuario" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="monto" type="{http://www.w3.org/2001/XMLSchema}double"/>
 *         &lt;element name="nroCuenta" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "cuentaBancaria", propOrder = {
    "idCuentaBancaria",
    "idUsuario",
    "monto",
    "nroCuenta"
})
public class CuentaBancaria {

    protected int idCuentaBancaria;
    protected int idUsuario;
    protected double monto;
    protected String nroCuenta;

    /**
     * Obtiene el valor de la propiedad idCuentaBancaria.
     * 
     */
    public int getIdCuentaBancaria() {
        return idCuentaBancaria;
    }

    /**
     * Define el valor de la propiedad idCuentaBancaria.
     * 
     */
    public void setIdCuentaBancaria(int value) {
        this.idCuentaBancaria = value;
    }

    /**
     * Obtiene el valor de la propiedad idUsuario.
     * 
     */
    public int getIdUsuario() {
        return idUsuario;
    }

    /**
     * Define el valor de la propiedad idUsuario.
     * 
     */
    public void setIdUsuario(int value) {
        this.idUsuario = value;
    }

    /**
     * Obtiene el valor de la propiedad monto.
     * 
     */
    public double getMonto() {
        return monto;
    }

    /**
     * Define el valor de la propiedad monto.
     * 
     */
    public void setMonto(double value) {
        this.monto = value;
    }

    /**
     * Obtiene el valor de la propiedad nroCuenta.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getNroCuenta() {
        return nroCuenta;
    }

    /**
     * Define el valor de la propiedad nroCuenta.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setNroCuenta(String value) {
        this.nroCuenta = value;
    }

}
