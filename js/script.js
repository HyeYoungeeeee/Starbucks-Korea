
// 아코디언 효과
$(function () {
	const accordion = document.querySelector(".accordion");
	function toggleAccordion() {
		const clickedItem = this.parentNode;
		const items = accordion.querySelectorAll("li");

		items.forEach((item) => {
			if (clickedItem === item) {
				item.classList.toggle("on");
			} else {
				item.classList.remove("on");
			}
		});

	}
	const titles = accordion.querySelectorAll(".title");
	titles.forEach((title) => {
		title.addEventListener("click", toggleAccordion);

	});





	$(function () {
		$(".accordion>ul>li").click(function () {
			$(this).toggleClass("turn");

			if ($(this).hasClass("turn") === true) {
				$(this).siblings().removeClass("turn");

			}
		});
	});
});



// notice
$(function () {
	$(".left_notice a").mouseover(function () {
		$(".left_notice").css({
			"background-color": "#f5f7ff",
			"transition": "0.5s"
		});
	});
	$(".left_notice a").mouseleave(function () {
		$(".left_notice").css({
			"background-color": "#7bc1ff",
		});
	});
	$(".right_notice a").mouseover(function () {
		$(".right_notice").css({
			"background-color": "#7bc1ff",
			"transition": "0.5s"
		});
	});
	$(".right_notice a").mouseleave(function () {
		$(".right_notice").css({
			"background-color": "#f5f7ff",
		});
	});
});