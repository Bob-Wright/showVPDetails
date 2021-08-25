<script>
// show viewport size
var showVPDetails = 1;
$(window).resize(function() {

 if(showVPDetails == 1) {
  var viewportWidth = $(window).width();
  var vpWidth = parseInt(viewportWidth);
    var fontSize = '3vw';
    if(vpWidth <= 840) { fontSize = '4vw' } else { fontSize = '1.5vw' };
	$("body").append('<div id="viewport-size" title="Viewport Size and Aspect" style="display:block;color:#fff;background:#08F;position:fixed;top:0;left:0;font-size:' + fontSize + ';z-index:20;"></div>');
  var viewportHeight = $(window).height();
  var vpHeight = parseInt(viewportHeight);
  var VPaspectRatio = viewportWidth / viewportHeight;
	var VPaspectRounded = (Math.round(VPaspectRatio * 100)) / 100;
	  // console.info("rounded VP aspect " + VPaspectRounded);
	$("#viewport-size").html('<div class="dimensions">' + viewportWidth + ' &times; ' + viewportHeight + ' px &amp; w/h = ' + 		VPaspectRounded + ' </div>');
 }
}).trigger('resize');
</script>
