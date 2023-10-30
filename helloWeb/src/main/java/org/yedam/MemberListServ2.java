package org.yedam;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.yedam.service.MemberVO;
import org.yedam.service.serviceImpl.MemberServiceImpl;

/**
 * Servlet implementation class MemberListServ
 */
@WebServlet("/MemberListServ2")  //주소값
public class MemberListServ2 extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public MemberListServ2() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		// response.getWriter().append("Served at: ").append(request.getContextPath());
		MemberServiceImpl svc = new MemberServiceImpl();
		List<MemberVO> list = svc.memberList();
		System.out.println("JSON 데이터입니다..");
		
		response.setContentType("text/JSON;charset=utf-8");
		PrintWriter out = response.getWriter();           //클라이언트에게 보내줄때 응답정보를 담은 객체 = response
	
		
		String str = "[";
		int cnt = 0;
		for (MemberVO vo : list) {
			str += "{";
			str += "\"mid\":\"" + vo.getMid() + "\",";
			str += "\"pass\":\"" + vo.getPass() + "\",";
			str += "\"name\":\"" + vo.getName() + "\",";
			str += "\"phone\":\"" + vo.getPhone() + "\"";
		
			str += "}";
			if(++cnt != list.size()) {
				str += ",";
			}
		}
		str += "]";
			out.print(str);
	}
	

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
