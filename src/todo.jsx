

var TODOApp = React.createClass({
	render: function() {
		return (
			<div className="todoapp">
				ここがtodoアプリになるよ。
			</div>
		);
	}
});

ReactDOM.render(
	<TODOApp />,
	document.getElementById('app')
);
