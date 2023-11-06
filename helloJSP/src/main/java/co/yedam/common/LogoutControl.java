package co.yedam.common;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class LogoutControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		// TODO Auto-generated method stub
		req.getSession().invalidate();
		try {
			resp.sendRedirect("main.do");
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}
