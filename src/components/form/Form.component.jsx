import React from "react";
import "./Form.component.css";
import List from "../list/List.component";
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: { taskName: "", isDone: false },
      tasks: []
    };
  }

  handleInput = e => {
    this.setState({ newTask: { taskName: e.target.value, isDone: false } });
  };

  handleClick = e => {
    e.preventDefault();
    if (this.state.newTask.taskName)
      this.setState(
        state => {
          const tasks = [...state.tasks, state.newTask];
          return {
            tasks,
            newTask: { taskName: "", isDone: false }
          };
        },
        () => console.log(this.state.newTask)
      );
  };

  onRemoveItem = i => {
    this.setState(state => {
      const tasks = state.tasks.filter((item, j) => i !== j);
      return { tasks };
    });
  };

  onUpdateItem = i => {
    this.setState(state => {
      const tasks = state.tasks.map((item, j) => {
        if (i === j) return { taskName: item.taskName, isDone: !item.isDone };
        else return item;
      });

      return { tasks };
    });
  };

  cancelCourse = () => {
    this.setState({
      taskName: ""
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
          onClick={this.cancelCourse}
          value={this.state.newTask.taskName}
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
