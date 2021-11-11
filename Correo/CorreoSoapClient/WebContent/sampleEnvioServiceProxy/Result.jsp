<%@page contentType="text/html;charset=UTF-8"%>
<% request.setCharacterEncoding("UTF-8"); %>
<HTML>
<HEAD>
<TITLE>Result</TITLE>
</HEAD>
<BODY>
<H1>Result</H1>

<jsp:useBean id="sampleEnvioServiceProxyid" scope="session" class="com.soap.services.EnvioServiceProxy" />
<%
if (request.getParameter("endpoint") != null && request.getParameter("endpoint").length() > 0)
sampleEnvioServiceProxyid.setEndpoint(request.getParameter("endpoint"));
%>

<%
String method = request.getParameter("method");
int methodID = 0;
if (method == null) methodID = -1;

if(methodID != -1) methodID = Integer.parseInt(method);
boolean gotMethod = false;

try {
switch (methodID){ 
case 2:
        gotMethod = true;
        java.lang.String getEndpoint2mtemp = sampleEnvioServiceProxyid.getEndpoint();
if(getEndpoint2mtemp == null){
%>
<%=getEndpoint2mtemp %>
<%
}else{
        String tempResultreturnp3 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(getEndpoint2mtemp));
        %>
        <%= tempResultreturnp3 %>
        <%
}
break;
case 5:
        gotMethod = true;
        String endpoint_0id=  request.getParameter("endpoint8");
            java.lang.String endpoint_0idTemp = null;
        if(!endpoint_0id.equals("")){
         endpoint_0idTemp  = endpoint_0id;
        }
        sampleEnvioServiceProxyid.setEndpoint(endpoint_0idTemp);
break;
case 10:
        gotMethod = true;
        com.soap.services.EnvioService_PortType getEnvioService_PortType10mtemp = sampleEnvioServiceProxyid.getEnvioService_PortType();
if(getEnvioService_PortType10mtemp == null){
%>
<%=getEnvioService_PortType10mtemp %>
<%
}else{
        if(getEnvioService_PortType10mtemp!= null){
        String tempreturnp11 = getEnvioService_PortType10mtemp.toString();
        %>
        <%=tempreturnp11%>
        <%
        }}
break;
case 13:
        gotMethod = true;
        String id_1id=  request.getParameter("id28");
        int id_1idTemp  = Integer.parseInt(id_1id);
        com.soap.services.Envio findById13mtemp = sampleEnvioServiceProxyid.findById(id_1idTemp);
if(findById13mtemp == null){
%>
<%=findById13mtemp %>
<%
}else{
%>
<TABLE>
<TR>
<TD COLSPAN="3" ALIGN="LEFT">returnp:</TD>
<TR>
<TD WIDTH="5%"></TD>
<TD COLSPAN="2" ALIGN="LEFT">codSeguimiento:</TD>
<TD>
<%
if(findById13mtemp != null){
%>
<%=findById13mtemp.getCodSeguimiento()
%><%}%>
</TD>
<TR>
<TD WIDTH="5%"></TD>
<TD COLSPAN="2" ALIGN="LEFT">idVendedor:</TD>
<TD>
<%
if(findById13mtemp != null){
%>
<%=findById13mtemp.getIdVendedor()
%><%}%>
</TD>
<TR>
<TD WIDTH="5%"></TD>
<TD COLSPAN="2" ALIGN="LEFT">idUsuario:</TD>
<TD>
<%
if(findById13mtemp != null){
%>
<%=findById13mtemp.getIdUsuario()
%><%}%>
</TD>
<TR>
<TD WIDTH="5%"></TD>
<TD COLSPAN="2" ALIGN="LEFT">idEnvio:</TD>
<TD>
<%
if(findById13mtemp != null){
%>
<%=findById13mtemp.getIdEnvio()
%><%}%>
</TD>
<TR>
<TD WIDTH="5%"></TD>
<TD COLSPAN="2" ALIGN="LEFT">domicilio:</TD>
<TD>
<%
if(findById13mtemp != null){
java.lang.String typedomicilio24 = findById13mtemp.getDomicilio();
        String tempResultdomicilio24 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(typedomicilio24));
        %>
        <%= tempResultdomicilio24 %>
        <%
}%>
</TD>
<TR>
<TD WIDTH="5%"></TD>
<TD COLSPAN="2" ALIGN="LEFT">estado:</TD>
<TD>
<%
if(findById13mtemp != null){
java.lang.String typeestado26 = findById13mtemp.getEstado();
        String tempResultestado26 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(typeestado26));
        %>
        <%= tempResultestado26 %>
        <%
}%>
</TD>
</TABLE>
<%
}
break;
case 30:
        gotMethod = true;
        String id_2id=  request.getParameter("id33");
        int id_2idTemp  = Integer.parseInt(id_2id);
        java.lang.String delete30mtemp = sampleEnvioServiceProxyid.delete(id_2idTemp);
