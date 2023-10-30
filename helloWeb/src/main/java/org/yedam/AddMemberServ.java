package org.yedam;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.yedam.service.MemberService;
import org.yedam.service.MemberVO;
import org.yedam.service.serviceImpl.MemberServiceImpl;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

/**
 * Servlet implementation class AddMemberServ
 */
@WebServlet("/AddMemberServ.html") // 페이지를 보고싶을때는 뒤에 .html 삽입도 가능
public class AddMemberServ extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public AddMemberServ() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// ?mid=M009&pass=9999&name=Kim&phone=010-9999-9999
		// (mid, pass, name, phone) {mid ....}
		String mid = request.getParameter("mid");
		String pass = request.getParameter("pass");
		String name = request.getParameter("name");
		String phone = request.getParameter("phone");

		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/json; charset=UTF-8");

		// 멤버 인스턴스 선언.
		MemberVO vo = new MemberVO(mid, pass, name, phone);

		MemberService svc = new MemberServiceImpl();
		PrintWriter out = response.getWriter();

		Gson gson = new GsonBuilder().create();
		// 자바 객체를 넣어도 됨
		// String json = gson.toJson(vo);

		// Map
		Map<String, Object> map = new HashMap<>();

		if (svc.addMember(vo)) {
			// {"retCode": "OK"} //{"retCode": "OK"}--> json 문자열
			// out.print("{\"retCoed\": \"OK\"}");
			map.put("retCode", "OK");
			map.put("vo", vo);
			// out.print(json);
		} else {
			// {"retCode": "NG"}
			// out.print("{\"retCoed\": \"NG\"}");
			map.put("retCode", "NG");
			map.put("vo", vo.getMid());
			// out.print(json);
		}
		String json = gson.toJson(map);
		out.print(json);

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
