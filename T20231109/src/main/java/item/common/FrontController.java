package item.common;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import item.web.ProductInfoControl;
import item.web.ProductListControl;


public class FrontController extends HttpServlet {
	Map<String, Command> map = new HashMap<>();

	@Override
	public void init(ServletConfig config) throws ServletException {
		// 메인페이지
		map.put("/productList.do", new ProductListControl());
		map.put("/productInfo.do", new ProductInfoControl());

		
	}
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.setCharacterEncoding("utf-8");

		System.out.println("FrontController");
		String uri = req.getRequestURI(); 
		String context = req.getServletContext().getContextPath(); 
		String page = uri.substring(context.length());

		Command controller = map.get(page);
		controller.execute(req, resp);

	}
}
