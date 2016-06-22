(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var TODOForm = React.createClass({
	displayName: "TODOForm",

	render: function () {
		return React.createElement(
			"div",
			{ className: "todoform" },
			"ここがtaskを入力するformになります。"
		);
	}
});

var TODOList = React.createClass({
	displayName: "TODOList",

	render: function () {
		return React.createElement(
			"div",
			{ className: "todolist" },
			"ここがtaskリストの表示する場所だよ。"
		);
	}
});

var TODOApp = React.createClass({
	displayName: "TODOApp",

	render: function () {
		return React.createElement(
			"div",
			{ className: "todoapp" },
			"ここがtodoアプリになるよ。",
			React.createElement(TODOForm, null),
			React.createElement(TODOList, null)
		);
	}
});

ReactDOM.render(React.createElement(TODOApp, null), document.getElementById('app'));

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdG9kby5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxJQUFJLFdBQVcsTUFBTSxXQUFOLENBQWtCO0FBQUE7O0FBQ2hDLFNBQVEsWUFBVztBQUNsQixTQUNDO0FBQUE7QUFBQSxLQUFLLFdBQVUsVUFBZjtBQUFBO0FBQUEsR0FERDtBQUtBO0FBUCtCLENBQWxCLENBQWY7O0FBVUEsSUFBSSxXQUFXLE1BQU0sV0FBTixDQUFrQjtBQUFBOztBQUNoQyxTQUFRLFlBQVc7QUFDbEIsU0FDQztBQUFBO0FBQUEsS0FBSyxXQUFVLFVBQWY7QUFBQTtBQUFBLEdBREQ7QUFLQTtBQVArQixDQUFsQixDQUFmOztBQVVBLElBQUksVUFBVSxNQUFNLFdBQU4sQ0FBa0I7QUFBQTs7QUFDL0IsU0FBUSxZQUFXO0FBQ2xCLFNBQ0M7QUFBQTtBQUFBLEtBQUssV0FBVSxTQUFmO0FBQUE7QUFFQyx1QkFBQyxRQUFELE9BRkQ7QUFHQyx1QkFBQyxRQUFEO0FBSEQsR0FERDtBQU9BO0FBVDhCLENBQWxCLENBQWQ7O0FBWUEsU0FBUyxNQUFULENBQ0Msb0JBQUMsT0FBRCxPQURELEVBRUMsU0FBUyxjQUFULENBQXdCLEtBQXhCLENBRkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIFRPRE9Gb3JtID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRyZW5kZXI6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRvZG9mb3JtXCI+XG5cdFx0XHRcdOOBk+OBk+OBjHRhc2vjgpLlhaXlipvjgZnjgotmb3Jt44Gr44Gq44KK44G+44GZ44CCXG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcblxudmFyIFRPRE9MaXN0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRyZW5kZXI6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRvZG9saXN0XCI+XG5cdFx0XHRcdOOBk+OBk+OBjHRhc2vjg6rjgrnjg4jjga7ooajnpLrjgZnjgovloLTmiYDjgaDjgojjgIJcblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuXG52YXIgVE9ET0FwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0cmVuZGVyOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0b2RvYXBwXCI+XG5cdFx0XHRcdOOBk+OBk+OBjHRvZG/jgqLjg5fjg6rjgavjgarjgovjgojjgIJcblx0XHRcdFx0PFRPRE9Gb3JtIC8+XG5cdFx0XHRcdDxUT0RPTGlzdCAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG5cblJlYWN0RE9NLnJlbmRlcihcblx0PFRPRE9BcHAgLz4sXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxuKTtcbiJdfQ==
