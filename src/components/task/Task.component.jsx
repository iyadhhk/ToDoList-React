import React from "react";
import "./Task.component.css";
export default function Task(props) {
  return (
    <div className="taskDiv-style">
      <p className={props.done ? "taskDone" : "p"}>{props.task}</p>
      <div>
        <button
          className={
            props.done ? "task-btns bg-yellow done" : "task-btns bg-yellow"
          }
          onClick={() => props.complete(props.index)}
        >
          {props.done ? "Not yet" : "Done"}
        </button>
        <button
          className="task-btns bg-red"
          onClick={() => props.delete(props.index)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
