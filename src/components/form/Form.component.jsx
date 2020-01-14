import React from "react";
import "./Form.component.css";
import List from "../list/List.component";
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: "",
      tasks: []
    };
  }

  handleInput = e => {
    this.setState({ newTask: e.target.value });
  };

  handleClick = e => {
    if (this.state.newTask)
      this.setState({
        tasks: [
          ...this.state.tasks,
          { taskName: this.state.newTask, isDone: false }
        ],
        newTask: ""
      });
  };

  onRemoveItem = i => {
    this.setState({ tasks: this.state.tasks.filter((item, j) => i !== j) });
  };

  onUpdateItem = i => {
    this.setState({
      tasks: this.state.tasks.map((item, j) => {
        if (i === j) return { ...item, isDone: !item.isDone };
        else return item;
      })
    });
  };

  render() {
    return (
      <div>
        <h1>ToDo List</h1>

        <input
          className="task-field"
          type="text"
          placeholder="Enter new Task"
          onChange={this.handleInput}
          value={this.state.newTask}
        />
        <button className="addTaskBtn btn" onClick={this.handleClick}>
          New Task
        </button>
        <List
          tasks={this.state.tasks}
          removefunc={this.onRemoveItem}
          compfunc={this.onUpdateItem}
        />
      </div>
    );
  }
}

export default Form;
