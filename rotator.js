(function($){

	$.fn.rotator = function(options) {

		// Options and defaults
		if (typeof options == "undefined") {
			var options = {};
		}

		var speed = options.speed ? options.speed : 3000; // Milliseconds
		var transition_speed = options.transition_speed ? options.transition_speed : 500; // Milliseconds
		var sub_selector = options.sub_selector ? options.sub_selector : ".rotate";

		// Set other essential values
		var current = 1;
		var total = this.children(sub_selector).length;

		// Hide all "rotate" divs
		this.children(sub_selector).hide();

		// Get the first rotate div to show
		var $cur = this.children(sub_selector).first();
		var $this = this;

		$cur.fadeIn();

		function rotate_this()
		{

			$cur.stop().fadeOut(transition_speed, function(){

				// See if we're at the end
				if (current == total) {
					$cur = $this.children(sub_selector).first();
					current = 1;
				} else
					$cur = $cur.next();

				$cur.fadeIn(transition_speed);

				current++;

				console.log("rotate: "+current+" out of "+total);

			});

		}

		// Start it
		setInterval(rotate_this,speed);

		return this;

	};

})(jQuery);
