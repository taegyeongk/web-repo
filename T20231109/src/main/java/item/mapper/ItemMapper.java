package item.mapper;

import java.util.List;

import item.service.ItemVO;


public interface ItemMapper {
	public List<ItemVO> selectList();
	public ItemVO select(String prod_code);
}