if(delete30mtemp == null){
%>
<%=delete30mtemp %>
<%
}else{
        String tempResultreturnp31 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(delete30mtemp));
        %>
        <%= tempResultreturnp31 %>
        <%
}
break;
case 35:
        gotMethod = true;
        com.soap.services.Envio[] findAll35mtemp = sampleEnvioServiceProxyid.findAll();
if(findAll35mtemp == null){
%>
<%=findAll35mtemp %>
<%
}else{
        String tempreturnp36 = null;
        if(findAll35mtemp != null){
        java.util.List listreturnp36= java.util.Arrays.asList(findAll35mtemp);
        tempreturnp36 = listreturnp36.toString();
        }
        %>
        <%=tempreturnp36%>
        <%
}
break;
case 38:
        gotMethod = true;
        String codSeguimiento_4id=  request.getParameter("codSeguimiento43");
        int codSeguimiento_4idTemp  = Integer.parseInt(codSeguimiento_4id);
        String idVendedor_5id=  request.getParameter("idVendedor45");
        int idVendedor_5idTemp  = Integer.parseInt(idVendedor_5id);
        String idUsuario_6id=  request.getParameter("idUsuario47");
        int idUsuario_6idTemp  = Integer.parseInt(idUsuario_6id);
        String idEnvio_7id=  request.getParameter("idEnvio49");
        int idEnvio_7idTemp  = Integer.parseInt(idEnvio_7id);
        String domicilio_8id=  request.getParameter("domicilio51");
            java.lang.String domicilio_8idTemp = null;
        if(!domicilio_8id.equals("")){
         domicilio_8idTemp  = domicilio_8id;
        }
        String estado_9id=  request.getParameter("estado53");
            java.lang.String estado_9idTemp = null;
        if(!estado_9id.equals("")){
         estado_9idTemp  = estado_9id;
        }
        %>
        <jsp:useBean id="com1soap1services1Envio_3id" scope="session" class="com.soap.services.Envio" />
        <%
        com1soap1services1Envio_3id.setCodSeguimiento(codSeguimiento_4idTemp);
        com1soap1services1Envio_3id.setIdVendedor(idVendedor_5idTemp);
        com1soap1services1Envio_3id.setIdUsuario(idUsuario_6idTemp);
        com1soap1services1Envio_3id.setIdEnvio(idEnvio_7idTemp);
        com1soap1services1Envio_3id.setDomicilio(domicilio_8idTemp);
        com1soap1services1Envio_3id.setEstado(estado_9idTemp);
        java.lang.String create38mtemp = sampleEnvioServiceProxyid.create(com1soap1services1Envio_3id);
