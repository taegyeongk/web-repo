package co.yedam.reply.serviceImpl;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.yedam.board.service.ReplyService;
import co.yedam.common.DataSourceMybatis;
import co.yedam.reply.mapper.ReplyMapper;
import co.yedam.reply.service.ReplyVO;


public class ReplyServiceImpl implements ReplyService{
	
	
	SqlSession session = DataSourceMybatis.getInstance().openSession(true);
	ReplyMapper mapper = session.getMapper(ReplyMapper.class);
	
	@Override
	public List<ReplyVO> replyList(int boardNo, int page) {
		return mapper.replyList(boardNo, page);
	}

	@Override
	public ReplyVO getReply(int replyNo) {
		return mapper.selectReply(replyNo);
	}

	@Override
	public boolean addReply(ReplyVO vo) {
		return mapper.insertReply(vo) == 1;
	}

	@Override
	public boolean editReply(ReplyVO vo) {
		return mapper.updateReply(vo) == 1;
	}

	public boolean deleteReply(int replyNo) {
		return mapper.deleteReply(replyNo) == 1;
	}

	@Override
	public int getTotalCnt(int boardNo) {
		// TODO Auto-generated method stub
		return mapper.getTotalCnt(boardNo);
	}



}
