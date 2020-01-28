import React, {Component} from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component{
    mainBtnClass = 'btn btn-info';
    secondaryBtnClass = 'btn btn-outline-secondary';

    state = {
        allBtnClass: this.mainBtnClass,
        activeBtnClass: this.secondaryBtnClass,
        doneBtnClass: this.secondaryBtnClass
    };

    highlightBtn = (property) => {
        const newData = {};

        Object.keys(this.state).forEach((item) => {
            newData[item] = item === property ? this.mainBtnClass : this.secondaryBtnClass;
        });

        this.setState(newData);
    };

    onAction = (action) => {
        switch (action) {
            case 'All':
                this.highlightBtn('allBtnClass');
                break;
            case 'Active':
                this.highlightBtn('activeBtnClass');
                break;
            case 'Done':
                this.highlightBtn('doneBtnClass');
                break;
            default:
                break;
        }

        this.props.onAction(action);
    };

    render() {
        return (
            <div className="btn-group">
                <button type="button"
                        className={this.state.allBtnClass}
                        onClick={() => this.onAction('All')}>All</button>
                <button type="button"
                        className={this.state.activeBtnClass}
                        onClick={() => this.onAction('Active')}>Active</button>
                <button type="button"
                        className={this.state.doneBtnClass}
                        onClick={() => this.onAction('Done')}>Done</button>
            </div>
        );
    }
};
