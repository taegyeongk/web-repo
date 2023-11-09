package co.yedam.board.service;

import java.util.List;

import co.yedam.reply.service.ReplyVO;

public interface ReplyService {
	public List<ReplyVO> replyList(int boardNo, int page);

	public ReplyVO getReply(int replyNo);

	public boolean addReply(ReplyVO vo);

	public boolean editReply(ReplyVO vo);

	public boolean deleteReply(int replyNo);

	// 댓글 건수
	public int getTotalCnt(int boardNo);


}
