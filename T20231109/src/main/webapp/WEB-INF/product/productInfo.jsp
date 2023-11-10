<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>

<h3>상품목록</h3>
			<ul>
				<li>상품코드</li>
				<li>상품이름</li>
				<li>상품설명</li>
				<li>판매금액</li>
				<li>할인금액</li>
			</ul>
			<c:forEach items="${list }" var="vo">
				<li>${vo.prod_code }</li>
				<li><a href="getBoard.do?pno=${vo.prod_name }">${vo.prod_desc }</a></li>
				<li>${vo.price }</li>
				<li>${vo.off_price }</li>
				<li>${vo.like_it }</li>
				<li>${vo.prod_image }</li>
			</c:forEach>
	<p>
		<a href="productListForm.do">상품목록</a>
	</p>


<jsp:include page="../layout/footer.jsp"></jsp:include>

