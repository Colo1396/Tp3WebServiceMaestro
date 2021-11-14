package servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Bienvenido
 */
@WebServlet("/Bienvenido")
public class Bienvenido extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Bienvenido() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String cargarEnvio = (String) request.getParameter("cargarEnvio");
		String despacho = (String) request.getParameter("despacho");
		String misPedidos = (String) request.getParameter("misPedidos");
		
		System.out.println(cargarEnvio.trim());
		System.out.println(despacho.trim());
		System.out.println(misPedidos.trim());


		if (cargarEnvio.trim().equals("cargarEnvio")) {
			System.out.println("entre al if de cargar envio xq no redireccionas?");
			response.sendRedirect("cargarEnvio.jsp");
		}
		if ("despacho"=="despacho") {
			System.out.println("entre al if de despacho xq no redireccionas?");
			response.sendRedirect("despacho.jsp");
		}
		if("misPedidos"=="misPedidos") {
			System.out.println("entre al if de misPedidos xq no redireccionas?");
			response.sendRedirect("misPedidos.jsp");
		}

		
	}

}
