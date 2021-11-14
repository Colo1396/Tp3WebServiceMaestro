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
			<%
			int idUsuarioLogueado2 =  Integer.parseInt(request.getParameter("idUsuarioLogueado"));
			String dniUsuarioLogueado2 = request.getParameter("dniUsuarioLogueado");
			%>
		<h3>
			<b>Datos Usuario:</b>
			<b>Id:<%out.print(idUsuarioLogueado2);%></b>
			<b>DNI:<%out.print(dniUsuarioLogueado2);%></b>
		</h3>
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
					<td><input type="hidden" id="idUsuarioLogueado" name="idUsuarioLogueado" value="<%=idUsuarioLogueado2%>"></td>
					<td><input type="hidden" id="dniUsuarioLogueado" name="dniUsuarioLogueado" value="<%=dniUsuarioLogueado2%>"></td>
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