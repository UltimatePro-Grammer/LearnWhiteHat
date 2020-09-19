import React, { createRef } from 'react';
import './Sidebar.css';
import Dropdown from './Dropdown/Dropdown';
import Description from './Description/Description';
import ResizeObserver from 'resize-observer-polyfill';
import LevelContainer from './LevelContainer/LevelContainer';

class Sidebar extends React.Component<{}, {width: string, desc: string}> {
    container: React.RefObject<HTMLElement>
    descriptions: {[index: string]: string} = {
        XSS: "Attempt to execute arbitrary javascript on a victim's browser. Complete the challenge by successfully executing an alert on the page.",
        CTF: "CTF (Capture The Flag) involves finding a specific string token which is submitted to beat the challenge."
    }
    handleGenreSelect = (value: string)=>{
        this.setState({desc: this.descriptions[value]})
    }
    constructor(props: object) {
        super(props);
        this.state = {
            width: "", 
            desc: this.descriptions.XSS
        }
        this.container = createRef();
    }
    render() {
        return (
            <aside className="Sidebar" ref={this.container}>
                <Dropdown options={["XSS", "CTF"]} selection={this.handleGenreSelect} />
                <Dropdown options={["Easy", "Intermediate", "Advanced", "Pro"]} selection={(val: string)=>{console.log(val)}} />
                <Description content={this.state.desc} width={this.state.width} />
                <LevelContainer width={this.state.width} />
            </aside>
        )
    }
    componentDidMount() {
        const ro = new ResizeObserver((entries)=>{
            window.requestAnimationFrame(()=>{
                entries.forEach((entry)=>{
                    this.setState({width: entry.contentRect.width < 560 ? (entry.contentRect.width - 50).toString()+"px" : ""});
                });
            });
        });
        if(this.container.current) {
            ro.observe(this.container.current);
        }
    }
}
    

export default Sidebar;