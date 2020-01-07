import React from "react";
import "./List.component.css";
import Task from "../task/Task.component";

export default function List(props) {
  return (
    <div className="list-body">
      {props.tasks.map((el, i) => {
        return (
          <Task
            key={i}
            index={i}
            task={el.taskName}
            done={el.isDone}
            delete={props.removefunc}
            complete={props.compfunc}
          />
        );
      })}
    </div>
  );
}
