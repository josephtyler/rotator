<h1>rotator</h1>

<p><a href="http://josephtyler.github.io/rotator/">View a demo here</a><p>

<p>'rotator' is a cleverly named jQuery plugin that .... rotates stuff. It's a very simple way to rotate information on a page. It requires that you include jQuery and the rotator.js file.</p>

<h2>Usage</h2>

<p>In order to use rotator you will need a parent element that acts as a wrapper for the content that you want to rotate. Within the wrapper you will place the content within elements sharing a common class. You can specify the selector for the wrapper as well as the selectors for the child elements.</p>

<h3>Options</h3>

<h4>Speed</h4>

<p>The speed option is the frequency at which the rotator will run measured in milliseconds.</p>

<code>options.speed = 3000; // New content will be rotated every 3 seconds</code>

<h4>Transition Speed</h4>

<p>The transition speed is rate at which the content will fade in and out.</p>

<code>options.transition_speed = 500; // Content will fade in and fade out for the duration of .5 seconds</code>

<h4>Sub Selector</h4>

<p>The sub selector is the selector you'd like to use for the child elements containing your rotate content.</p>

<code>options.sub_selector = ".mydiv"</code>

<h2>Example</h2>

<h3>HTML</h3>

```
<div id="rotate">
  <div class="rotate"><h1>div.rotate 1</h1></div>
  <div class="rotate"><h1>div.rotate 2</h1></div>
  <div class="rotate"><h1>div.rotate 3</h1></div>
  <div class="rotate"><h1>div.rotate 4</h1></div>
</div>
```

<h3>Javascript</h3>

<p>Be sure to include jQuery and rotator.js</p>

```
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script type="text/javascript" src="rotator.js"></script>
```

<p>Now you can call rotator on the parent element of your choice. In this case the parent element has an "id=rotate".</p>

<h4>Basic Usage (no options)</h4>

```
<script type="text/javascript">
$(document).ready(function(){
  $("#rotate").rotator();
});
</script>
```

<h4>Usage with options</h4>

```
<script type="text/javascript">
$(document).ready(function(){
  options = {
    "speed" : 3000, // Rotate every 3 seconds
    "transition_speed" : 500, // Fade in/out has a .5 second duration
    "sub_selector" : ".rotate"
  };
  $("#rotate").rotator(options);
});
</script>
```
