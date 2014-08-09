[Classic Javadoc StyleSheet](http://junk-box.appspot.com/stylesheet/classic-javadoc-stylesheet/index.html)
=====================================================================

A stylesheet which changes javadoc of after Java7 to the old style of Java6.

Usage
------------

#### When create new javadoc
```
javadoc -stylesheetfile classic-stylesheet.css ... 
```

#### In the case of existing javadoc
replace css  
1. rename classic-stylesheet.css to stylesheet.css  
2. overwrite in existing stylesheet.css  

and also this bookmarklet too is possible to change the style.
```js
javascript:(function(){[packageListFrame,packageFrame,classFrame].forEach(function(a){a.document.getElementsByTagName("link")[0].href="http://junk-box.appspot.com/stylesheet/classic-javadoc-stylesheet/classic-stylesheet.css"})})();
```

License
------------

Classic Javadoc StyleSheet is licensed under the [MIT License](https://github.com/junk-box/classic-javadoc-stylesheet/blob/master/MIT-LICENSE).  

