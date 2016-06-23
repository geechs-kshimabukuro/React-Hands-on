(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var TODOForm = React.createClass({
	displayName: 'TODOForm',

	getInitialState: function () {
		return { text: '' };
	},
	onChange: function (e) {
		this.setState({ text: e.target.value });
	},
	handleSubmit: function (e) {
		e.preventDefault();
		var newTask = this.state.text;
		this.props.onAdd(newTask);
		this.setState({ text: '' });
	},
	render: function () {
		return React.createElement(
			'div',
			{ className: 'todoform' },
			'ここがフォームだお'
		);
	}
});

var TODOList = React.createClass({
	displayName: 'TODOList',

	render: function () {
		var createTask = function (todo) {
			return React.createElement(
				'li',
				{ key: todo.id },
				React.createElement('input', { type: 'checkbox' }),
				todo.task
			);
		};

		return React.createElement(
			'div',
			{ className: 'todolist' },
			React.createElement(
				'ul',
				null,
				this.props.todos.map(createTask)
			)
		);
	}
});

var TODOApp = React.createClass({
	displayName: 'TODOApp',

	getInitialState: function () {
		return { todos: [{ id: Date.now(), task: 'hoge', status: 0 }] };
	},
	onAdd: function (newTask) {
		this.setState({
			todos: this.state.todos.concat({ id: Date.now(), task: newTask, status: 0 })
		});
	},
	render: function () {
		return React.createElement(
			'div',
			{ className: 'todoapp' },
			React.createElement(TODOForm, { onAdd: this.onAdd }),
			React.createElement(TODOList, { todos: this.state.todos })
		);
	}
});

ReactDOM.render(React.createElement(TODOApp, null), document.getElementById('app'));

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdG9kby5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxJQUFJLFdBQVcsTUFBTSxXQUFOLENBQWtCO0FBQUE7O0FBQ2hDLGtCQUFpQixZQUFXO0FBQzNCLFNBQU8sRUFBQyxNQUFNLEVBQVAsRUFBUDtBQUNBLEVBSCtCO0FBSWhDLFdBQVUsVUFBUyxDQUFULEVBQVk7QUFDckIsT0FBSyxRQUFMLENBQWMsRUFBQyxNQUFNLEVBQUUsTUFBRixDQUFTLEtBQWhCLEVBQWQ7QUFDQSxFQU4rQjtBQU9oQyxlQUFjLFVBQVMsQ0FBVCxFQUFZO0FBQ3pCLElBQUUsY0FBRjtBQUNBLE1BQUksVUFBVSxLQUFLLEtBQUwsQ0FBVyxJQUF6QjtBQUNBLE9BQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsT0FBakI7QUFDQSxPQUFLLFFBQUwsQ0FBYyxFQUFDLE1BQU0sRUFBUCxFQUFkO0FBQ0EsRUFaK0I7QUFhaEMsU0FBUSxZQUFXO0FBQ2xCLFNBQ0M7QUFBQTtBQUFBLEtBQUssV0FBVSxVQUFmO0FBQUE7QUFBQSxHQUREO0FBS0E7QUFuQitCLENBQWxCLENBQWY7O0FBc0JBLElBQUksV0FBVyxNQUFNLFdBQU4sQ0FBa0I7QUFBQTs7QUFDaEMsU0FBUSxZQUFXO0FBQ2xCLE1BQUksYUFBYSxVQUFTLElBQVQsRUFBZTtBQUMvQixVQUNDO0FBQUE7QUFBQSxNQUFJLEtBQUssS0FBSyxFQUFkO0FBQ0MsbUNBQU8sTUFBSyxVQUFaLEdBREQ7QUFFRSxTQUFLO0FBRlAsSUFERDtBQU1BLEdBUEQ7O0FBU0EsU0FDQztBQUFBO0FBQUEsS0FBSyxXQUFVLFVBQWY7QUFDQztBQUFBO0FBQUE7QUFDRSxTQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLEdBQWpCLENBQXFCLFVBQXJCO0FBREY7QUFERCxHQUREO0FBT0E7QUFsQitCLENBQWxCLENBQWY7O0FBcUJBLElBQUksVUFBVSxNQUFNLFdBQU4sQ0FBa0I7QUFBQTs7QUFDL0Isa0JBQWlCLFlBQVc7QUFDM0IsU0FBTyxFQUFFLE9BQU8sQ0FBQyxFQUFDLElBQUksS0FBSyxHQUFMLEVBQUwsRUFBaUIsTUFBTSxNQUF2QixFQUErQixRQUFRLENBQXZDLEVBQUQsQ0FBVCxFQUFQO0FBQ0EsRUFIOEI7QUFJL0IsUUFBTyxVQUFTLE9BQVQsRUFBa0I7QUFDeEIsT0FBSyxRQUFMLENBQWM7QUFDYixVQUFPLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsTUFBakIsQ0FBd0IsRUFBQyxJQUFJLEtBQUssR0FBTCxFQUFMLEVBQWlCLE1BQU0sT0FBdkIsRUFBZ0MsUUFBUSxDQUF4QyxFQUF4QjtBQURNLEdBQWQ7QUFHQSxFQVI4QjtBQVMvQixTQUFRLFlBQVc7QUFDbEIsU0FDQztBQUFBO0FBQUEsS0FBSyxXQUFVLFNBQWY7QUFDQyx1QkFBQyxRQUFELElBQVUsT0FBTyxLQUFLLEtBQXRCLEdBREQ7QUFFQyx1QkFBQyxRQUFELElBQVUsT0FBTyxLQUFLLEtBQUwsQ0FBVyxLQUE1QjtBQUZELEdBREQ7QUFNQTtBQWhCOEIsQ0FBbEIsQ0FBZDs7QUFtQkEsU0FBUyxNQUFULENBQ0Msb0JBQUMsT0FBRCxPQURELEVBRUMsU0FBUyxjQUFULENBQXdCLEtBQXhCLENBRkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIFRPRE9Gb3JtID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB7dGV4dDogJyd9O1xuXHR9LFxuXHRvbkNoYW5nZTogZnVuY3Rpb24oZSkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe3RleHQ6IGUudGFyZ2V0LnZhbHVlfSk7XG5cdH0sXG5cdGhhbmRsZVN1Ym1pdDogZnVuY3Rpb24oZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR2YXIgbmV3VGFzayA9IHRoaXMuc3RhdGUudGV4dDtcblx0XHR0aGlzLnByb3BzLm9uQWRkKG5ld1Rhc2spO1xuXHRcdHRoaXMuc2V0U3RhdGUoe3RleHQ6ICcnfSk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidG9kb2Zvcm1cIj5cblx0XHRcdFx044GT44GT44GM44OV44Kp44O844Og44Gg44GKXG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcblxudmFyIFRPRE9MaXN0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRyZW5kZXI6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBjcmVhdGVUYXNrID0gZnVuY3Rpb24odG9kbykge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGxpIGtleT17dG9kby5pZH0+XG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiLz5cblx0XHRcdFx0XHR7dG9kby50YXNrfVxuXHRcdFx0XHQ8L2xpPlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0b2RvbGlzdFwiPlxuXHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0e3RoaXMucHJvcHMudG9kb3MubWFwKGNyZWF0ZVRhc2spfVxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG5cbnZhciBUT0RPQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB7IHRvZG9zOiBbe2lkOiBEYXRlLm5vdygpLCB0YXNrOiAnaG9nZScsIHN0YXR1czogMH1dIH1cblx0fSxcblx0b25BZGQ6IGZ1bmN0aW9uKG5ld1Rhc2spIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHRvZG9zOiB0aGlzLnN0YXRlLnRvZG9zLmNvbmNhdCh7aWQ6IERhdGUubm93KCksIHRhc2s6IG5ld1Rhc2ssIHN0YXR1czogMH0pXG5cdFx0fSk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidG9kb2FwcFwiPlxuXHRcdFx0XHQ8VE9ET0Zvcm0gb25BZGQ9e3RoaXMub25BZGR9Lz5cblx0XHRcdFx0PFRPRE9MaXN0IHRvZG9zPXt0aGlzLnN0YXRlLnRvZG9zfS8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcblxuUmVhY3RET00ucmVuZGVyKFxuXHQ8VE9ET0FwcCAvPixcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXG4pO1xuIl19
