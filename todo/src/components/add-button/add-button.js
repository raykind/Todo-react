import React from 'react';
import './add-button.css'

export default class AddButton extends React.Component{
    state = {
      label: ''
    };

    onLabelChange = (event) => {
        this.setState({
            label: event.target.value.toUpperCase()
        });
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onAdd(this.state.label);
        this.setState({
            label: ''
        });
    };

    render() {
        const {onAdd} = this.props;
        return (
            <form className="add-button d-flex"
                  onSubmit={this.onSubmit}>

                <input type="text"
                       className="form-control"
                       onChange={this.onLabelChange}
                       placeholder="What needs to be done"
                       value={this.state.label}/>

                <button type="button"
                        className="btn btn-outline-secondary"
                        onClick={() => {
                            onAdd(this.state.label.toUpperCase());
                            this.setState({
                                label: ''
                            });
                        }}>
                    Add item
                </button>
            </form>
        );
    }
}
