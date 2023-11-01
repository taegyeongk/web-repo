package co.yedam.student.serviceImpl;

import java.util.List;

import co.yedam.student.service.StudentService;
import co.yedam.student.service.StudentVO;

public class StudentServiceImpl implements StudentService{  //StudentServiceImpl 엑박뜰때 add오버라이드하기
	StudentDAO dao = new StudentDAO();
	
	@Override
	public boolean addStudent(StudentVO vo) {
		// TODO Auto-generated method stub
		return dao.insert(vo) == 1;  //
	}

	@Override
	public boolean editStudent(StudentVO vo) {
		// TODO Auto-generated method stub
		return dao.update(vo) == 1;
	}

	@Override
	public boolean removeStudent(String sid) {
		// TODO Auto-generated method stub
		return dao.delete(sid) == 1;
	}

	@Override
	public List<StudentVO> listStudent() {
		// TODO Auto-generated method stub
		return dao.list();
	}

	@Override
	public StudentVO getStudent(String sid) {
		// TODO Auto-generated method stub
		return dao.select(sid);
	}
	
}
