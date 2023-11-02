package co.yedam.student.web;

import java.io.IOException;
import java.io.PrintWriter;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.Map;

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

@WebServlet("/addStudent.do")
public class AddStudentServlet extends HttpServlet {
	// init -> service -> destroy
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		//한글처리
		req.setCharacterEncoding("utf-8");
		
		String id = req.getParameter("id");
		String name = req.getParameter("name");
		String pass = req.getParameter("password");
		String dept = req.getParameter("dept");
		String bir = req.getParameter("bir");
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

		StudentVO vo = new StudentVO();
		
		vo.setStudentId(id);
		vo.setStudentName(name);
		vo.setStudentPassword(pass);
		vo.setStudentDept(dept);
		try {
			vo.setStudentBirthday(sdf.parse(bir));
		} catch (ParseException e) {
			e.printStackTrace();
		}

		StudentService svc = new StudentServiceImpl();
		if (svc.addStudent(vo)) {

			resp.getWriter().print("{\"retCode\":\"OK\"}");
		} else {

			resp.getWriter().print("{\"retCode\":\"NG\"}");
		}

	}

}
