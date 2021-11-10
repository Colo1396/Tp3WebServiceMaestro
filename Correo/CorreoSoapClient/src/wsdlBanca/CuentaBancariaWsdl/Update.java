
package wsdlBanca.CuentaBancariaWsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para update complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType name="update">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="cuentaBancaria" type="{http://services.soap.com/}cuentaBancaria" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "update", propOrder = {
    "cuentaBancaria"
})
public class Update {

    protected CuentaBancaria cuentaBancaria;

    /**
     * Obtiene el valor de la propiedad cuentaBancaria.
     * 
     * @return
     *     possible object is
     *     {@link CuentaBancaria }
     *     
     */
    public CuentaBancaria getCuentaBancaria() {
        return cuentaBancaria;
    }

    /**
     * Define el valor de la propiedad cuentaBancaria.
     * 
     * @param value
     *     allowed object is
     *     {@link CuentaBancaria }
     *     
     */
    public void setCuentaBancaria(CuentaBancaria value) {
        this.cuentaBancaria = value;
    }

}
