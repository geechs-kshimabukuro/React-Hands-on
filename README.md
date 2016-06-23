# React-Hands-on

2016/06/23 にチーム内で予定しているReactのハンズオンのために作ったもの。
今回、基本的なところをやりたいのでes6は使いません!

## ReactでTodoアプリつくるよん∧( 'Θ' )∧

### このアプリでできる ~~ようになりたい~~ こと

- タスクの追加
- タスクの表示
- ~~タスク完了させるやつ~~ 未実装

保存機能はつけません。viewだけにしたいので。

23日 07:00 現在、タスク完了の機能を実装まだできていないです。  
check boxをクリックしたら打ち消し線が引かれている感じのやつをやりたい。(願望)

## 準備

- `$ git clone https://github.com/geechs-kshimabukuro/React-Hands-on.git`
- `$ cd React-Hands-on`
- `$ npm install`

## Step1


- まずはindex.htmlを作ってあげましょう∧( 'Θ' )∧

		index.html
		<!DOCTYPE html>
		<html>
			<head>
				<meta charset="utf-8">
				<title>TODOアプリもどきだお∧( 'Θ' )∧</title>

				<script src="./build/react.js" charset="utf-8"></script>
				<script src="./build/react-dom.js" charset="utf-8"></script>
				<link rel="stylesheet" href="./css/style.css">
			</head>
			<body>

				<h1>TODOあぷり(もどき)だお</h1>

				<div id="app"></div>
				<script src="./js/app.js" charset="utf-8"></script>
			</body>
		</html>

- 次に、src/ にtodo.jsxを作ってあげましょう。

		src/todo.jsx
		ReactDOM.render(
			<p>Hello, React!</p>,
			document.getElementById('app')
		);

- `$ gulp`

![img](./img/img1.png)

できたかぬ?

## Step2

表示できたところで、今度はTODOアプリの枠を作っていきます。

ここからは todo.jsx を編集していきます。

		src/todo.jsx
		var TODOApp = React.createClass({
			render: function() {
				return (
					<div className="todoapp">
						ここがアプリになるよ
					</div>
					);
			}
		});

		ReactDOM.render(
			<TODOApp />,
			document.getElementById('app')
		);

![img](./img/img2.png)

これで、アプリの枠ができました。続いてtaskを追加する場所と追加されたtaskを表示するための枠を作ります。

		src/todo.jsx
		var TODOForm = React.createClass({
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
				return (
					<div className="todolist">
						ここがリストだよ
					</div>
				);
			}
		});

		var TODOApp = React.createClass({
			render: function() {
				return (
					<div className="todoapp">
						<TODOForm />
						<TODOList />
					</div>
					:
					:

![img](./img/img3.png)

## Step3

枠ができたので、今度は追加されたtaskが表示できるようにしましょう。

- まずは、追加されたtaskを管理する配列をつくりますϵ( 'Θ' )϶

		src/todo.jsx
		:
		:
		var TODOApp = React.createClass({
			getInitialState: function() {
				return { todos: [{id: Date.now(), task: 'hoge', status: 0}] }
			},
			:
			:

- 次に、追加されたtaskが評議できるようにします。

		src/todo.jsx
		:
		:
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
				return { todos: [{id: Date.now(), task: 'hoge', status: 0}] }
			},
			render: function() {
				<div className="todoapp">
					<TODOForm />
					<TODOList todos={this.state.todos}/>
				</div>
			}
		});
		:
		:

![img](./img/img4.png)

## Step4

taskが表示されましたぁ。というわけでtaskを追加するためのformを表示します。

		src/todo.jsx
		var TODOForm = React.createClass({
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
		:
		:

![img](./img/img5.png)

- form で送信されたtaskが登録されるように値を渡します。

		src/todotodo.jsx
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

		:
		:

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

		:
		:

![img](./img/img6.png)

完成!
