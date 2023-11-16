package co.yedam.product.serviceImpl;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.yedam.product.common.DataSourceMybatis;
import co.yedam.product.mapper.ProductMapper;
import co.yedam.product.service.ProductService;
import co.yedam.product.service.ProductVO;
import lombok.Data;

@Data
public class ProductServiceImpl implements ProductService {
	
	SqlSession sqlSession = DataSourceMybatis.getInstance().openSession(true);
	ProductMapper mapper = sqlSession.getMapper(ProductMapper.class);
	
@Override
	public List<ProductVO> selectList() {
		// TODO Auto-generated method stub
		return mapper.selectList();
	}

@Override
	public ProductVO getProduct(String prod_code) {
		// TODO Auto-generated method stub
		return mapper.select(prod_code);
	}

@Override
public List<ProductVO> selectlikelist() {
	// TODO Auto-generated method stub
	return mapper.selectlikelist();
}
}
