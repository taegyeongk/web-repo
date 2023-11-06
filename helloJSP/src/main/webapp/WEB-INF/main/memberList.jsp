<%@page import="co.yedam.board.service.MemberVO"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	
<%@include file="../layout/menu.jsp"%>
<%@include file="../layout/header.jsp"%>

	<h3>회원정보</h3>
	<table class="table">
		<thead>
			<tr>
				<th>아이디</th>
				<th>이름</th>
				<th>연락처</th>
			</tr>
		</thead>
		<tbody>
		<%
		List<MemberVO> list = (List<MemberVO>) request.getAttribute("memberList");
		%>
		<%
			for (MemberVO vo : list) {
			%>
			<tr> 
				<td><%=vo.getMid()%></td>
				<td><%=vo.getName()%></td>
				<td><%=vo.getPhone()%></td>
			</tr>
			<%
			}
			%>
		</tbody>
	</table>
<%@include file="../layout/footer.jsp"%>
</body>
</html>