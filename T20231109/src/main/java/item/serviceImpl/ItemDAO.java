package item.serviceImpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import item.common.DataSource;
import item.service.ItemVO;

public class ItemDAO {
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
	
	public List<ItemVO> selectList(){
		sql = "select * from tbl_product";
		conn = ds.getConnection();
		List<ItemVO> list = new ArrayList<>();
		try {
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();
			while(rs.next()) {
				ItemVO vo = new ItemVO();
				vo.setProd_code(rs.getString("prod_code"));
				vo.setProd_name(rs.getString("prod_name"));
				vo.setProd_desc(rs.getString("prod_desc"));
				vo.setPrice(rs.getInt("price"));
				vo.setOff_price(rs.getInt("off_price"));
				vo.setLike_it(rs.getInt("like_it"));
				vo.setProd_image(rs.getString("prod_image"));
				list.add(vo);
			}
	}catch(SQLException e) {
		e.printStackTrace();
	}finally {
		close();
	}
		return list;
	
}
}
