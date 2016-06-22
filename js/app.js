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
			React.createElement(
				'form',
				{ onSubmit: this.handleSubmit },
				React.createElement('input', { onChange: this.onChange, value: this.state.text }),
				React.createElement(
					'button',
					null,
					'add'
				)
			)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdG9kby5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxJQUFJLFdBQVcsTUFBTSxXQUFOLENBQWtCO0FBQUE7O0FBQ2hDLGtCQUFpQixZQUFXO0FBQzNCLFNBQU8sRUFBQyxNQUFNLEVBQVAsRUFBUDtBQUNBLEVBSCtCO0FBSWhDLFdBQVUsVUFBUyxDQUFULEVBQVk7QUFDckIsT0FBSyxRQUFMLENBQWMsRUFBQyxNQUFNLEVBQUUsTUFBRixDQUFTLEtBQWhCLEVBQWQ7QUFDQSxFQU4rQjtBQU9oQyxlQUFjLFVBQVMsQ0FBVCxFQUFZO0FBQ3pCLElBQUUsY0FBRjtBQUNBLE1BQUksVUFBVSxLQUFLLEtBQUwsQ0FBVyxJQUF6QjtBQUNBLE9BQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsT0FBakI7QUFDQSxPQUFLLFFBQUwsQ0FBYyxFQUFDLE1BQU0sRUFBUCxFQUFkO0FBQ0EsRUFaK0I7QUFhaEMsU0FBUSxZQUFXO0FBQ2xCLFNBQ0M7QUFBQTtBQUFBLEtBQUssV0FBVSxVQUFmO0FBQ0M7QUFBQTtBQUFBLE1BQU0sVUFBVSxLQUFLLFlBQXJCO0FBQ0MsbUNBQU8sVUFBVSxLQUFLLFFBQXRCLEVBQWdDLE9BQU8sS0FBSyxLQUFMLENBQVcsSUFBbEQsR0FERDtBQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRDtBQURELEdBREQ7QUFRQTtBQXRCK0IsQ0FBbEIsQ0FBZjs7QUF5QkEsSUFBSSxXQUFXLE1BQU0sV0FBTixDQUFrQjtBQUFBOztBQUNoQyxTQUFRLFlBQVc7O0FBRWxCLE1BQUksYUFBYSxVQUFTLElBQVQsRUFBZTtBQUMvQixVQUFPO0FBQUE7QUFBQSxNQUFJLEtBQUssS0FBSyxFQUFkO0FBQW1CLFNBQUs7QUFBeEIsSUFBUDtBQUNBLEdBRkQ7O0FBSUEsU0FDQztBQUFBO0FBQUEsS0FBSyxXQUFVLFVBQWY7QUFDQztBQUFBO0FBQUE7QUFDRSxTQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLEdBQWpCLENBQXFCLFVBQXJCO0FBREY7QUFERCxHQUREO0FBT0E7QUFkK0IsQ0FBbEIsQ0FBZjs7QUFpQkEsSUFBSSxVQUFVLE1BQU0sV0FBTixDQUFrQjtBQUFBOztBQUMvQixrQkFBaUIsWUFBVztBQUMzQixTQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUMsSUFBSSxLQUFLLEdBQUwsRUFBTCxFQUFpQixNQUFNLE1BQXZCLEVBQStCLFFBQVEsQ0FBdkMsRUFBRCxDQUFULEVBQVA7QUFDQSxFQUg4QjtBQUkvQixRQUFPLFVBQVMsT0FBVCxFQUFrQjtBQUN4QixPQUFLLFFBQUwsQ0FBYztBQUNiLFVBQU8sS0FBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixNQUFqQixDQUF3QixFQUFDLElBQUksS0FBSyxHQUFMLEVBQUwsRUFBaUIsTUFBTSxPQUF2QixFQUFnQyxRQUFRLENBQXhDLEVBQXhCO0FBRE0sR0FBZDtBQUdBLEVBUjhCO0FBUy9CLFNBQVEsWUFBVztBQUNsQixTQUNDO0FBQUE7QUFBQSxLQUFLLFdBQVUsU0FBZjtBQUNDLHVCQUFDLFFBQUQsSUFBVSxPQUFPLEtBQUssS0FBdEIsR0FERDtBQUVDLHVCQUFDLFFBQUQsSUFBVSxPQUFPLEtBQUssS0FBTCxDQUFXLEtBQTVCO0FBRkQsR0FERDtBQU1BO0FBaEI4QixDQUFsQixDQUFkOztBQW1CQSxTQUFTLE1BQVQsQ0FDQyxvQkFBQyxPQUFELE9BREQsRUFFQyxTQUFTLGNBQVQsQ0FBd0IsS0FBeEIsQ0FGRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgVE9ET0Zvcm0gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHt0ZXh0OiAnJ307XG5cdH0sXG5cdG9uQ2hhbmdlOiBmdW5jdGlvbihlKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7dGV4dDogZS50YXJnZXQudmFsdWV9KTtcblx0fSxcblx0aGFuZGxlU3VibWl0OiBmdW5jdGlvbihlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHZhciBuZXdUYXNrID0gdGhpcy5zdGF0ZS50ZXh0O1xuXHRcdHRoaXMucHJvcHMub25BZGQobmV3VGFzayk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7dGV4dDogJyd9KTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0b2RvZm9ybVwiPlxuXHRcdFx0XHQ8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuXHRcdFx0XHRcdDxpbnB1dCBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUudGV4dH0vPlxuXHRcdFx0XHRcdDxidXR0b24+YWRkPC9idXR0b24+XG5cdFx0XHRcdDwvZm9ybT5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuXG52YXIgVE9ET0xpc3QgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cblx0XHR2YXIgY3JlYXRlVGFzayA9IGZ1bmN0aW9uKHRvZG8pIHtcblx0XHRcdHJldHVybiA8bGkga2V5PXt0b2RvLmlkfT57dG9kby50YXNrfTwvbGk+XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidG9kb2xpc3RcIj5cblx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdHt0aGlzLnByb3BzLnRvZG9zLm1hcChjcmVhdGVUYXNrKX1cblx0XHRcdFx0PC91bD5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuXG52YXIgVE9ET0FwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4geyB0b2RvczogW3tpZDogRGF0ZS5ub3coKSwgdGFzazogJ2hvZ2UnLCBzdGF0dXM6IDB9XSB9XG5cdH0sXG5cdG9uQWRkOiBmdW5jdGlvbihuZXdUYXNrKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHR0b2RvczogdGhpcy5zdGF0ZS50b2Rvcy5jb25jYXQoe2lkOiBEYXRlLm5vdygpLCB0YXNrOiBuZXdUYXNrLCBzdGF0dXM6IDB9KVxuXHRcdH0pO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRvZG9hcHBcIj5cblx0XHRcdFx0PFRPRE9Gb3JtIG9uQWRkPXt0aGlzLm9uQWRkfS8+XG5cdFx0XHRcdDxUT0RPTGlzdCB0b2Rvcz17dGhpcy5zdGF0ZS50b2Rvc30vPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG5cblJlYWN0RE9NLnJlbmRlcihcblx0PFRPRE9BcHAgLz4sXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxuKTtcbiJdfQ==
