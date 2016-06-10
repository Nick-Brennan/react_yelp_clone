import React from 'react'
import ReactDOM from 'react-dom'

const App = React.createClass({
	render: function(){
		return (React.createElement('div',{},"Silly Text"));
	}
});

const mountNode = document.querySelector('#root');

ReactDOM.render(<App />, mountNode);