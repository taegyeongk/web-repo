package co.yedam.product.service;

import lombok.Data;

@Data
public class ProductVO {
	private String prod_code;
	private String prod_name;
	private String prod_desc;
	private int price;
	private int off_price;
	private int like_it;
	private String prod_image;

}
