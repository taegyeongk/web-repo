package co.yedam.reply.web;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.board.service.ReplyService;
import co.yedam.common.Command;
import co.yedam.common.PageDTO;
import co.yedam.reply.service.ReplyVO;
import co.yedam.reply.serviceImpl.ReplyServiceImpl;

public class ReplyListControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {

		String bno = req.getParameter("bno"); // 어떤 글에 대한 댓글로 반드시 있어야함.
		String page = req.getParameter("page");
		page = page == null ? "1" : page;
		ReplyService svc = new ReplyServiceImpl();

		// 페이징 계산
		PageDTO dto = new PageDTO(Integer.parseInt(bno), svc.getTotalCnt(Integer.parseInt(bno)),
				Integer.parseInt(page));

		List<ReplyVO> list = svc.replyList(Integer.parseInt(bno), Integer.parseInt(page));

		// list, dto.
		Map<String, Object> map = new HashMap<>();
		map.put("list", list);
		map.put("dto", dto);

		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();

		String json = gson.toJson(map);
		resp.setContentType("text/json;charset=utf-8");
		try {
			resp.getWriter().print(json);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}