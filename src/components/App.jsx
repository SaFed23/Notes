import React from "react";
import Clock from "./Clock";
import ToDo from "./Todo";
import AddNewTask from "./AddNewTask";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            tasks: [],
            currentId: 0,
        }
    }

    pushTask = task => {
        const updateTasks = [...this.state.tasks];
        let id = this.state.currentId;
        task.id = this.state.currentId;
        updateTasks.push(task); 
        this.setState({
            tasks: updateTasks.sort((task1, task2) => {
                return task1.level < task2.level ? 1 : -1;
            }),
            currentId: ++id,
        });
    }

    removeTask = task => {
        const updateTasks = this.state.tasks.filter(currentTask => task.id !== currentTask.id);
        this.setState({
            tasks: updateTasks,
        });
    }

    render() {
        return (
            <div className="col-12">
                <div className="conteiner">
                    <div className="row">
                        <Clock />
                        <ToDo tasks={this.state.tasks} removeTask={this.removeTask}/>
                        <AddNewTask pushTask={this.pushTask}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;