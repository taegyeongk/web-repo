package co.yedam.product.service;

import java.util.List;

public interface ProductService {

	public ProductVO getProduct(String prod_code);
//	public boolean addBoard(ItemVO vo);
//	public boolean editBoard(ItemVO vo);
//	public boolean removeBoard(string prod_code);
	public List<ProductVO> selectList();
	public List<ProductVO> selectlikelist();
	
}
