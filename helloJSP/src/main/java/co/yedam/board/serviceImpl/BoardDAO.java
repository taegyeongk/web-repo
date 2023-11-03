package co.yedam.board.serviceImpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import co.yedam.board.service.BoardVO;
import co.yedam.common.DataSource;
import co.yedam.student.service.StudentVO;

public class BoardDAO {
	// 목록, 단건조회, 등록, 수정, 삭제:
	Connection conn;
	PreparedStatement psmt;
	ResultSet rs;
	String sql;
	DataSource ds = DataSource.getInstance();

	public void close() {
		try {
			if (rs != null) {
				rs.close();
			}
			if (psmt != null) {
				psmt.close();
			}
			if (conn != null) {
				conn.close();
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	public List<BoardVO> selectList() {
		sql = "select * from board order by board_no";
		conn = ds.getConnection();
		List<BoardVO> list = new ArrayList<>();
		try {
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();
			while (rs.next()) {
				BoardVO vo = new BoardVO();
				vo.setBoardNo(rs.getInt("board_no"));
				vo.setContent(rs.getString("content"));
				vo.setImage(rs.getString("image"));
				vo.setLastUpdate(rs.getDate("last_update"));
				vo.setTitle(rs.getString("title"));
				vo.setViewCnt(rs.getInt("view_cnt"));
				vo.setWriteDate(rs.getDate("write_date"));
				vo.setWriter(rs.getString("writer"));
				list.add(vo);

			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return list;
	}

	public BoardVO select(int boardNo) {
		BoardVO vo = null;
		String sql = "select * from board where board_no=?";
		conn = ds.getConnection();
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setInt(1, boardNo);
			ResultSet rs = psmt.executeQuery(); // 실행하겠음
			
			if (rs.next()) {
				vo = new BoardVO();
				vo.setBoardNo(rs.getInt("board_no"));
				vo.setTitle(rs.getString("title"));
				vo.setContent(rs.getString("content"));
				vo.setWriter(rs.getString("writer"));
				vo.setWriteDate(rs.getDate("write_date"));
				vo.setViewCnt(rs.getInt("view_cnt"));
				vo.setImage(rs.getString("image"));
				vo.setLastUpdate(rs.getDate("last_update"));
			}
			rs.close();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return vo;
	}

	public int insert(BoardVO vo) {
		String sql = "insert into board(board_no,title,content, writer) values(seq_board.nextval,?,?,?)";
		conn = ds.getConnection();
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, vo.getTitle());
			psmt.setString(2, vo.getContent());
			psmt.setString(3, vo.getWriter());
			int r = psmt.executeUpdate();
			return r;

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return 0;

	}

	public int update(BoardVO vo) {
		String sql = "update board set title=?,content=?, image=nvl(?,image), "
				+ "last_update=sysdate where board_no=?";
		conn = ds.getConnection();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		try {
			int rowNo = 1;
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, vo.getTitle());
			psmt.setString(2, vo.getContent());
			psmt.setString(3, vo.getImage());
			psmt.setString(4, sdf.format(vo.getLastUpdate()));
			psmt.setInt(5, vo.getBoardNo());
			int r = psmt.executeUpdate();
			return r;
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return 0;
	}

	public int delete(int boardNo) {
		String sql = "delete from board where board_no=?";
		conn = ds.getConnection();
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setInt(1, boardNo);
			int r = psmt.executeUpdate();
			return r;
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return 0;
	}
	
	
	//조회수 증가
	public int updateCnt(int boardNo) {
		sql = "UPDATE BOARD SET VIEW_CNT = VIEW_CNT + 1 WHERE BOARD_NO = ?";
		conn = ds.getConnection();
		try {
			
			psmt = conn.prepareStatement(sql);
			psmt.setInt(1, boardNo);
			int r = psmt.executeUpdate();
			return r;
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return 0;

	}
}
