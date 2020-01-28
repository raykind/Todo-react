import React from 'react';
import './search-panel.css';

export default class SearchPanel extends React.Component {
    onSearchChange = (event) => {
        this.props.onSearch(event.target.value);
    };

    render() {
        return (
            <input type="text"
                   className="form-control search-input"
                   placeholder="type to search"
                   onChange={this.onSearchChange}/>
        );
    }
};
