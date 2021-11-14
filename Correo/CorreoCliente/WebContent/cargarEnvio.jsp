<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<link href="css/estilos.css" rel="stylesheet" type="text/css" />
<title>Cargar Envio</title>
</head>
<body>
	<!-- ------------------------------------------------------------------------------------------------------------------ -->
	<header>
		<h1>Cargar Envio</h1>
	</header>
	<!-- ------------------------------------------------------------------------------------------------------------------ -->
	<nav>
		<ul>
			<li><a href="home.jsp">Home |</a></li>
			<li><a href="cargarEnvio.jsp">Cargar Envio |</a></li>
			<li><a href="despacho.jsp">Despacho |</a></li>
			<li><a href="misPedidos.jsp">Mis Pedidos |</a></li>
		</ul>
	</nav>
	<!-- ------------------------------------------------------------------------------------------------------------------ -->
	<div id="contenedor">
		<div id="cargarEnvio">
			<center>
				<h1>Es hora de Cargar un Envio</h1>
			</center>
			<form action="CargarEnvio" method="post">
				<br>
				<tr>
					<td>Dni Comprador:</td>
					<td><input type="number" name="dni"></td>
				</tr>
				</br> <br>
				<tr>
					<td>Domicilio:</td>
					<td><input type="text" name="domicilio"></td>
				</tr>
				</br> <br>
				<tr>
					<td></td>
					<td><input type="submit" id="btnCargarEnvio" name="btnCargarEnvio" value="Cargar Envio"></td>
				</tr>
				</br>
			</form>
			El codigo de Seguimiento del Envio Cargado es:
		<%
		if (request.getAttribute("CodigoSeguimiento") != null) {
			out.print(request.getAttribute("CodigoSeguimiento"));
		} else {
			out.print("--");
		}
		%>
		</div>
	</div>
	<!-- ------------------------------------------------------------------------------------------------------------------ -->
	<footer>
		<h3>Tp nro 3 Distribuidos Modulo de Correo</h3>
	</footer>
	<!-- ------------------------------------------------------------------------------------------------------------------ -->
</body>
</html>