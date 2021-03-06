var React = require('react');
var Moment = require('moment');

var TaskActions = require('actions/TaskActions');
var ElapsedTime = require('components/ElapsedTime');

var TaskView = React.createClass({
	create: function () {
		var taskName = React.findDOMNode(this.refs.taskName).value;
	},

	render: function () {
		return (
			<div id="TaskView" className="task-creation">
           		<input type="text" id="TaskName" ref="taskName" placeholder="What are you working on?" />
           		
           		<button id="StartButton">
           			<span className="icon-play"></span>
       			</button>
			</div>
		);

		// return (
		// 	<div id="TaskView" className="task-current">
  //          		<dl>
  //          			<input value={this.props.task.name} disabled="disabled" />
  //          			<ElapsedTime from={this.props.task.startTime} />
  //          			<button id="ResetTask" onClick={this.reset}><span className="icon-to-start" /></button>
  //          			<button id="CompleteTask" onClick={this.complete}><span className="icon-ok" /></button>
  //      			</dl>
		// 	</div>
		// );
	}
});


module.exports = TaskView;