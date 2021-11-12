<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	Es hora de Cargar un ENVIO.
	<form action="CargarEnvio" method="post">
		<br>
		<tr>
			<td>Dni Comprador: </td>
			<td><input type="number" name="dni"></td>
		</tr>
		</br> <br>
		<tr>
			<td>Domicilio: </td>
			<td><input type="text" name="domicilio"></td>
		</tr>
		</br> <br>
		<tr>
			<td></td>
			<td><input type="submit" value="Cargar Envio"></td>
		</tr>
		</br>
	</form>



</body>
</html>