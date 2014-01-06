(function() {
	var css = "http://junk-box.appspot.com/stylesheet/classic-javadoc-stylesheet/classic-stylesheet.css";
	[packageListFrame, packageFrame, classFrame].forEach(function(frame) {
		frame.document.getElementsByTagName("link")[0].href = css
	});
})()
