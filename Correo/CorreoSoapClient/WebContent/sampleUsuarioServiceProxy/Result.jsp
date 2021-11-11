<%@page contentType="text/html;charset=UTF-8"%>
<% request.setCharacterEncoding("UTF-8"); %>
<HTML>
<HEAD>
<TITLE>Result</TITLE>
</HEAD>
<BODY>
<H1>Result</H1>

<jsp:useBean id="sampleUsuarioServiceProxyid" scope="session" class="com.soap.services.UsuarioServiceProxy" />
<%
if (request.getParameter("endpoint") != null && request.getParameter("endpoint").length() > 0)
sampleUsuarioServiceProxyid.setEndpoint(request.getParameter("endpoint"));
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
        java.lang.String getEndpoint2mtemp = sampleUsuarioServiceProxyid.getEndpoint();
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
        sampleUsuarioServiceProxyid.setEndpoint(endpoint_0idTemp);
break;
case 10:
        gotMethod = true;
        com.soap.services.UsuarioService_PortType getUsuarioService_PortType10mtemp = sampleUsuarioServiceProxyid.getUsuarioService_PortType();
if(getUsuarioService_PortType10mtemp == null){
%>
<%=getUsuarioService_PortType10mtemp %>
<%
}else{
        if(getUsuarioService_PortType10mtemp!= null){
        String tempreturnp11 = getUsuarioService_PortType10mtemp.toString();
        %>
        <%=tempreturnp11%>
        <%
        }}
