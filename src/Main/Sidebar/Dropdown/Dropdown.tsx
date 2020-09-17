import React from 'react';
import './Dropdown.css';
import DropdownOption from "./DropdownOption/DropdownOption";

class Dropdown extends React.Component<{options: Array<string>, selection: (val: string)=>void, optionsBG?: Array<string>}, {selected: string, shown: Array<string>, dropped: boolean, shownHeight: number}> {
    constructor(props: {options: Array<string>, selection: (val: string)=>void, optionsBG: Array<string>}) {
        super(props);
        this.state = {
            selected: props.options[0],
            shown: [props.options[0]], 
            dropped: false,
            shownHeight: 1.5
        }
    }
    dropClick = (val: string)=>{
        if(this.state.selected === val && !this.state.dropped) {
            this.setState({dropped: true, shown:this.props.options, shownHeight:this.props.options.length * 1.3});
        } else if(this.state.dropped) {
            this.setState({dropped: false, shown:[val], selected: val, shownHeight: 1.5});
            this.props.selection(val);
        }
    }
    render() {
        return (
            <div className={this.state.dropped ? "Dropdown dropped" : "Dropdown"} style={ { height: this.state.shownHeight.toString() + "em" } } >
                {this.state.shown.map((val: string, ind: number)=>{
                    return <DropdownOption value={val} key={val} click={()=>{this.dropClick(val)}} selected={this.state.selected === val} bg={this.state.selected !== val && this.props.optionsBG ? this.props.optionsBG[ind] : ""} />
                })}
            </div>
        )
    }
}
    

export default Dropdown;