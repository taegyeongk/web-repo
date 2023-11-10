package item.serviceImpl;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import item.common.DataSourceMybatis;
import item.mapper.ItemMapper;
import item.service.ItemService;
import item.service.ItemVO;
import lombok.Data;

@Data
public class ItemServiceImpl implements ItemService {
	
	SqlSession sqlSession = DataSourceMybatis.getInstance().openSession(true);
	ItemMapper mapper = sqlSession.getMapper(ItemMapper.class);
	
@Override
	public List<ItemVO> itemList() {
		// TODO Auto-generated method stub
		return mapper.selectList();
	}

@Override
	public ItemVO getBoard(String prod_code) {
		// TODO Auto-generated method stub
		return mapper.select(prod_code);
	}
}
