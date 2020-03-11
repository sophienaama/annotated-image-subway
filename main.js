$("body").on("click", ".dot:not(.active)", function (e) {
	e.preventDefault();

	const this_dot = e.target;

	const $this_dot = $(this_dot).closest(".dot");

	$this_dot.addClass("active");
	// when you tell it what class name to use, leave out the dot before "active", .addClass is a method
});

$("body").on("click", ".dot.active .close", function (e) {
	e.preventDefault();

	const this_dot = e.target;

	const $this_dot = $(this_dot).closest(".dot");

	$this_dot.removeClass("active");
	// when you tell it what class name to use, leave out the dot before "active", .addClass is a method
});