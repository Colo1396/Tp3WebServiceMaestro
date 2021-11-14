
package EnvioWsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para updateEstadoEnvio complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType name="updateEstadoEnvio">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="envio" type="{http://services.soap.com/}envio" minOccurs="0"/>
 *         &lt;element name="estado" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "updateEstadoEnvio", propOrder = {
    "envio",
    "estado"
})
public class UpdateEstadoEnvio {

    protected Envio envio;
    protected String estado;

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

    /**
     * Obtiene el valor de la propiedad estado.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getEstado() {
        return estado;
    }

    /**
     * Define el valor de la propiedad estado.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setEstado(String value) {
        this.estado = value;
    }

}
