[Classic Javadoc StyleSheet](https://junk-box.github.io/classic-javadoc-stylesheet/index.html)
=====================================================================

A stylesheet that changes java7 or later javadoc to java6 or earlier styles.

Usage
------------

#### In the case of create a new javadoc
- java7 or 8  
```
javadoc -stylesheetfile classic-stylesheet.css ... 
```
- java14  
```
javadoc -stylesheetfile classic-stylesheet14.css ... 
```

#### To change the style of an existing javadoc
- java7 or 8  
Rename classic-stylesheet.css to stylesheet.css
- java14  
Rename classic-stylesheet14.css to stylesheet.css

Replace the existing stylesheet.css.

#### You can also change style in your bookmarklet. Please add the following link to your bookmark.  
- java7 or 8  
```js
javascript:javascript:(function(){for(var b=document.getElementsByTagName(%22frame%22),a=0;a<b.length;a++){var c=b[a].name;if(%22packageListFrame%22==c||%22packageFrame%22==c||%22classFrame%22==c)b[a].contentWindow.document.getElementsByTagName(%22link%22)[0].href=%22https://junk-box.github.io/classic-javadoc-stylesheet/classic-stylesheet.css%22}})();
```
- java14  
```js
javascript:(function(){document.getElementsByTagName(%22link%22)[0].href=%22https://junk-box.github.io/classic-javadoc-stylesheet/classic-stylesheet14.css%22;})()
```

License
------------

Classic Javadoc StyleSheet is licensed under the MIT License.  
