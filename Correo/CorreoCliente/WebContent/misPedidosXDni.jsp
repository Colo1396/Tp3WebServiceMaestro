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


<title>Mis Pedidos x Dni</title>
</head>
<body>
	<!-- ------------------------------------------------------------------------------------------------------------------ -->
	<header>
		<h1>Mis Pedidos Ordenado por Dni</h1>
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
		<table id="target">
			<tr>
				<td>ID</td>
				<td>CodSeguimiento</td>
				<td>Domicilio</td>
				<td>Dni</td>
				<td>Estado</td>
			</tr>
			<%
			EnvioService_Service envioService_service = new EnvioService_Service();
			EnvioService service = envioService_service.getEnvioServicePort();
			List<Envio> listaEnvios = new ArrayList<Envio>();

			listaEnvios = service.traerAllMisPedidos(39123456,"dni");

			for (Envio e : listaEnvios) {
				System.out.println(e.getCodSeguimiento());
			%>
			<tr>
				<td><%=e.getIdEnvio()%></td>
				<td><%=e.getCodSeguimiento()%></td>
				<td><%=e.getDomicilio()%></td>
				<td><%=e.getDni()%></td>
				<td><%=e.getEstado()%></td>
			</tr>
			<%
			}
			%>
		</table>
	</div>
	<!-- ------------------------------------------------------------------------------------------------------------------ -->
	<footer>
		<h3>Tp nro 3 Distribuidos Modulo de Correo</h3>
	</footer>
	<!-- ------------------------------------------------------------------------------------------------------------------ -->

</body>
</html>