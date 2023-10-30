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
import org.yedam.service.MemberVO;
import org.yedam.service.serviceImpl.BookServiceImpl;
import org.yedam.service.serviceImpl.MemberServiceImpl;

/**
 * Servlet implementation class BookListServlet
 */
@WebServlet("/BookListServlet")
public class BookListServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public BookListServlet() {
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

		String str = "<dataset>";

		for (BookVO vo : list) {
			str += "<record>";
			str += "<book_code>" + vo.getBook_code() + "</book_code>";
			str += "<book_title>" + vo.getBook_title() + "</book_title>";
			str += "<book_author>" + vo.getBook_author() + "</book_author>";
			str += "<book_press>" + vo.getBook_press() + "</book_press>";
			str += "<book_price>" + vo.getBook_price() + "</book_press>";
			str += "</record>";
		}
		str += "</dataset>";

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
