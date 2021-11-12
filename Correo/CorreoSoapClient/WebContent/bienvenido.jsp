<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Welcome</title>
</head>
<body>
	<h1>Bienvenido al Correo</h1>
	<h2>Hola <%out.print(request.getAttribute("razonSocial"));%></h2>
	<h2>Codigo de Id del Correo: <%out.print(request.getAttribute("idUsuario"));%></h2>
	
	<input type="hidden" id="idUsuarioCorreo" name="idUsuarioCorreo" value="<%out.print(request.getAttribute("idUsuario"));%>"/>
	
	
	<form action="Bienvenido" method='post'>
	
		<input type="hidden" id="cargarEnvio" name="cargarEnvio" value=""/>
		<button type="submit" id="btnCargarEnvio"  class="btn btn-primary" onclick="javascript:document.getElementById('cargarEnvio').value = 'cargarEnvio';" >Cargar Envio</button>
		
		<!-- <input type="hidden" id="despacho" name="despacho" value=""/>
		<button type="submit" id="btnDespacho"  class="btn btn-primary" onclick="javascript:document.getElementById('despacho').value = 'despacho';" >Despacho de Pedidos</button>
		
		<input type="hidden" id="misPedidos" name="misPedidos" value=""/>
		<button type="submit" id="btnMisPedidos"  class="btn btn-primary" onclick="javascript:document.getElementById('misPedidos').value = 'misPedidos';" >Mis Pedidos</button>
		 -->
	</form>
	
	<h1>el codigo de seguimiento de envio es :</h1>
	<%
	out.print(request.getAttribute("codigo"));
	%>
</body>
</html>