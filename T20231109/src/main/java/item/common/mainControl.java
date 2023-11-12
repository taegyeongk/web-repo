package item.common;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class mainControl implements Command {

		@Override
		public void execute(HttpServletRequest req, HttpServletResponse resp) {

			try {
				resp.sendRedirect("productList.do");
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}



		}

	}