
package EnvioWsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para create complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType name="create">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="envio" type="{http://services.soap.com/}envio" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "create", propOrder = {
    "envio"
})
public class Create {

    protected Envio envio;

    /**
     * Obtiene el valor de la propiedad envio.
     * 
     * @return
     *     possible object is
     *     {@link Envio }
     *     
     */
    public Envio getEnvio() {
        return envio;
    }

    /**
     * Define el valor de la propiedad envio.
     * 
     * @param value
     *     allowed object is
     *     {@link Envio }
     *     
     */
    public void setEnvio(Envio value) {
        this.envio = value;
    }

}
