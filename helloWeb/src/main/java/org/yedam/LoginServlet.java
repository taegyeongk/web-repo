package org.yedam;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class LoginServlet
 */
@WebServlet("/LoginServlet") //로컬호스트 주소를 실행하겠다는 메소드 get방식 요청
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LoginServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
//		response.getWriter().append("Served at: ").append(request.getContextPath());
		Map<String, Integer> map = new HashMap<>();
		map.put("홍길동", 90);
		map.put("고길동", 95);
		map.put("박길동", 80);  //map 타입은 키셋 혹은 셋 메소드로 새로운 컬렉션으로 반환
		
		Set<String> keyset = map.keySet();
		
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html; charset=UTF-8");  //jsp 한글이 깨질 경우 위에 2줄 생성
		PrintWriter out = response.getWriter(); //출력스트림역할
		 
		 out.print("톰캣을 재시작을 해야지 바뀐 내용이 적용됩니다...");
		 out.print("<br>");
		 out.print("<h3>학생 이름과 점수</h3>");
		 //out.print("<table border='1'><thead><tr>");  //table 생성법
		 //out.print("<th>학생이름</th><th>점수</th></tr></thead>");
		 String str = "<table border='1'><thead><tr>";  //문자열로 선언하여 table 생성 - 값을 누적 후 마지막에 변환
		 str += "<th>학생이름</th><th>점수</th></tr></thead>";
		 str += "<tbody>";
		 for(String item : keyset) {
			 str += "<tr><td>" + item + "</td><td>" + map.get(item) + "</td></tr>";
		 }
		 str += "</tbody></table>";
		 out.print(str);
		 
		 
		 out.print("<a href='index.html'>첫페이지</a>");
	}
	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
