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


<title>Despacho x Seguimiento</title>
</head>
<body>
	<!-- ------------------------------------------------------------------------------------------------------------------ -->
	<header>
		<h1>Despacho Ordenado por Codigo de Seguimiento</h1>
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

			listaEnvios = service.traerAllMisDespachos(1, "codSeguimiento");

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

		<form action="EditarEstado" method="POST">

			<tr>
				<td>Id del Envio</td>
				<td><input type="text" id="idEnvio" name="idEnvio"></td>
				<td><input type="hidden" id="urlDespacho" name="urlDespacho"
					value="despachoXCodSeguimiento"></td>
			</tr>
			<tr>
				<td>Estado</td>
				<select name="estado">
					<option value="1.En Preparacion">1.En Preparacion</option>
					<option value="2.Despachado">2.Despachado</option>
					<option value="3.En Camino">3.En Camino</option>
					<option value="4.Entregado">4.Entregado</option>
				</select>
			</tr>
			<tr>
				<td><input type="submit" value="Editar"></td>
			</tr>
		</form>

	</div>
	<!-- ------------------------------------------------------------------------------------------------------------------ -->
	<footer>
		<h3>Tp nro 3 Distribuidos Modulo de Correo</h3>
	</footer>
	<!-- ------------------------------------------------------------------------------------------------------------------ -->
</body>
</html>