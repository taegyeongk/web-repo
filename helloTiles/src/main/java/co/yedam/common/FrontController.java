package co.yedam.common;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.admin.web.MemberListControl;
import co.yedam.board.web.BoardListControl;
import co.yedam.board.web.GetBoardControl;
import co.yedam.reply.web.ReplyListControl;



public class FrontController extends HttpServlet {
	Map<String, Command> map = new HashMap<>();

	@Override
	public void init(ServletConfig config) throws ServletException {
	
		map.put("/boardList.do", new BoardListControl());
		map.put("/memberList.do", new MemberListControl());
		map.put("/getBoard.do", new GetBoardControl());
		map.put("/replyList.do", new ReplyListControl());
		
	}
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// 요청정보의 한글 인코딩 방식.
		req.setCharacterEncoding("utf-8");

		System.out.println("FrontController");
		String uri = req.getRequestURI(); // 어떤 페이지 요청을 반환하는지 getRequestURI로 http://localhost:8080/helloJSP/??.do 에서
											// 서버정보를 뺀 뒷부분이 uri임.
		String context = req.getServletContext().getContextPath(); // helloJSP , .getContextPath():실제경로
		String page = uri.substring(context.length());
		
		System.out.println(page);

//		String val = map.get(page);  //어떤페이지를 요청했는지 걸러내기
		// System.out.println(val);
		Command controller = map.get(page);
		controller.execute(req, resp);

	}
}
