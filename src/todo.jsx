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
		return (
			<div className="todolist">
				ここがtaskリストの表示する場所だよ。
			</div>
		);
	}
});

var TODOApp = React.createClass({
	render: function() {
		return (
			<div className="todoapp">
				ここがtodoアプリになるよ。
				<TODOForm />
				<TODOList />
			</div>
		);
	}
});

ReactDOM.render(
	<TODOApp />,
	document.getElementById('app')
);
