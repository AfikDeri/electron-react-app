import React, {Component} from 'react';

class AddTodo extends Component {
    constructor() {
        super();

        this.state = {
            value: ''
        };

        this.add = this.add.bind(this);
    }

    add() {
        this.props.createTodo(this.state.value);

        this.setState({value: ''});
    }
    
    render() {
        return (
            <div className="create-todo">
                <input type="text"
                    value={this.state.value}
                    placeholder="What should I do?"
                    onChange={(e) => { this.setState({value: e.target.value}) }}/>

                <button onClick={this.add}>ADD</button>
            </div>
        );
    }
}

export default AddTodo;