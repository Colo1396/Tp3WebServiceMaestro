<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<link href="css/estilos.css" rel="stylesheet" type="text/css" />
<title>Bienvenidos al Correo</title>
</head>
<body>
	<header>
		<h1>Bienvenido al Login del Correo</h1>
	</header>
	<nav>
		<ul>
			<li><a href="index.jsp">Home |</a></li>
			<li><a href="cargarEnvio.jsp">Cargar Envio |</a></li>
			<li><a href="despacho.jsp">Despacho |</a></li>
			<li><a href="misPedidos.jsp">Mis Pedidos |</a></li>
		</ul>
	</nav>

	<div id="contenedor">
		<div id="login" class="login">
			<!--<img alt="No encontrado" src="imagenes/fondoCorreo.jpg" class="foto">-->
			<center>
				<h1>Ingrese sus datos:</h1>
			</center>
			<form action="Login.jsp" method="post">
				<table border="0" aling="center" widh="500px" class="tablaLogin">

					<tr>
						<td>User</td>
						<td><input type="text" id="user" name="user" value="" class="controles"></td>
					</tr>
					<tr>
						<td>Password</td>
						<td><input type="password" id="password" name="password" value=""></td>
					</tr>

					<th>
						<td></td>
						<td><input type="submit" value="login"></td>
					</th>

				</table>
			</form>
		</div>


	</div>



	<footer>
		<h3>Tp nro 3 Distribuidos Modulo de Correo</h3>
	</footer>

</body>
</html>