<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<link href="css/estilos.css" rel="stylesheet" type="text/css" />
<title>Home</title>
</head>
<body>
	<!-- ------------------------------------------------------------------------------------------------------------------ -->
	<header>
		<h1>Home</h1>
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
		<h3>
			<%
			out.print(request.getAttribute("razonSocial"));
			%>
			, ID:<%
			out.print(request.getAttribute("idUsuario"));
			%>
		</h3>
		<form action="cargarEnvio.jsp" method="post">
			<table border="0" aling="center" widh="500px">
				<tr>
					<td><input type="submit" value="Cargar Envio"></td>
				</tr>
			</table>
		</form>

		<form action="despacho.jsp" method="post">
			<table border="0" aling="center" widh="500px">
				<tr>
					<td><input type="submit" value="Despacho"></td>
				</tr>
			</table>
		</form>

		<form action="misPedidos.jsp" method="post">
			<table border="0" aling="center" widh="500px">
				<tr>
					<td><input type="submit" value="Mis Pedidos"></td>
				</tr>
			</table>
		</form>



	</div>
	<!-- ------------------------------------------------------------------------------------------------------------------ -->
	<footer>
		<h3>Tp nro 3 Distribuidos Modulo de Correo</h3>
	</footer>
	<!-- ------------------------------------------------------------------------------------------------------------------ -->
</body>
</html>