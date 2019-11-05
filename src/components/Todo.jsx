import React from "react";
import classNames from "classnames";

function setColor(task) {
    return classNames("list-group-item", {
        "list-group-item-warning": task.level === 1,
        "list-group-item-success": task.level === 0,
        "list-group-item-danger": task.level === 2,
    });
}

function ToDo(props) {
    return (
        <div className="col-6">
            <ul className="list-group">
                <li className="list-group-item active">ToDo list</li>
                { props.tasks.map(task => 
                <li key={task.id} className={setColor(task)}>
                    <div className="conteiner">
                        <div className="row">
                            <div className="col-10">
                                { task.name }
                            </div>
                            <div className="col-2">
                                <button className="btn btn-success" onClick={props.removeTask.bind(this, task)}>Done</button>
                            </div>
                        </div>
                    </div>                
                </li>)}
            </ul>
        </div>
    )
}

export default ToDo;