package servlet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import EnvioWsdl.Envio;
import EnvioWsdl.EnvioService;
import EnvioWsdl.EnvioService_Service;
import UsuarioWsdl.Usuario;
import UsuarioWsdl.UsuarioService;
import UsuarioWsdl.UsuarioService_Service;

/**
 * Servlet implementation class Login
 */
@WebServlet("/Login")
public class Login extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public Login() {
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
	 * 
	 *      protected void doPost(HttpServletRequest request, HttpServletResponse
	 *      response) throws ServletException, IOException { // TODO Auto-generated
	 *      method stub doGet(request, response); }
	 */

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		String user = request.getParameter("user");
		String password = request.getParameter("password");

		UsuarioService_Service usaurioService_Service = new UsuarioService_Service();
		UsuarioService usuarioService = usaurioService_Service.getUsuarioServicePort();
		Usuario usuarioValido = usuarioService.validarLogin(user, password);

		if (usuarioValido != null) {
			request.setAttribute("idUsuario", usuarioValido.getIdUsuario());
			request.setAttribute("dni", usuarioValido.getDni());
			request.setAttribute("razonSocial", usuarioValido.getRazonSocial());
			request.setAttribute("vendedor", usuarioValido.getIdUsuarioRef());
			RequestDispatcher rd = request.getRequestDispatcher("bienvenido.jsp");
			rd.forward(request, response);
			//response.sendRedirect("bienvenido.jsp");
		} else {
			response.sendRedirect("error.jsp");
		}

		/*
		 * if(user.equals("java")&& password.equals("1234")) {
		 * //response.sendRedirect("mensaje.jsp"); EnvioService_Service
		 * envioService_service = new EnvioService_Service(); EnvioService service =
		 * envioService_service.getEnvioServicePort(); Envio envio =
		 * service.findById(1); int codigo = envio.getCodSeguimiento();
		 * System.out.println(codigo);
		 * 
		 * request.setAttribute("codigo", codigo); RequestDispatcher rd=
		 * request.getRequestDispatcher("mensaje.jsp"); rd.forward(request, response); }
		 * else { response.sendRedirect("error.jsp"); }
		 */
	}
}
