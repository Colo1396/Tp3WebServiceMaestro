package servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import EnvioWsdl.Envio;
import EnvioWsdl.EnvioService;
import EnvioWsdl.EnvioService_Service;

@WebServlet("/CargarEnvio")
public class CargarEnvio extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public CargarEnvio() {
		super();
		// TODO Auto-generated constructor stub
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		int dni = Integer.parseInt(request.getParameter("dni"));
		String domicilio = request.getParameter("domicilio");
		int idUsuario = Integer.parseInt(request.getParameter("idUsuarioLogueado"));

		
		EnvioService_Service envioService_service = new EnvioService_Service();
		EnvioService service = envioService_service.getEnvioServicePort();
		Envio envio = new Envio();

		envio.setCodSeguimiento((int) (100000 * Math.random()));
		envio.setDni(dni);
		envio.setDomicilio(domicilio);
		envio.setEstado("1.En Preparacion");
		envio.setIdEnvio(0);
		envio.setIdUsuario(idUsuario);

		request.setAttribute("CodigoSeguimiento", envio.getCodSeguimiento());

		String returnString = service.create(envio);
		System.out.println(returnString);

		try (PrintWriter out =response.getWriter()){
			RequestDispatcher rd = request.getRequestDispatcher("cargarEnvio.jsp");
			rd.forward(request, response);
		}

	}

}
