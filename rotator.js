(function($){

	$.fn.rotator = function(options) {

		// Options. Use empty object so we don't overwrite our defaults
		var opts = $.extend({}, defaults, options);

		// Set other essential values
		var current = 1;
		var children = this.children(opts.sub_selector);
		var total = children.length;

		// Hide all "rotate" divs
		children.hide();

		// Get the first rotate div to show
		var $cur = children.first();
		var $this = this;

		$cur.fadeIn();

		function rotate_this()
		{

			$cur.stop().fadeOut(opts.transition_speed, function(){

				// See if we're at the end
				if (current == total) {
					$cur = children.first();
					current = 0;
				} else
					$cur = $cur.next();

				$cur.fadeIn(opts.transition_speed);

				current++;

				setTimeout(rotate_this,opts.speed);

			});

		}

		// Start it
		setTimeout(rotate_this,opts.speed);

		return this;

	};

	var defaults = $.fn.defaults = {
		speed: 3e3,
		transition_speed: 500,
		sub_selector: '.rotate'
	};

})(jQuery);
