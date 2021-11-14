<%@ page import="java.util.ArrayList"%>
<%@ page import="java.util.List"%>
<%@ page import="EnvioWsdl.Envio"%>
<%@ page import="EnvioWsdl.EnvioService"%>
<%@ page import="EnvioWsdl.EnvioService_Service"%>


<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<link href="css/estilos.css" rel="stylesheet" type="text/css" />


<title>Despacho</title>
</head>
<body>
	<!-- ------------------------------------------------------------------------------------------------------------------ -->
	<header>
		<h1>Despacho</h1>
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
		<form action="despacho.jsp" method="post">
			<br>
			<tr>
				<td>Buscar pedidos ordenado por: <select name="orden">
						<option value="dni">DNI</option>
						<option value="estado">Estado</option>
						<option value="codSeguimiento">Codigo de Seguimiento</option>
				</select>

				</td>
				<td><input type="submit" id="buscarEnvioDespachado"
					name="buscarEnvioDespachado" value="Buscar"></td>
			</tr>
			</br>

		</form>

		<table id="target">
			<tr>
				<td>ID</td>
				<td>CodSeguimiento</td>
				<td>Domicilio</td>
				<td>Dni</td>
				<td>Estado</td>
			</tr>
			<script type="text/javascript" src="listaEnvios.js"></script>
		</table>

	</div>
	<!-- ------------------------------------------------------------------------------------------------------------------ -->
	<footer>
		<h3>Tp nro 3 Distribuidos Modulo de Correo</h3>
	</footer>
	<!-- ------------------------------------------------------------------------------------------------------------------ -->

</body>
</html>