
package UsuarioWsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para validarLogin complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType name="validarLogin">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="usuarioLog" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="passwordLog" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "validarLogin", propOrder = {
    "usuarioLog",
    "passwordLog"
})
public class ValidarLogin {

    protected String usuarioLog;
    protected String passwordLog;

    /**
     * Obtiene el valor de la propiedad usuarioLog.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getUsuarioLog() {
        return usuarioLog;
    }

    /**
     * Define el valor de la propiedad usuarioLog.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setUsuarioLog(String value) {
        this.usuarioLog = value;
    }

    /**
     * Obtiene el valor de la propiedad passwordLog.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPasswordLog() {
        return passwordLog;
    }

    /**
     * Define el valor de la propiedad passwordLog.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPasswordLog(String value) {
        this.passwordLog = value;
    }

}
