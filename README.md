[Classic Javadoc StyleSheet](https://junk-box.github.io/classic-javadoc-stylesheet/)
=====================================================================

This is a stylesheet to change the javadoc of Java 7 or later to the old style of Java 6 or earlier.

Usage
------------

#### In the case of create a new javadoc
- java25  
```
javadoc --add-stylesheet classic-stylesheet25.css ... 
```
- java21  
```
javadoc --add-stylesheet classic-stylesheet21.css ... 
```
- java17  
```
javadoc -stylesheetfile classic-stylesheet17.css ... 
```
- java14  
```
javadoc -stylesheetfile classic-stylesheet14.css ... 
```
- java7 or 8  
```
javadoc -stylesheetfile classic-stylesheet.css ... 
```

#### To change the style of an existing javadoc
- java25  
Add classic-stylesheet25.css to css
- java21  
Add classic-stylesheet21.css to css
- java17  
Rename classic-stylesheet17.css to stylesheet.css
- java14  
Rename classic-stylesheet14.css to stylesheet.css
- java7 or 8  
Rename classic-stylesheet.css to stylesheet.css

Replace the existing stylesheet.css.


#### You can also change style in your bookmarklet. Please add the following link to your bookmark.  
- java25  
```js
javascript:(function(){var cs=document.createElement(%22link%22);cs.rel=%22stylesheet%22;cs.type=%22text/css%22;cs.href=%22https://junk-box.github.io/classic-javadoc-stylesheet/classic-stylesheet25.css%22;document.getElementsByTagName(%22head%22)[0].appendChild(cs);})()
```
- java21  
```js
javascript:(function(){var cs=document.createElement(%22link%22);cs.rel=%22stylesheet%22;cs.type=%22text/css%22;cs.href=%22https://junk-box.github.io/classic-javadoc-stylesheet/classic-stylesheet21.css%22;document.getElementsByTagName(%22head%22)[0].appendChild(cs);})()
```
- java17  
```js
javascript:(function(){document.getElementsByTagName(%22link%22)[0].href=%22https://junk-box.github.io/classic-javadoc-stylesheet/classic-stylesheet17.css%22;})()
```
- java14  
```js
javascript:(function(){document.getElementsByTagName(%22link%22)[0].href=%22https://junk-box.github.io/classic-javadoc-stylesheet/classic-stylesheet14.css%22;})()
```
- java7 or 8  
```js
javascript:javascript:(function(){for(var b=document.getElementsByTagName(%22frame%22),a=0;a<b.length;a++){var c=b[a].name;if(%22packageListFrame%22==c||%22packageFrame%22==c||%22classFrame%22==c)b[a].contentWindow.document.getElementsByTagName(%22link%22)[0].href=%22https://junk-box.github.io/classic-javadoc-stylesheet/classic-stylesheet.css%22}})();
```

License
------------

Classic Javadoc StyleSheet is licensed under the MIT License.  
