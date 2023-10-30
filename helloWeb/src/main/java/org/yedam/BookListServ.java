package org.yedam;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.yedam.service.BookVO;
import org.yedam.service.serviceImpl.BookServiceImpl;

/**
 * Servlet implementation class BookListServlet
 */
@WebServlet("/BookListServlet")
public class BookListServ extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public BookListServ() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		BookServiceImpl svc = new BookServiceImpl();
		List<BookVO> list = svc.bookList();
		System.out.println(list);

		response.setContentType("text/json;charset=utf-8");

		PrintWriter out = response.getWriter();


		String str = "";
				
				str += "[";
				int cnt = 0;
				for (BookVO vo : list) {
					str += "{";
					str += "\"bookcode\":\"" + vo.getBook_code() + "\",";
					str += "\"booktitle\":\"" + vo.getBook_title()+ "\",";
					str += "\"bookauthor\":\"" + vo.getBook_author() + "\",";
					str += "\"bookpress\":\"" + vo.getBook_press() + "\",";
					str += "\"bookprice\":\"" + vo.getBook_price() + "\"";
					str += "}";
					if (++cnt != list.size()) {
						str += ",";
					}
				}
				str += "]";
				
				out.print(str);
			}
	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