if(create38mtemp == null){
%>
<%=create38mtemp %>
<%
}else{
        String tempResultreturnp39 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(create38mtemp));
        %>
        <%= tempResultreturnp39 %>
        <%
}
break;
case 55:
        gotMethod = true;
        String codSeguimiento_11id=  request.getParameter("codSeguimiento72");
        int codSeguimiento_11idTemp  = Integer.parseInt(codSeguimiento_11id);
        String idVendedor_12id=  request.getParameter("idVendedor74");
        int idVendedor_12idTemp  = Integer.parseInt(idVendedor_12id);
        String idUsuario_13id=  request.getParameter("idUsuario76");
        int idUsuario_13idTemp  = Integer.parseInt(idUsuario_13id);
        String idEnvio_14id=  request.getParameter("idEnvio78");
        int idEnvio_14idTemp  = Integer.parseInt(idEnvio_14id);
        String domicilio_15id=  request.getParameter("domicilio80");
            java.lang.String domicilio_15idTemp = null;
        if(!domicilio_15id.equals("")){
         domicilio_15idTemp  = domicilio_15id;
        }
        String estado_16id=  request.getParameter("estado82");
            java.lang.String estado_16idTemp = null;
        if(!estado_16id.equals("")){
         estado_16idTemp  = estado_16id;
        }
        %>
        <jsp:useBean id="com1soap1services1Envio_10id" scope="session" class="com.soap.services.Envio" />
        <%
        com1soap1services1Envio_10id.setCodSeguimiento(codSeguimiento_11idTemp);
        com1soap1services1Envio_10id.setIdVendedor(idVendedor_12idTemp);
        com1soap1services1Envio_10id.setIdUsuario(idUsuario_13idTemp);
        com1soap1services1Envio_10id.setIdEnvio(idEnvio_14idTemp);
        com1soap1services1Envio_10id.setDomicilio(domicilio_15idTemp);
        com1soap1services1Envio_10id.setEstado(estado_16idTemp);
        com.soap.services.Envio update55mtemp = sampleEnvioServiceProxyid.update(com1soap1services1Envio_10id);
if(update55mtemp == null){
%>
<%=update55mtemp %>
<%
}else{
%>
<TABLE>
<TR>
<TD COLSPAN="3" ALIGN="LEFT">returnp:</TD>
<TR>
<TD WIDTH="5%"></TD>
<TD COLSPAN="2" ALIGN="LEFT">codSeguimiento:</TD>
<TD>
<%
if(update55mtemp != null){
%>
<%=update55mtemp.getCodSeguimiento()
%><%}%>
</TD>
<TR>
<TD WIDTH="5%"></TD>
<TD COLSPAN="2" ALIGN="LEFT">idVendedor:</TD>
<TD>
<%
if(update55mtemp != null){
%>
<%=update55mtemp.getIdVendedor()
%><%}%>
</TD>
<TR>
<TD WIDTH="5%"></TD>
<TD COLSPAN="2" ALIGN="LEFT">idUsuario:</TD>
<TD>
<%
if(update55mtemp != null){
%>
<%=update55mtemp.getIdUsuario()
%><%}%>
</TD>
<TR>
<TD WIDTH="5%"></TD>
<TD COLSPAN="2" ALIGN="LEFT">idEnvio:</TD>
<TD>
<%
if(update55mtemp != null){
%>
<%=update55mtemp.getIdEnvio()
%><%}%>
</TD>
<TR>
<TD WIDTH="5%"></TD>
<TD COLSPAN="2" ALIGN="LEFT">domicilio:</TD>
<TD>
<%
if(update55mtemp != null){
java.lang.String typedomicilio66 = update55mtemp.getDomicilio();
        String tempResultdomicilio66 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(typedomicilio66));
        %>
        <%= tempResultdomicilio66 %>
        <%
}%>
</TD>
<TR>
<TD WIDTH="5%"></TD>
<TD COLSPAN="2" ALIGN="LEFT">estado:</TD>
<TD>
<%
if(update55mtemp != null){
java.lang.String typeestado68 = update55mtemp.getEstado();
        String tempResultestado68 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(typeestado68));
        %>
        <%= tempResultestado68 %>
        <%
}%>
</TD>
</TABLE>
<%
}
break;
}
} catch (Exception e) { 
%>
Exception: <%= org.eclipse.jst.ws.util.JspUtils.markup(e.toString()) %>
Message: <%= org.eclipse.jst.ws.util.JspUtils.markup(e.getMessage()) %>
<%
return;
}
if(!gotMethod){
%>
result: N/A
<%
}
%>
</BODY>
</HTML>