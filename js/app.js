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
			if (todo.status == 0) {
				return React.createElement(
					'li',
					{ key: todo.id },
					React.createElement('input', { type: 'checkbox' }),
					todo.task
				);
			} else {
				return React.createElement(
					'li',
					{ kay: i },
					React.createElement(
						's',
						null,
						todo.task
					)
				);
			}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdG9kby5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxJQUFJLFdBQVcsTUFBTSxXQUFOLENBQWtCO0FBQUE7O0FBQ2hDLGtCQUFpQixZQUFXO0FBQzNCLFNBQU8sRUFBQyxNQUFNLEVBQVAsRUFBUDtBQUNBLEVBSCtCO0FBSWhDLFdBQVUsVUFBUyxDQUFULEVBQVk7QUFDckIsT0FBSyxRQUFMLENBQWMsRUFBQyxNQUFNLEVBQUUsTUFBRixDQUFTLEtBQWhCLEVBQWQ7QUFDQSxFQU4rQjtBQU9oQyxlQUFjLFVBQVMsQ0FBVCxFQUFZO0FBQ3pCLElBQUUsY0FBRjtBQUNBLE1BQUksVUFBVSxLQUFLLEtBQUwsQ0FBVyxJQUF6QjtBQUNBLE9BQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsT0FBakI7QUFDQSxPQUFLLFFBQUwsQ0FBYyxFQUFDLE1BQU0sRUFBUCxFQUFkO0FBQ0EsRUFaK0I7QUFhaEMsU0FBUSxZQUFXO0FBQ2xCLFNBQ0M7QUFBQTtBQUFBLEtBQUssV0FBVSxVQUFmO0FBQ0M7QUFBQTtBQUFBLE1BQU0sVUFBVSxLQUFLLFlBQXJCO0FBQ0MsbUNBQU8sVUFBVSxLQUFLLFFBQXRCLEVBQWdDLE9BQU8sS0FBSyxLQUFMLENBQVcsSUFBbEQsR0FERDtBQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRDtBQURELEdBREQ7QUFRQTtBQXRCK0IsQ0FBbEIsQ0FBZjs7QUF5QkEsSUFBSSxXQUFXLE1BQU0sV0FBTixDQUFrQjtBQUFBOztBQUNoQyxTQUFRLFlBQVc7QUFDbEIsTUFBSSxhQUFhLFVBQVMsSUFBVCxFQUFlO0FBQy9CLE9BQUksS0FBSyxNQUFMLElBQWUsQ0FBbkIsRUFBc0I7QUFDckIsV0FDQztBQUFBO0FBQUEsT0FBSSxLQUFLLEtBQUssRUFBZDtBQUNDLG9DQUFPLE1BQUssVUFBWixHQUREO0FBRUUsVUFBSztBQUZQLEtBREQ7QUFNQSxJQVBELE1BT087QUFDTixXQUNDO0FBQUE7QUFBQSxPQUFJLEtBQUssQ0FBVDtBQUNDO0FBQUE7QUFBQTtBQUFJLFdBQUs7QUFBVDtBQURELEtBREQ7QUFLQTtBQUNELEdBZkQ7O0FBaUJBLFNBQ0M7QUFBQTtBQUFBLEtBQUssV0FBVSxVQUFmO0FBQ0M7QUFBQTtBQUFBO0FBQ0UsU0FBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixHQUFqQixDQUFxQixVQUFyQjtBQURGO0FBREQsR0FERDtBQU9BO0FBMUIrQixDQUFsQixDQUFmOztBQTZCQSxJQUFJLFVBQVUsTUFBTSxXQUFOLENBQWtCO0FBQUE7O0FBQy9CLGtCQUFpQixZQUFXO0FBQzNCLFNBQU8sRUFBRSxPQUFPLENBQUMsRUFBQyxJQUFJLEtBQUssR0FBTCxFQUFMLEVBQWlCLE1BQU0sTUFBdkIsRUFBK0IsUUFBUSxDQUF2QyxFQUFELENBQVQsRUFBUDtBQUNBLEVBSDhCO0FBSS9CLFFBQU8sVUFBUyxPQUFULEVBQWtCO0FBQ3hCLE9BQUssUUFBTCxDQUFjO0FBQ2IsVUFBTyxLQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLE1BQWpCLENBQXdCLEVBQUMsSUFBSSxLQUFLLEdBQUwsRUFBTCxFQUFpQixNQUFNLE9BQXZCLEVBQWdDLFFBQVEsQ0FBeEMsRUFBeEI7QUFETSxHQUFkO0FBR0EsRUFSOEI7QUFTL0IsU0FBUSxZQUFXO0FBQ2xCLFNBQ0M7QUFBQTtBQUFBLEtBQUssV0FBVSxTQUFmO0FBQ0MsdUJBQUMsUUFBRCxJQUFVLE9BQU8sS0FBSyxLQUF0QixHQUREO0FBRUMsdUJBQUMsUUFBRCxJQUFVLE9BQU8sS0FBSyxLQUFMLENBQVcsS0FBNUI7QUFGRCxHQUREO0FBTUE7QUFoQjhCLENBQWxCLENBQWQ7O0FBbUJBLFNBQVMsTUFBVCxDQUNDLG9CQUFDLE9BQUQsT0FERCxFQUVDLFNBQVMsY0FBVCxDQUF3QixLQUF4QixDQUZEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBUT0RPRm9ybSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4ge3RleHQ6ICcnfTtcblx0fSxcblx0b25DaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcblx0XHR0aGlzLnNldFN0YXRlKHt0ZXh0OiBlLnRhcmdldC52YWx1ZX0pO1xuXHR9LFxuXHRoYW5kbGVTdWJtaXQ6IGZ1bmN0aW9uKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dmFyIG5ld1Rhc2sgPSB0aGlzLnN0YXRlLnRleHQ7XG5cdFx0dGhpcy5wcm9wcy5vbkFkZChuZXdUYXNrKTtcblx0XHR0aGlzLnNldFN0YXRlKHt0ZXh0OiAnJ30pO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRvZG9mb3JtXCI+XG5cdFx0XHRcdDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG5cdFx0XHRcdFx0PGlucHV0IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS50ZXh0fS8+XG5cdFx0XHRcdFx0PGJ1dHRvbj5hZGQ8L2J1dHRvbj5cblx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG5cbnZhciBUT0RPTGlzdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0cmVuZGVyOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgY3JlYXRlVGFzayA9IGZ1bmN0aW9uKHRvZG8pIHtcblx0XHRcdGlmICh0b2RvLnN0YXR1cyA9PSAwKSB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PGxpIGtleT17dG9kby5pZH0+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIvPlxuXHRcdFx0XHRcdFx0e3RvZG8udGFza31cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8bGkga2F5PXtpfT5cblx0XHRcdFx0XHRcdDxzPnt0b2RvLnRhc2t9PC9zPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidG9kb2xpc3RcIj5cblx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdHt0aGlzLnByb3BzLnRvZG9zLm1hcChjcmVhdGVUYXNrKX1cblx0XHRcdFx0PC91bD5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuXG52YXIgVE9ET0FwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4geyB0b2RvczogW3tpZDogRGF0ZS5ub3coKSwgdGFzazogJ2hvZ2UnLCBzdGF0dXM6IDB9XSB9XG5cdH0sXG5cdG9uQWRkOiBmdW5jdGlvbihuZXdUYXNrKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHR0b2RvczogdGhpcy5zdGF0ZS50b2Rvcy5jb25jYXQoe2lkOiBEYXRlLm5vdygpLCB0YXNrOiBuZXdUYXNrLCBzdGF0dXM6IDB9KVxuXHRcdH0pO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRvZG9hcHBcIj5cblx0XHRcdFx0PFRPRE9Gb3JtIG9uQWRkPXt0aGlzLm9uQWRkfS8+XG5cdFx0XHRcdDxUT0RPTGlzdCB0b2Rvcz17dGhpcy5zdGF0ZS50b2Rvc30vPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG5cblJlYWN0RE9NLnJlbmRlcihcblx0PFRPRE9BcHAgLz4sXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxuKTtcbiJdfQ==
