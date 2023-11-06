package co.yedam.board.web;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import co.yedam.common.Command;

public class BoardFormControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		// TODO Auto-generated method stub
		HttpSession session = req.getSession();
		if (session.getAttribute("logId") == null) {
			try {
				resp.sendRedirect("loginForm.do");
			} catch (IOException e) {
				e.printStackTrace();
			}
		} else {
			try {
				req.getRequestDispatcher("WEB-INF/board/boardForm.jsp").forward(req, resp);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}

	}

}
