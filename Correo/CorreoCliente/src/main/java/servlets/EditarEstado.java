package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import EnvioWsdl.Envio;
import EnvioWsdl.EnvioService;
import EnvioWsdl.EnvioService_Service;

/**
 * Servlet implementation class EditarEstado
 */
@WebServlet("/EditarEstado")
public class EditarEstado extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public EditarEstado() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		int idEnvio =Integer.parseInt(request.getParameter("idEnvio"));
		String estado = request.getParameter("estado");
		String urlDespacho = request.getParameter("urlDespacho");
		
		System.out.println("la ruta a redirigir es "+urlDespacho);

		EnvioService_Service envioService_service = new EnvioService_Service();
		EnvioService service = envioService_service.getEnvioServicePort();
		Envio envio = new Envio();

		envio = service.updateEstadoEnvioXId(idEnvio, estado);

		try (PrintWriter out = response.getWriter()) {
			RequestDispatcher rd = request.getRequestDispatcher(urlDespacho+".jsp");
			rd.forward(request, response);
		}

	}

}
