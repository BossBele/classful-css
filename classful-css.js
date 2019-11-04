// css3 properties from w3c-css-properties (https://github.com/known-css/known-css-properties)
var cssProperties = ["align-content","align-items","align-self","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","border","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-shadow","box-sizing","caption-side","clear","clip","color","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","content","counter-increment","counter-reset","cursor","direction","display","empty-cells","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","font","@font-face","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","hanging-punctuation","height","justify-content","@keyframes","left","letter-spacing","line-height","list-style","list-style-image","list-style-position","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","max-height","max-width","@media","min-height","min-width","nav-down","nav-index","nav-left","nav-right","nav-up","opacity","order","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-x","overflow-y","padding","padding-bottom","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","perspective","perspective-origin","position","quotes","resize","right","tab-size","table-layout","text-align","text-align-last","text-decoration","text-decoration-color","text-decoration-line","text-decoration-style","text-indent","text-justify","text-overflow","text-shadow","text-transform","top","transform","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","white-space","width","word-break","word-spacing","word-wrap","z-index"];
// jQuery function start
$(document).ready(function () {
	$("*:not([data-unclassful])").each(function () {
		// get class attribute value of the HTML object in loop
		var classes = $(this).attr("class");
		// If the object has a class attribute value
		if (classes) {
			classes = classes.toLowerCase();
			classes = classes.split(" ");
			// loop the classes attached to the HTML object
			for (let i = 0; i <= classes.length - 1; i++) {
				if (classes[i].split("-").length === 3) {
					// split the class into css property and its value
					var styleName = classes[i].slice(0, classes[i].lastIndexOf("-"));
					var styleAttribute = classes[i].slice( classes[i].lastIndexOf("-") + 1, classes[i].length );
					// if the obtained styleName represents a known css property value
					if (cssProperties.filter(x => x.match(styleName))) {
						// since the styleAttribute isn't kebab-cased, check if it is a number
						if (/^\d+$/.test(styleAttribute)) {
							styleAttribute += "px";
						}
						console.log(classes[i], styleName, styleAttribute);
						$(this).css(styleName, styleAttribute);
					}
				} else if(classes[i].split("-").length === 4) {
					// split the class into css property and its value
					var styleAttribute = classes[i].split("-");
					styleAttribute = styleAttribute[ styleAttribute.length - 2 ] + "-" + styleAttribute[ styleAttribute.length - 1 ];
					var styleName = classes[i].split("-" + styleAttribute)[0];
					// if the obtained styleName represents a known css property value
					if (cssProperties.filter(x => x.match(styleName))) {
						// console.log(classes[i], styleName, styleAttribute);
						$(this).css(styleName, styleAttribute);
					}
				} else {
					// split the class into css property and its value
					var styleName = classes[i].slice(0, classes[i].lastIndexOf("-"));
					var styleAttribute = classes[i].slice( classes[i].lastIndexOf("-") + 1, classes[i].length );
					// if the obtained styleName represents a known css property value
					if (cssProperties.filter(x => x.match(styleName))) {
						// since the styleAttribute isn't kebab-cased, check if it is a number
						if (/^\d+$/.test(styleAttribute)) {
							styleAttribute += "px";
						}
						// console.log(classes[i], styleName, styleAttribute);
						$(this).css(styleName, styleAttribute);
					}
				}
			}
		}
	});
});

jQuery.fn.extend({
  classful: function (classes) {
        $(this).each(function () {
		// If the object has a class attribute value
		if (classes) {
			classes = classes.toLowerCase();
			classes = classes.split(" ");
			// loop the classes attached to the HTML object
			for (let i = 0; i <= classes.length - 1; i++) {
				if (classes[i].split("-").length === 3) {
					// split the class into css property and its value
					var styleName = classes[i].slice(0, classes[i].lastIndexOf("-"));
					var styleAttribute = classes[i].slice( classes[i].lastIndexOf("-") + 1, classes[i].length );
					// if the obtained styleName represents a known css property value
					if (cssProperties.filter(x => x.match(styleName))) {
						// since the styleAttribute isn't kebab-cased, check if it is a number
						if (/^\d+$/.test(styleAttribute)) {
							styleAttribute += "px";
						}
						console.log(classes[i], styleName, styleAttribute);
						$(this).css(styleName, styleAttribute);
					}
				} else if(classes[i].split("-").length === 4) {
					// split the class into css property and its value
					var styleAttribute = classes[i].split("-");
					styleAttribute = styleAttribute[ styleAttribute.length - 2 ] + "-" + styleAttribute[ styleAttribute.length - 1 ];
					var styleName = classes[i].split("-" + styleAttribute)[0];
					// if the obtained styleName represents a known css property value
					if (cssProperties.filter(x => x.match(styleName))) {
						// console.log(classes[i], styleName, styleAttribute);
						$(this).css(styleName, styleAttribute);
					}
				} else {
					// split the class into css property and its value
					var styleName = classes[i].slice(0, classes[i].lastIndexOf("-"));
					var styleAttribute = classes[i].slice( classes[i].lastIndexOf("-") + 1, classes[i].length );
					// if the obtained styleName represents a known css property value
					if (cssProperties.filter(x => x.match(styleName))) {
						// since the styleAttribute isn't kebab-cased, check if it is a number
						if (/^\d+$/.test(styleAttribute)) {
							styleAttribute += "px";
						}
						// console.log(classes[i], styleName, styleAttribute);
						$(this).css(styleName, styleAttribute);
					}
				}
			}
		}
	});
    }
});