package item.web;

import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import item.common.Command;
import item.service.ItemService;
import item.service.ItemVO;
import item.serviceImpl.ItemServiceImpl;

public class ProductListControl implements Command {
	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		// TODO Auto-generated method stub
		ItemService svc = new ItemServiceImpl();
		List<ItemVO> list = svc.itemList();
		req.setAttribute("list", list);
		RequestDispatcher rd = req.getRequestDispatcher("WEB-INF/product/productInfo.jsp");
		try {
			rd.forward(req, resp);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
}
