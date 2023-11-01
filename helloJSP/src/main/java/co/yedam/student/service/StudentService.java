package co.yedam.student.service;

import java.util.List;

public interface StudentService {
	//등록, 수정, 삭제, 목록, 단건조회
	public boolean addStudent(StudentVO vo);
	public boolean editStudent(StudentVO vo);
	public boolean removeStudent(String sid);
	public List<StudentVO> listStudent();  //전체 목록 가져오기
	public StudentVO getStudent(String sid); //단건 조회
	
}
