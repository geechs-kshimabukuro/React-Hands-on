var TODOForm = React.createClass({
	getInitialState: function() {
		return {text: ''};
	},
	onChange: function(e) {
		this.setState({text: e.target.value});
	},
	handleSubmit: function(e) {
		e.preventDefault();
		var newTask = this.state.text;
		this.props.addTask(newTask);
		this.setState({text: ''});
	},
	render: function() {
		return (
			<div className="todoform">
				ここがフォームだお
			</div>
		);
	}
});

var TODOList = React.createClass({
	render: function() {
		var createTask = function(todo) {
			return (
				<li key={todo.id}>
					<input type="checkbox"/>
					{todo.task}
				</li>
			);
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
		return { todos: [{id: Date.now(), task: 'hoge'] }
	},
	addTask: function(newTask) {
		this.setState({
			todos: this.state.todos.concat({id: Date.now(), task: newTask})
		});
	},
	render: function() {
		return (
			<div className="todoapp">
				<TODOForm addTask={this.addTask}/>
				<TODOList todos={this.state.todos}/>
			</div>
		);
	}
});

ReactDOM.render(
	<TODOApp />,
	document.getElementById('app')
);
