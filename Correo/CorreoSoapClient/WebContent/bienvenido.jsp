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
	
	<h2>El Id del Usuario es: <%out.print(request.getAttribute("idUsuario"));%></h1>
	<h2>El DNI es: <%out.print(request.getAttribute("dni"));%></h2>
	<h2>La Razon Social es: <%out.print(request.getAttribute("razonSocial"));%></h2>
	<h2>El Id del Vendedor es: <%out.print(request.getAttribute("vendedor"));%></h2>

	
</body>
</html>