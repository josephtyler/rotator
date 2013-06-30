(function($){

$.fn.rotator = function(options) {

// Options and defaults
var speed = options.speed ? options.speed : 3000; // Milliseconds
var transition_speed = options.transition_speed ? options.transition_speed : 2000; // Milliseconds

// Set other essential values
var current = 1;
var total = this.children(".rotate").length;

// Hide all "rotate" divs
this.children(".rotate").hide();

// Get the first rotate div to show
var $cur = this.children(".rotate").first();
var $this = this;

$cur.fadeIn();

function rotate_this()
{

$cur.fadeOut(transition_speed, function(){

current++;

// See if we're at the end
if (current == total) {
$cur = $this.children(".rotate").first();
current = 1;
} else
$cur = $cur.next();

$cur.fadeIn(transition_speed);

});

}

// Start it
setInterval(rotate_this,speed);

return this;

};

})(jQuery);
