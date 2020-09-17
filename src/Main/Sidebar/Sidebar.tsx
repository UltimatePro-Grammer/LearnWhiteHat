import React, { createRef } from 'react';
import './Sidebar.css';
import Dropdown from './Dropdown/Dropdown';
import Description from './Description/Description';
import ResizeObserver from 'resize-observer-polyfill';

class Sidebar extends React.Component<{}, {width: string}> {
    container: React.RefObject<HTMLElement>
    constructor(props: object) {
        super(props);
        this.state = {
            width: ""
        }
        this.container = createRef();
    }
    render() {
        return (
            <aside className="Sidebar" ref={this.container}>
                <Dropdown options={["XSS", "CTF", "Password Crack"]} selection={(val: string)=>{console.log(val)}} />
                <Dropdown options={["Easy", "Intermediate", "Advanced", "Pro"]} selection={(val: string)=>{console.log(val)}} />
                <Description content="Attempt to execute arbitrary javascript on a victim's browser. Complete the challenge by successfully executing an alert on the page." width={this.state.width} />
            </aside>
        )
    }
    componentDidMount() {
        const ro = new ResizeObserver((entries)=>{
            entries.forEach((entry)=>{
                this.setState({width: entry.contentRect.width < 560 ? (entry.contentRect.width - 40).toString()+"px" : ""});
            });
        });
        if(this.container.current) {
            ro.observe(this.container.current);
        }
    }
}
    

export default Sidebar;