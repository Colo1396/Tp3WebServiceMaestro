
package EnvioWsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para envio complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType name="envio">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="codSeguimiento" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="domicilio" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="estado" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="idEnvio" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="idUsuario" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="idVendedor" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "envio", propOrder = {
    "codSeguimiento",
    "domicilio",
    "estado",
    "idEnvio",
    "idUsuario",
    "idVendedor"
})
public class Envio {

    protected int codSeguimiento;
    protected String domicilio;
    protected String estado;
    protected int idEnvio;
    protected int idUsuario;
    protected int idVendedor;

    /**
     * Obtiene el valor de la propiedad codSeguimiento.
     * 
     */
    public int getCodSeguimiento() {
        return codSeguimiento;
    }

    /**
     * Define el valor de la propiedad codSeguimiento.
     * 
     */
    public void setCodSeguimiento(int value) {
        this.codSeguimiento = value;
    }

    /**
     * Obtiene el valor de la propiedad domicilio.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDomicilio() {
        return domicilio;
    }

    /**
     * Define el valor de la propiedad domicilio.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDomicilio(String value) {
        this.domicilio = value;
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

    /**
     * Obtiene el valor de la propiedad idEnvio.
     * 
     */
    public int getIdEnvio() {
        return idEnvio;
    }

    /**
     * Define el valor de la propiedad idEnvio.
     * 
     */
    public void setIdEnvio(int value) {
        this.idEnvio = value;
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
     * Obtiene el valor de la propiedad idVendedor.
     * 
     */
    public int getIdVendedor() {
        return idVendedor;
    }

    /**
     * Define el valor de la propiedad idVendedor.
     * 
     */
    public void setIdVendedor(int value) {
        this.idVendedor = value;
    }

}
