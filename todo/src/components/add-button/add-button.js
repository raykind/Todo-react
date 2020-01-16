import React from 'react';
import './add-button.css'

export default class AddButton extends React.Component{
    render() {
        const {onAdd} = this.props;
        return (
            <div className="add-button">
                <button type="button"
                        className="btn btn-outline-secondary"
                        onClick={() => onAdd('Hello World')}>
                    Add new item
                </button>
            </div>
        );
    }
}
