
package wsdlBanca.MedioDePagoWsdl;

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
 *         &lt;element name="medioDePago" type="{http://services.soap.com/}medioDePago" minOccurs="0"/>
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
    "medioDePago"
})
public class Create {

    protected MedioDePago medioDePago;

    /**
     * Obtiene el valor de la propiedad medioDePago.
     * 
     * @return
     *     possible object is
     *     {@link MedioDePago }
     *     
     */
    public MedioDePago getMedioDePago() {
        return medioDePago;
    }

    /**
     * Define el valor de la propiedad medioDePago.
     * 
     * @param value
     *     allowed object is
     *     {@link MedioDePago }
     *     
     */
    public void setMedioDePago(MedioDePago value) {
        this.medioDePago = value;
    }

}
