package co.yedam.product.mapper;

import java.util.List;

import co.yedam.product.service.ProductVO;


public interface ProductMapper {
	public List<ProductVO> selectList();
	public ProductVO select(String prod_code);
	public List<ProductVO> selectlikelist();
}
