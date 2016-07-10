$(function() {
	$(document).on('click', 'div.clickable.spoiler-header', function (e) {
		var $this = $(this); //Heading
		var $panel = $this.parent('.panel');
		var $panel_body = $panel.children('.panel-body');
		var $display = $panel_body.css('display');

		if ($display == 'block') {
			$panel_body.slideUp();
		} else if($display == 'none') {
			$panel_body.slideDown();
		}
	});
});
