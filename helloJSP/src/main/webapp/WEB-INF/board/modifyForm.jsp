<%@page import="co.yedam.board.service.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>modifyForm.jsp</title>
</head>
<body>
	<%
	BoardVO vo = (BoardVO) request.getAttribute("vo");
	%>
	<h3>게시글 수정화면</h3>
	<form action="modifyBoard.do" method="post" >
		<!-- 따로 정의 안하면 get , post는 제한없이 가능 -->
		<input type="hidden" name="bno" value="<%=vo.getBoardNo() %>">
		<table border="1">
			<tr>
				<th>글제목</th>
				<td><input type="text" name="title" value="<%=vo.getTitle() %>"></td>
			</tr>
			<tr>
				<th>작성자</th>
				<td><input type="text" name="writer" value="<%=vo.getWriter() %>"></td>
			</tr>
			<tr>
				<td colspan="2"><textarea cols="31" rows="6" name="content"><%=vo.getContent() %></textarea></td>
			</tr>
			<tr>
				<th>파일명</th>
				<td><img src="images/<%=vo.getImage() %>" width="150px"></td>
			</tr>
			<tr>
				<td colspan="2"><input type="submit" value="수정"> <input
					type="reset" value="초기화"></td>
			</tr>
		</table>
	</form>

</body>
</html>