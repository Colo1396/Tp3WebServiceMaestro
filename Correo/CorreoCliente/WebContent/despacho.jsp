<%@ page import="java.util.ArrayList"%>
<%@ page import="java.util.List"%>
<%@ page import="UsuarioWsdl.Usuario"%>
<%@ page import="UsuarioWsdl.UsuarioService"%>
<%@ page import="UsuarioWsdl.UsuarioService_Service"%>

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

			
		
		<form action="despachoXDni.jsp" method="post">
			<table border="0" aling="center" widh="500px">
				<tr>
					<td><input type="hidden" id="idUsuarioLogueado" name="idUsuarioLogueado" value="<%=idUsuarioLogueado2%>"></td>
					<td><input type="hidden" id="dniUsuarioLogueado" name="dniUsuarioLogueado" value="<%=dniUsuarioLogueado2%>"></td>
					<td><input type="submit" value="Despacho odenado por Dni"></td>
				</tr>
			</table>
		</form>
		<form action="despachoXEstado.jsp" method="post">
			<table border="0" aling="center" widh="500px">
				<tr>
					<td><input type="hidden" id="idUsuarioLogueado" name="idUsuarioLogueado" value="<%=idUsuarioLogueado2%>"></td>
					<td><input type="hidden" id="dniUsuarioLogueado" name="dniUsuarioLogueado" value="<%=dniUsuarioLogueado2%>"></td>
					<td><input type="submit" value="Despacho odenado por Estado"></td>
				</tr>
			</table>
		</form>
		<form action="despachoXCodSeguimiento.jsp" method="post">
			<table border="0" aling="center" widh="500px">
				<tr>
					<td><input type="hidden" id="idUsuarioLogueado" name="idUsuarioLogueado" value="<%=idUsuarioLogueado2%>"></td>
					<td><input type="hidden" id="dniUsuarioLogueado" name="dniUsuarioLogueado" value="<%=dniUsuarioLogueado2%>"></td>
					<td><input type="submit"
						value="Despacho odenado por Codigo de Seguimiento"></td>
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