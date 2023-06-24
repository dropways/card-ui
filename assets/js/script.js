jQuery(window).on("load scroll", function () {
	if (jQuery(this).scrollTop() > 0) {
		jQuery(".header-wrap").addClass("sticky");
	} else {
		jQuery(".header-wrap").removeClass("sticky");
	}
});

jQuery(document).ready(function () {
	// Scroll Offset
	jQuery(".offset-top").on("click", function (e) {
		e.preventDefault();
		var target = jQuery(this).attr("href");
		jQuery("html, body")
			.stop()
			.animate(
				{
					scrollTop: jQuery(target).offset().top - 80,
				},
				1000,
				"swing",
				function () {}
			);
	});

});
