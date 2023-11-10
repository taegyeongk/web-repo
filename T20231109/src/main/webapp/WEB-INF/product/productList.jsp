
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<title>coffee shop</title>
</head>
<body>
	<table class="table">
		<thead>
			<tr>
				<th>상품코드</th>
				<th>상품이름</th>
				<th>상품설명</th>
				<th>판매금액</th>
				<th>할인금액</th>
				<th>평점</th>
			</tr>
			
		<thead>
		<tbody>

			<c:forEach items="${list }" var="vo">
				<tr>
					<td>${vo.prod_code }</td>
					<td><a href="getBoard.do?pno=${vo.prod_code }">${vo.prod_desc }</a></td>
					<td>${vo.price }</td>
					<td>${vo.off_price }</td>
					<td>${vo.like_it }</td>
				</tr>
			</c:forEach>
		</tbody>
	</table>
	<p>
		<a href="productListForm.do">상품목록</a>
	</p>






                    <div class="col mb-5">
                        <div class="card h-100">
                            <!-- Sale badge-->
                            <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
                            <!-- Product image-->
                            <img class="card-img-top" src="resources/images/${vo.prod_images }" alt="..." />
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">${vo.prod_name }</h5>
                                    <!-- Product reviews-->
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        <div class="bi-star-fill"></div>
                                        <c:forEach></c:forEach>

<!--                                        <div class="bi-star-fill"></div>-->
                                    </div>
                                    <!-- Product price-->
                                    <span class="text-muted text-decoration-line-through">$30.00</span>
                                    $15.00
                                </div>
                            </div>
                            <!-- Product actions-->
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                            </div>
                        </div>
                    </div>
	
</body>
</html>