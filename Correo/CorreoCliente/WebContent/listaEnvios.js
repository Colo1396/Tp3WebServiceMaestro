let table = document.getElementById("target");
let arr = ['ciclismo', 'natación', 'gastronomía', 'tenis', 'baloncesto', 'fútbol', 'cine', 'tecnología', 'turismo', 'política'];
arr.forEach((el, index) => {
	//table.innerHTML += "<tr><td>" + el + "</td></tr>";
	table.innerHTML += 
		"<tr>" +
			"<td>" + el + "</td>"+
			"<td>" + "123213" + "</td>"+
			"<td>" + "dasdas" + "</td>"+
			"<td>" + "proceso" + "</td>"+
			"<td>" + "123541" + "</td>"+
		"</tr>";
});


