import React, { createRef } from 'react';
import './Sidebar.css';
import Dropdown from './Dropdown/Dropdown';
import Description from './Description/Description';
import ResizeObserver from 'resize-observer-polyfill';
import LevelContainer from './LevelContainer/LevelContainer';
interface SidebarProps {
    genreSelect: (newValue: string)=>void,
    difficultySelect: (newValue: string)=>void
}
class Sidebar extends React.Component<SidebarProps, {width: string, desc: string}> {
    container: React.RefObject<HTMLElement>
    descriptions: {[index: string]: string} = {
        XSS: "Attempt to execute arbitrary javascript on a victim's browser. Complete the challenge by successfully executing an alert on the page.",
        CTF: "CTF (Capture The Flag) involves finding a specific string token which is submitted to beat the challenge."
    }
    ro: ResizeObserver|undefined
    handleGenreSelect = (value: string)=>{
        this.setState({desc: this.descriptions[value]});
        this.props.genreSelect(value.toLowerCase());
    }
    handleDifficultySelect = (value: string)=>{
        this.props.difficultySelect(value.toLowerCase());
    }
    constructor(props: SidebarProps) {
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
                <Dropdown options={["Easy", "Intermediate", "Advanced", "Pro"]} selection={this.handleDifficultySelect} />
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
        this.ro = ro;
    }
    componentWillUnmount() {
        if(this.ro) {
            this.ro.disconnect();
        }
    }
}
    

export default Sidebar;