import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title.js';
import TodoList from '../components/TodoList.js';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                        text: 'wash your car'
                }, {
                    id: 2,
                        text: 'iron clothes'
                }, {
                    id: 3,
                        text: 'clean your room'
                }
            ]
        };
    }
    addAlert(value) {
        alert('treść z ', value);
    }

    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }

    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }

    render() {
        return (
            <div className={style.TodoApp}>
                <Title title="To Do List" number={this.state.data.length}/>
                <TodoList todos={this.state.data} removeTodo={(id) => this.removeTodo(id)} />
            </div>
        );
    }
}

export default App;