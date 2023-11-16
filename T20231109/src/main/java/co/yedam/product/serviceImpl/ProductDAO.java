package co.yedam.product.serviceImpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import co.yedam.product.common.DataSource;
import co.yedam.product.service.ProductVO;

public class ProductDAO {
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
	
	public List<ProductVO> selectList(){
		sql = "select * from tbl_product";
		conn = ds.getConnection();
		List<ProductVO> list = new ArrayList<>();
		try {
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();
			while(rs.next()) {
				ProductVO vo = new ProductVO();
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
