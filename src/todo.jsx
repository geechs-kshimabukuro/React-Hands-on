var TODOForm = React.createClass({
	render: function() {
		return (
			<div className="todoform">
				ここがtaskを入力するformになります。
			</div>
		);
	}
});

var TODOList = React.createClass({
	render: function() {

		var createTask = function(todo) {
			return <li key={todo.id}>{todo.task}</li>
		}

		return (
			<div className="todolist">
				<ul>
					{this.props.todos.map(createTask)}
				</ul>
			</div>
		);
	}
});

var TODOApp = React.createClass({
	getInitialState: function() {
		return { todos: [{id: Date.now(), task: 'hoge', status: 0}], text: ''}
	},
	render: function() {
		return (
			<div className="todoapp">
				<TODOForm />
				<TODOList todos={this.state.todos}/>
			</div>
		);
	}
});

ReactDOM.render(
	<TODOApp />,
	document.getElementById('app')
);
