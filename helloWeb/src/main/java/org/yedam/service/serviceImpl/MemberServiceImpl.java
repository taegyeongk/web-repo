package org.yedam.service.serviceImpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.yedam.common.DataSource;
import org.yedam.service.MemberService;
import org.yedam.service.MemberVO;

public class MemberServiceImpl implements MemberService{
	DataSource dataSource = DataSource.getInstance();			
	Connection conn ;
	PreparedStatement psmt;
	ResultSet rs;
	
	
	public List<MemberVO> memberList(){
		List<MemberVO> members = new ArrayList<>();
		String sql = "SELECT * FROM MEMBER";
		
		conn = dataSource.getConnection();
		try {
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();
			while (rs.next()) {
				MemberVO vo = new MemberVO();
				vo.setMid(rs.getString("mid"));
				vo.setPass(rs.getString("pass"));	
				vo.setName(rs.getString("name"));
				vo.setPhone(rs.getString("phone"));
				members.add(vo);
			}
		}catch(SQLException e){
			e.printStackTrace();
		}finally {
			try {
				if (rs != null)
					rs.close();
				if( psmt != null)
					psmt.close();
				if(conn != null)
					conn.close();
			}catch(SQLException e) {
				e.printStackTrace();
			}
		}
		
		return members;

	}


	@Override
	public boolean addMember(MemberVO vo) {
		String sql = "insert into member values(?, ?, ?, ?)";  //쿼리문작성
		conn = dataSource.getConnection();  //커넥션
		try {
			psmt = conn.prepareStatement(sql);  //psmt 라는 객체가 sql 쿼리문으로 처리된 데이터를 받아옴
			psmt.setString(1, vo.getMid()); 
			psmt.setString(2, vo.getPass());
			psmt.setString(3, vo.getName());
			psmt.setString(4, vo.getPhone());
		
			int r = psmt.executeUpdate();  //반환값은 데이터 처리 건수
			if(r==1) {
				return true;
			}
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			try {
				if (rs != null)
					rs.close();
				if( psmt != null)
					psmt.close();
				if(conn != null)
					conn.close();
			}catch(SQLException e) {
				e.printStackTrace();
			}
		}
		return false;
	}
	
	@Override
	public boolean modifyMember(MemberVO vo) {
		String sql = "update member set pass=?, name=?, phone=? where mid=?"; 
		conn = dataSource.getConnection();
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, vo.getPass());
			psmt.setString(2, vo.getName());
			psmt.setString(3, vo.getPhone());
			psmt.setString(4, vo.getMid()); 
			
			int r = psmt.executeUpdate();
			if(r ==1) {
				return true;
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			try {
				if (rs != null)
					rs.close();
				if( psmt != null)
					psmt.close();
				if(conn != null)
					conn.close();
			}catch(SQLException e) {
				e.printStackTrace();
			}
		}
		return false;
	}
}