break;
case 13:
        gotMethod = true;
        String id_1id=  request.getParameter("id28");
        int id_1idTemp  = Integer.parseInt(id_1id);
        com.soap.services.Usuario findById13mtemp = sampleUsuarioServiceProxyid.findById(id_1idTemp);
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
<TD COLSPAN="2" ALIGN="LEFT">dni:</TD>
<TD>
<%
if(findById13mtemp != null){
%>
<%=findById13mtemp.getDni()
%><%}%>
</TD>
<TR>
<TD WIDTH="5%"></TD>
<TD COLSPAN="2" ALIGN="LEFT">contraseña:</TD>
<TD>
<%
if(findById13mtemp != null){
java.lang.String typecontraseña18 = findById13mtemp.getContraseña();
        String tempResultcontraseña18 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(typecontraseña18));
        %>
        <%= tempResultcontraseña18 %>
        <%
}%>
</TD>
<TR>
<TD WIDTH="5%"></TD>
<TD COLSPAN="2" ALIGN="LEFT">razonSocial:</TD>
<TD>
<%
if(findById13mtemp != null){
java.lang.String typerazonSocial20 = findById13mtemp.getRazonSocial();
        String tempResultrazonSocial20 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(typerazonSocial20));
        %>
        <%= tempResultrazonSocial20 %>
        <%
}%>
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
<TD COLSPAN="2" ALIGN="LEFT">usuario:</TD>
<TD>
<%
if(findById13mtemp != null){
java.lang.String typeusuario24 = findById13mtemp.getUsuario();
        String tempResultusuario24 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(typeusuario24));
        %>
        <%= tempResultusuario24 %>
        <%
}%>
</TD>
<TR>
<TD WIDTH="5%"></TD>
<TD COLSPAN="2" ALIGN="LEFT">idUsuarioRef:</TD>
<TD>
<%
if(findById13mtemp != null){
%>
<%=findById13mtemp.getIdUsuarioRef()
%><%}%>
</TD>
</TABLE>
<%
}
break;
case 30:
        gotMethod = true;
        String id_2id=  request.getParameter("id33");
        int id_2idTemp  = Integer.parseInt(id_2id);
        java.lang.String delete30mtemp = sampleUsuarioServiceProxyid.delete(id_2idTemp);
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
        com.soap.services.Usuario[] findAll35mtemp = sampleUsuarioServiceProxyid.findAll();
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
        String dni_4id=  request.getParameter("dni43");
        int dni_4idTemp  = Integer.parseInt(dni_4id);
        String contraseña_5id=  request.getParameter("contraseña45");
            java.lang.String contraseña_5idTemp = null;
        if(!contraseña_5id.equals("")){
         contraseña_5idTemp  = contraseña_5id;
        }
        String razonSocial_6id=  request.getParameter("razonSocial47");
            java.lang.String razonSocial_6idTemp = null;
        if(!razonSocial_6id.equals("")){
         razonSocial_6idTemp  = razonSocial_6id;
        }
        String idUsuario_7id=  request.getParameter("idUsuario49");
        int idUsuario_7idTemp  = Integer.parseInt(idUsuario_7id);
        String usuario_8id=  request.getParameter("usuario51");
            java.lang.String usuario_8idTemp = null;
        if(!usuario_8id.equals("")){
         usuario_8idTemp  = usuario_8id;
        }
        String idUsuarioRef_9id=  request.getParameter("idUsuarioRef53");
        int idUsuarioRef_9idTemp  = Integer.parseInt(idUsuarioRef_9id);
        %>
        <jsp:useBean id="com1soap1services1Usuario_3id" scope="session" class="com.soap.services.Usuario" />
        <%
        com1soap1services1Usuario_3id.setDni(dni_4idTemp);
        com1soap1services1Usuario_3id.setContraseña(contraseña_5idTemp);
        com1soap1services1Usuario_3id.setRazonSocial(razonSocial_6idTemp);
        com1soap1services1Usuario_3id.setIdUsuario(idUsuario_7idTemp);
        com1soap1services1Usuario_3id.setUsuario(usuario_8idTemp);
        com1soap1services1Usuario_3id.setIdUsuarioRef(idUsuarioRef_9idTemp);
        java.lang.String create38mtemp = sampleUsuarioServiceProxyid.create(com1soap1services1Usuario_3id);
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
        String dni_11id=  request.getParameter("dni72");
        int dni_11idTemp  = Integer.parseInt(dni_11id);
        String contraseña_12id=  request.getParameter("contraseña74");
            java.lang.String contraseña_12idTemp = null;
        if(!contraseña_12id.equals("")){
         contraseña_12idTemp  = contraseña_12id;
        }
        String razonSocial_13id=  request.getParameter("razonSocial76");
            java.lang.String razonSocial_13idTemp = null;
        if(!razonSocial_13id.equals("")){
         razonSocial_13idTemp  = razonSocial_13id;
        }
        String idUsuario_14id=  request.getParameter("idUsuario78");
        int idUsuario_14idTemp  = Integer.parseInt(idUsuario_14id);
        String usuario_15id=  request.getParameter("usuario80");
            java.lang.String usuario_15idTemp = null;
        if(!usuario_15id.equals("")){
         usuario_15idTemp  = usuario_15id;
        }
        String idUsuarioRef_16id=  request.getParameter("idUsuarioRef82");
        int idUsuarioRef_16idTemp  = Integer.parseInt(idUsuarioRef_16id);
        %>
        <jsp:useBean id="com1soap1services1Usuario_10id" scope="session" class="com.soap.services.Usuario" />
        <%
        com1soap1services1Usuario_10id.setDni(dni_11idTemp);
        com1soap1services1Usuario_10id.setContraseña(contraseña_12idTemp);
        com1soap1services1Usuario_10id.setRazonSocial(razonSocial_13idTemp);
        com1soap1services1Usuario_10id.setIdUsuario(idUsuario_14idTemp);
        com1soap1services1Usuario_10id.setUsuario(usuario_15idTemp);
        com1soap1services1Usuario_10id.setIdUsuarioRef(idUsuarioRef_16idTemp);
        com.soap.services.Usuario update55mtemp = sampleUsuarioServiceProxyid.update(com1soap1services1Usuario_10id);
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
<TD COLSPAN="2" ALIGN="LEFT">dni:</TD>
<TD>
<%
if(update55mtemp != null){
%>
<%=update55mtemp.getDni()
%><%}%>
</TD>
<TR>
<TD WIDTH="5%"></TD>
<TD COLSPAN="2" ALIGN="LEFT">contraseña:</TD>
<TD>
<%
if(update55mtemp != null){
java.lang.String typecontraseña60 = update55mtemp.getContraseña();
        String tempResultcontraseña60 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(typecontraseña60));
        %>
        <%= tempResultcontraseña60 %>
        <%
}%>
</TD>
<TR>
<TD WIDTH="5%"></TD>
<TD COLSPAN="2" ALIGN="LEFT">razonSocial:</TD>
<TD>
<%
if(update55mtemp != null){
java.lang.String typerazonSocial62 = update55mtemp.getRazonSocial();
        String tempResultrazonSocial62 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(typerazonSocial62));
        %>
        <%= tempResultrazonSocial62 %>
        <%
}%>
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
<TD COLSPAN="2" ALIGN="LEFT">usuario:</TD>
<TD>
<%
if(update55mtemp != null){
java.lang.String typeusuario66 = update55mtemp.getUsuario();
        String tempResultusuario66 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(typeusuario66));
        %>
        <%= tempResultusuario66 %>
        <%
}%>
</TD>
<TR>
<TD WIDTH="5%"></TD>
<TD COLSPAN="2" ALIGN="LEFT">idUsuarioRef:</TD>
<TD>
<%
if(update55mtemp != null){
%>
<%=update55mtemp.getIdUsuarioRef()
%><%}%>
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