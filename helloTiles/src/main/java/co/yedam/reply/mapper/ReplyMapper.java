package co.yedam.reply.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import co.yedam.reply.service.ReplyVO;


public interface ReplyMapper {
	public List<ReplyVO> replyList(@Param("boardNo") int boardNo, @Param("page")int page);
	public ReplyVO selectReply(int replyNo);
	public int insertReply(ReplyVO vo);
	public int updateReply(ReplyVO vo);
	public int deleteReply(int ReplyNo);
	//댓글건수 
	public int getTotalCnt(int boardNo);
	
	
	
}
