package co.yedam.board.web;

import java.io.IOException;


import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class FirstServlet
 */
//@WebServlet("/FirstServlet.do")
public class FirstServlet extends HttpServlet {
	//init -> service -> destroy
	
	
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public FirstServlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		System.out.println("service 실행.");
		doGet(req, resp);
		
	}
	//위에 서비스가 실행이 되지않으면 밑에 두겟, 두포스트가 실행되도록 톰캣에서 자동으로 구현함
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setContentType("text/html; charset=utf-8");
		String name = "홍길동";
		int age = 20;
		for (int i = 0; i < 5; i++) {
			response.getWriter().print("<p>" + i + "번째 이름은 " + name + " , 나이는 " + age + "입니다.</p>");  //html 에서는 데이터 베이스 처리를 할 수 없음
			
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
