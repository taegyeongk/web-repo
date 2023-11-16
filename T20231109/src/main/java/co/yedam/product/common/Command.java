package co.yedam.product.common;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public interface Command {

	void execute(HttpServletRequest req, HttpServletResponse resp);

}
