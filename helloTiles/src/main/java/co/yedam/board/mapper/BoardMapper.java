package co.yedam.board.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import co.yedam.admin.service.MemberVO;
import co.yedam.board.service.BoardVO;

public interface BoardMapper {
	public List<BoardVO> selectList();
	public BoardVO select(int boardNo);
	public int updateCnt(int boardNo);
	public int insert(BoardVO vo);
	public int update(BoardVO vo);
	public int delete(int boardNo);
	
//	//로그인 관련
//	public MemberVO getUser(@Param("id") String id, @Param("pw") String pw);  //@Param : 문자열을 파라메터로 해주겠다.
//	public List<MemberVO> memberList();
}
