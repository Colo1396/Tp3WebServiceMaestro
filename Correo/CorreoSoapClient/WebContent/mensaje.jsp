<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>

</head>
<body>
	Login exitoso

	<div id="datos"></div>
	
<script type="text/javascript" src="prueba.js"></script>
	
	<h1>el codigo de seguimiento de envio es :</h1>
	<%
	out.print(request.getAttribute("codigo"));
	%>
</body>
</html>