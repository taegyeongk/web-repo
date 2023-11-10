package item.web;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import item.common.Command;
import item.service.ItemService;
import item.service.ItemVO;
import item.serviceImpl.ItemServiceImpl;

public class ProductInfoControl implements Command {
	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		// TODO Auto-generated method stub
		String pno = req.getParameter("pno");
		ItemService svc = new ItemServiceImpl();
		ItemVO vo = svc.getBoard(pno);
		req.setAttribute("pno", vo);
		
		try {
			req.getRequestDispatcher("WEB-INF/product/productList.jsp").forward(req, resp);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
