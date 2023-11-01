package co.yedam.common;

import java.text.ParseException;
import java.text.SimpleDateFormat;

import co.yedam.student.service.StudentService;
import co.yedam.student.service.StudentVO;
import co.yedam.student.serviceImpl.StudentServiceImpl;

public class MainExe {
	public static void main(String[] args) {
		//학생 아이디, 이름, 비밀번호, 학과, 생년월일
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		StudentVO vo = new StudentVO();
		vo.setStudentId("newbie");
		vo.setStudentName("신입생");
		vo.setStudentPassword("1234");
		vo.setStudentDept("영문학과");
		//vo.setStudentBrithday(null);
		try {
			vo.setStudentBirthday(sdf.parse("2001-01-01"));
		}catch(ParseException e) {
			e.printStackTrace();
		}
		
//		if(svc.addStudent(vo)) {
//			System.out.println("정상등록이 완료되었습니다.");
//		}
//		else {
//			System.out.println("에러가 발생하였습니다.");
//		}
		
		StudentService svc = new StudentServiceImpl();
		System.out.println("단건조회: " + svc.getStudent(vo.getStudentId()));

		svc.listStudent()//
			.forEach(student -> System.out.println(student));
	}
}
