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

/**
 * Servlet implementation class CargarEnvio
 */
@WebServlet("/CargarEnvio")
public class CargarEnvio extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CargarEnvio() {
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
		
		int dni =Integer.parseInt(request.getParameter("dni"));
		String domicilio = request.getParameter("domicilio");

		EnvioService_Service envioService_service = new EnvioService_Service();
        EnvioService service = envioService_service.getEnvioServicePort();
        Envio envio = new Envio();
                
        envio.setCodSeguimiento(0);
        envio.setDomicilio(domicilio);
        envio.setEstado("En Preparacion");
        envio.setDni(dni);
        envio.setCodSeguimiento((int)(100000 * Math.random()));//generar funcion
        envio.setIdUsuario(1) ; //traer desde el login

        String returnString = service.create(envio);
		System.out.println(returnString);
		
		System.out.println( "EL codigod e id del correo es : "+request.getParameter("idUsuarioCorreo"));
		

		request.setAttribute("codSeguimiento", envio.getCodSeguimiento());
		RequestDispatcher rd = request.getRequestDispatcher("bienvenido.jsp");
		rd.forward(request, response);
		
	}

}
