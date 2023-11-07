package co.yedam.common;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.yedam.reply.mapper.ReplyMapper;
import co.yedam.reply.service.ReplyVO;


public class MainExe {
	public static void main(String[] args) {
		
		SqlSession session = DataSourceMybatis.getInstance().openSession(true);
		ReplyMapper mapper = session.getMapper(ReplyMapper.class);
		
		List<ReplyVO> list = mapper.replyList(1); //1번 글에대한 목록을 가져옴
		list.forEach(vo -> System.out.println(vo));
		
		
		
	}
//		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
//		BoardVO vo = new BoardVO();
//		BoardDAO dao = new BoardDAO();
//		BoardService svc = new BoardServiceImpl();
//		
//		vo.setTitle("test");
//		vo.setWriter("user04");
//		vo.setContent("content");
//		try {
//			vo.setLastUpdate(sdf.parse("sysdate"));
//			vo.setWriteDate(sdf.parse("sysdate"));
//		}catch(ParseException e) {
//			e.printStackTrace();
//		}
//		if(svc.editBoard(vo)) {
//			System.out.println("OK");
//		}else {
//			System.out.println("NG");
//		}
//		
//	}
//		//학생 아이디, 이름, 비밀번호, 학과, 생년월일
//		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
//		StudentVO vo = new StudentVO();
//		vo.setStudentId("newbie");
//		vo.setStudentName("신입생");
//		vo.setStudentPassword("1234");
//		vo.setStudentDept("영문학과");
//		//vo.setStudentBrithday(null);
//		try {
//			vo.setStudentBirthday(sdf.parse("2001-01-01"));
//		}catch(ParseException e) {
//			e.printStackTrace();
//		}
//		
////		if(svc.addStudent(vo)) {
////			System.out.println("정상등록이 완료되었습니다.");
////		}
////		else {
////			System.out.println("에러가 발생하였습니다.");
////		}
//		
//		StudentService svc = new StudentServiceImpl();
//		System.out.println("단건조회: " + svc.getStudent(vo.getStudentId()));
//
//		svc.listStudent()//
//			.forEach(student -> System.out.println(student));
//	}
}
