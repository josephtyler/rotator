(function($){

	$.fn.rotator = function(options) {

		var defaults = {
			speed : 3000,
			transition_speed : 500,
			sub_selector : '.rotate'
		};

		// Options. Use empty object so we don't overwrite our defaults
		var opts = $.extend({}, defaults, options);

		// Set other essential values
		var current = 1;
		var children = this.children(sub_selector);
		var total = children.length;

		// Hide all "rotate" divs
		children.hide();

		// Get the first rotate div to show
		var $cur = children.first();
		var $this = this;

		$cur.fadeIn();

		function rotate_this()
		{

			$cur.stop().fadeOut(transition_speed, function(){

				// See if we're at the end
				if (current == total) {
					$cur = children.first();
					current = 0;
				} else
					$cur = $cur.next();

				$cur.fadeIn(transition_speed);

				current++;

				console.log("rotate: "+current+" out of "+total);

				setTimeout(rotate_this,speed);

			});

		}

		// Start it
		setTimeout(rotate_this,speed);

		return this;

	};

	var defaults = $.fn.defaults = {
		speed: 3e3,
		transition_speed: 500,
		sub_selector: '.rotate'
	};

})(jQuery);
