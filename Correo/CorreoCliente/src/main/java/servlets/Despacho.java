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
 * Servlet implementation class Despacho
 */
@WebServlet("/Despacho")
public class Despacho extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Despacho() {
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
		String orden = request.getParameter("orden");
		//int idUsuario = Integer.parseInt(request.getParameter("orden"));
		//FALTA TRAER EL ID DE USUARIO LOGUEADO
		
		EnvioService_Service envioService_service = new EnvioService_Service();
		EnvioService service = envioService_service.getEnvioServicePort();
		List<Envio> listaEnvios = new ArrayList<Envio>();
		
		listaEnvios = service.traerAllMisDespachos(1,orden);

		request.setAttribute("listaEnvioDespachado",listaEnvios);
		
		
		
		for(Envio e:listaEnvios) {
			System.out.println(e.getCodSeguimiento());
		}
		
		///System.out.println(listaEnvios.);
		
		/*if(!lista.isEmpty()) {
			for(int i=0;i ==lista.size();i++) {
				System.out.println("imprimo la lista de envios");
			}
		}*/

		try (PrintWriter out =response.getWriter()){
			RequestDispatcher rd = request.getRequestDispatcher("despacho.jsp");
			rd.forward(request, response);
		}
	}

}
