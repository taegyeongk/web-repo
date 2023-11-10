package item.service;

import java.util.List;

public interface ItemService {

	public List<ItemVO> itemList();
	public ItemVO getBoard(String prod_code);
//	public boolean addBoard(ItemVO vo);
//	public boolean editBoard(ItemVO vo);
//	public boolean removeBoard(string prod_code);
	
}
