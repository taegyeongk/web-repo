package co.yedam.student.web;

import java.io.IOException;
import java.io.PrintWriter;
import java.security.Provider.Service;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.student.service.StudentService;
import co.yedam.student.service.StudentVO;
import co.yedam.student.serviceImpl.StudentServiceImpl;

@WebServlet("/getStudent.do")
public class GetStudentServlet extends HttpServlet {
	// service: parameter(??)
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		String id = req.getParameter("sid");
//		String name = req.getParameter("name");
//		String pass = req.getParameter("password");
//		String dept = req.getParameter("dept");
//		String bir = req.getParameter("bir");
//		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

		StudentService svc = new StudentServiceImpl();
		StudentVO vo = svc.getStudent(id);

		//json반환
		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
		
		//응답정보의 한글처리과 content타입 지정
		resp.setCharacterEncoding("utf-8");
		resp.setContentType("text/json;charset=utf-8");
		resp.getWriter().print(gson.toJson(vo));
		
	}

}
