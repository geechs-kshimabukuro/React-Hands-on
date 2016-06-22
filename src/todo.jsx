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
		this.props.onAdd(newTask);
		this.setState({text: ''});
	},
	render: function() {
		return (
			<div className="todoform">
				<form onSubmit={this.handleSubmit}>
					<input onChange={this.onChange} value={this.state.text}/>
					<button>add</button>
				</form>
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
		return { todos: [{id: Date.now(), task: 'hoge', status: 0}] }
	},
	onAdd: function(newTask) {
		this.setState({
			todos: this.state.todos.concat({id: Date.now(), task: newTask, status: 0})
		});
	},
	render: function() {
		return (
			<div className="todoapp">
				<TODOForm onAdd={this.onAdd}/>
				<TODOList todos={this.state.todos}/>
			</div>
		);
	}
});

ReactDOM.render(
	<TODOApp />,
	document.getElementById('app')
);
