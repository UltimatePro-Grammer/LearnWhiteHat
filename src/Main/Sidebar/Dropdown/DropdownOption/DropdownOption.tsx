import React from 'react';
import './DropdownOption.css';

class DropdownOption extends React.Component<{value: string, click: Function, selected: boolean, bg?: string}, {}> {
    click = ()=>{
        this.props.click();
    }
    render() {
        return (
            <div className={this.props.selected ? "DropdownOption unselectable selected" : "DropdownOption unselectable"} onClick={this.click} title={this.props.value} style={{backgroundColor: this.props.bg}}>
                <span>{this.props.value}</span>
            </div>
        )
    }
}
    

export default DropdownOption;