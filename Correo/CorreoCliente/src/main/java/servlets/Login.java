package servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import UsuarioWsdl.Usuario;
import UsuarioWsdl.UsuarioService;
import UsuarioWsdl.UsuarioService_Service;

@WebServlet("/Login")
public class Login extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public Login() {
        super();

    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String user = request.getParameter("user");
		String password = request.getParameter("password");

		UsuarioService_Service usaurioService_Service = new UsuarioService_Service();
		UsuarioService usuarioService = usaurioService_Service.getUsuarioServicePort();
		Usuario usuarioValido = usuarioService.validarLogin(user, password);

		if (usuarioValido != null) {
			request.setAttribute("idUsuario", usuarioValido.getIdUsuario());
			request.setAttribute("dni", usuarioValido.getDni());
			request.setAttribute("razonSocial", usuarioValido.getRazonSocial());
			request.setAttribute("idUsuarioRefVentas", usuarioValido.getIdUsuarioRef());

			try (PrintWriter out =response.getWriter()){
				RequestDispatcher rd = request.getRequestDispatcher("home.jsp");
				rd.forward(request, response);
			}
			
		} else {
			response.sendRedirect("error.jsp");
		}
	}

}
