package co.yedam.common;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.board.web.AddBoardControl;
import co.yedam.board.web.BoardFormControl;
import co.yedam.board.web.BoardListControl;
import co.yedam.board.web.GetBoardControl;
import co.yedam.board.web.ModifyBoardControl;
import co.yedam.board.web.ModifyFormControl;
import co.yedam.board.web.RemoveBoardControl;
import co.yedam.board.web.RemoveFormControl;


public class FrontController extends HttpServlet {
	Map<String, Command> map = new HashMap<>();

	@Override
	public void init(ServletConfig config) throws ServletException {
		// 메인페이지
		map.put("/main.do", new MainControl());

		// 로그인.
		map.put("/loginForm.do", new LoginFormControl());
		
		
		map.put("/login.do", new LoginControl());
		map.put("/logout.do", new LogoutControl());

		// 회원목록
		map.put("/memberList.do", new MemberListControl());

		map.put("/boardList.do", new BoardListControl());
		map.put("/getBoard.do", new GetBoardControl()); // 상세화면
		// 등록화면
		map.put("/boardForm.do", new BoardFormControl());
		map.put("/addBoard.do", new AddBoardControl());
		// 수정화면
		map.put("/modifyForm.do", new ModifyFormControl());
		map.put("/modifyBoard.do", new ModifyBoardControl());
		// 삭제화면
		map.put("/removeForm.do", new RemoveFormControl());
		map.put("/removeBoard.do", new RemoveBoardControl());

		// 댓글목록
		map.put("/replyList.do", new ReplyListControl());
		map.put("/addReply.do", new AddReplyControl());
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
