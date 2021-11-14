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
<title>Home</title>
</head>
<body>
	<!-- ------------------------------------------------------------------------------------------------------------------ -->
	<header>
		<h1>Home</h1>
	</header>
	<!-- ------------------------------------------------------------------------------------------------------------------ -->
	<nav>
		<%
		Usuario usuarioLogueado = (Usuario) session.getAttribute("usuarioLogueado");
		if(usuarioLogueado==null){
			usuarioLogueado=new Usuario();
			session.setAttribute("usuarioLogueado", usuarioLogueado);
		}
		
		Usuario usuario=(Usuario)request.getAttribute("objUsuarioLogueado");
		if(usuario !=null){
			//usuarioLogueado.setDni(usuario.getDni());
			usuarioLogueado=usuario;
			System.out.println("el usuario logueado ahora es "+usuarioLogueado.getRazonSocial()+" id :"+usuarioLogueado.getIdUsuario()+"Dni :"+usuarioLogueado.getDni() );
		}
		%>
		
		<h3>
		<b>Datos Usuario:</b>
		<b>Id:<%out.print(usuarioLogueado.getIdUsuario());%></b>
		<b>Razon Social:<%out.print(usuarioLogueado.getRazonSocial());%></b>
		<b>DNI:<%out.print(usuarioLogueado.getDni());%></b>
		</h3>
	</nav>
	<!-- ------------------------------------------------------------------------------------------------------------------ -->
	<div id="contenedor">

		<form action="cargarEnvio.jsp" method="post">
			<table border="0" aling="center" widh="500px">
				<tr>
					<td><input type="hidden" id="idUsuarioLogueado" name="idUsuarioLogueado" value="<%=usuarioLogueado.getIdUsuario()%>"></td>
					<td><input type="hidden" id="dniUsuarioLogueado" name="dniUsuarioLogueado" value="<%=usuarioLogueado.getDni()%>"></td>
					<td><input type="submit" value="Cargar Envio"></td>
				</tr>
			</table>
		</form>

		<form action="despacho.jsp" method="post">
			<table border="0" aling="center" widh="500px">
				<tr>
					<td><input type="hidden" id="idUsuarioLogueado" name="idUsuarioLogueado" value="<%=usuarioLogueado.getIdUsuario()%>"></td>
					<td><input type="hidden" id="dniUsuarioLogueado" name="dniUsuarioLogueado" value="<%=usuarioLogueado.getDni()%>"></td>
					<td><input type="submit" value="Despacho"></td>

				</tr>
			</table>
		</form>

		<form action="misPedidos.jsp" method="post">
			<table border="0" aling="center" widh="500px">
				<tr>
					<td><input type="hidden" id="idUsuarioLogueado" name="idUsuarioLogueado" value="<%=usuarioLogueado.getIdUsuario()%>"></td>
					<td><input type="hidden" id="dniUsuarioLogueado" name="dniUsuarioLogueado" value="<%=usuarioLogueado.getDni()%>"></td>
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