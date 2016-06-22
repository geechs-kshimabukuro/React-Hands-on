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

		var createTask = function (todo) {
			return React.createElement(
				"li",
				{ key: todo.id },
				todo.task
			);
		};

		return React.createElement(
			"div",
			{ className: "todolist" },
			React.createElement(
				"ul",
				null,
				this.props.todos.map(createTask)
			)
		);
	}
});

var TODOApp = React.createClass({
	displayName: "TODOApp",

	getInitialState: function () {
		return { todos: [{ id: Date.now(), task: 'hoge', status: 0 }], text: '' };
	},
	render: function () {
		return React.createElement(
			"div",
			{ className: "todoapp" },
			React.createElement(TODOForm, null),
			React.createElement(TODOList, { todos: this.state.todos })
		);
	}
});

ReactDOM.render(React.createElement(TODOApp, null), document.getElementById('app'));

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdG9kby5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxJQUFJLFdBQVcsTUFBTSxXQUFOLENBQWtCO0FBQUE7O0FBQ2hDLFNBQVEsWUFBVztBQUNsQixTQUNDO0FBQUE7QUFBQSxLQUFLLFdBQVUsVUFBZjtBQUFBO0FBQUEsR0FERDtBQUtBO0FBUCtCLENBQWxCLENBQWY7O0FBVUEsSUFBSSxXQUFXLE1BQU0sV0FBTixDQUFrQjtBQUFBOztBQUNoQyxTQUFRLFlBQVc7O0FBRWxCLE1BQUksYUFBYSxVQUFTLElBQVQsRUFBZTtBQUMvQixVQUFPO0FBQUE7QUFBQSxNQUFJLEtBQUssS0FBSyxFQUFkO0FBQW1CLFNBQUs7QUFBeEIsSUFBUDtBQUNBLEdBRkQ7O0FBSUEsU0FDQztBQUFBO0FBQUEsS0FBSyxXQUFVLFVBQWY7QUFDQztBQUFBO0FBQUE7QUFDRSxTQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLEdBQWpCLENBQXFCLFVBQXJCO0FBREY7QUFERCxHQUREO0FBT0E7QUFkK0IsQ0FBbEIsQ0FBZjs7QUFpQkEsSUFBSSxVQUFVLE1BQU0sV0FBTixDQUFrQjtBQUFBOztBQUMvQixrQkFBaUIsWUFBVztBQUMzQixTQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUMsSUFBSSxLQUFLLEdBQUwsRUFBTCxFQUFpQixNQUFNLE1BQXZCLEVBQStCLFFBQVEsQ0FBdkMsRUFBRCxDQUFULEVBQXNELE1BQU0sRUFBNUQsRUFBUDtBQUNBLEVBSDhCO0FBSS9CLFNBQVEsWUFBVztBQUNsQixTQUNDO0FBQUE7QUFBQSxLQUFLLFdBQVUsU0FBZjtBQUNDLHVCQUFDLFFBQUQsT0FERDtBQUVDLHVCQUFDLFFBQUQsSUFBVSxPQUFPLEtBQUssS0FBTCxDQUFXLEtBQTVCO0FBRkQsR0FERDtBQU1BO0FBWDhCLENBQWxCLENBQWQ7O0FBY0EsU0FBUyxNQUFULENBQ0Msb0JBQUMsT0FBRCxPQURELEVBRUMsU0FBUyxjQUFULENBQXdCLEtBQXhCLENBRkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIFRPRE9Gb3JtID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRyZW5kZXI6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRvZG9mb3JtXCI+XG5cdFx0XHRcdOOBk+OBk+OBjHRhc2vjgpLlhaXlipvjgZnjgotmb3Jt44Gr44Gq44KK44G+44GZ44CCXG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcblxudmFyIFRPRE9MaXN0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRyZW5kZXI6IGZ1bmN0aW9uKCkge1xuXG5cdFx0dmFyIGNyZWF0ZVRhc2sgPSBmdW5jdGlvbih0b2RvKSB7XG5cdFx0XHRyZXR1cm4gPGxpIGtleT17dG9kby5pZH0+e3RvZG8udGFza308L2xpPlxuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRvZG9saXN0XCI+XG5cdFx0XHRcdDx1bD5cblx0XHRcdFx0XHR7dGhpcy5wcm9wcy50b2Rvcy5tYXAoY3JlYXRlVGFzayl9XG5cdFx0XHRcdDwvdWw+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcblxudmFyIFRPRE9BcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHsgdG9kb3M6IFt7aWQ6IERhdGUubm93KCksIHRhc2s6ICdob2dlJywgc3RhdHVzOiAwfV0sIHRleHQ6ICcnfVxuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRvZG9hcHBcIj5cblx0XHRcdFx0PFRPRE9Gb3JtIC8+XG5cdFx0XHRcdDxUT0RPTGlzdCB0b2Rvcz17dGhpcy5zdGF0ZS50b2Rvc30vPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG5cblJlYWN0RE9NLnJlbmRlcihcblx0PFRPRE9BcHAgLz4sXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxuKTtcbiJdfQ==
