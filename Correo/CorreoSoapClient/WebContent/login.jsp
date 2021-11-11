<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
	crossorigin="anonymous">
<meta charset="ISO-8859-1">
<title>Login Correo</title>
</head>
<body>
	<form action="Login" method="post">
		<br>
		<tr>
			<td>User</td>
			<td><input type="text" name="user"></td>
		</tr>
		</br> <br>
		<tr>
			<td>Password</td>
			<td><input type="password" name="password"></td>
		</tr>
		</br> <br>
		<tr>
			<td></td>
			<td><input type="submit" value="login"></td>
		</tr>
		</br>
	</form>
</body>
</html>