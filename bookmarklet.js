(function() {
	var css = "https://junk-box.github.io/classic-javadoc-stylesheet/classic-stylesheet.css";
	var frames = document.getElementsByTagName("frame");
	for (var i = 0; i < frames.length; i++) {
		var name = frames[i].name;
		if (name == "packageListFrame" || name == "packageFrame" || name == "classFrame") {
			frames[i].contentWindow.document.getElementsByTagName("link")[0].href = css;
		}
	}
})();
