import React from 'react';
import Card from './Card/Card';
import './Content.css';

class Content extends React.Component<{}, {}> {
    render() {
        return (
            <section className="Content">
                <Card title="Hello World of XSS" tags={["basics", "beginner", "xss"]} difficulty={"Easy"} html={`<html><body style="height: 100vh;overflow: hidden;"><div style="display: flex; justify-content: center; align-items: center; height: 100%; flex-direction: column;"><input style="width: 100%; font-size:2em;" type="search" placeholder="type in me!!!" /><button style="font-size:1em; margin-top: 1em;">Search!</button></div></body></html>`}/>
                <Card title="Oogle Injection" tags={["basics", "search", "xss"]} difficulty={"Intermediate"}/>
                <Card title="Travel Destinations"  tags={["basics", "input", "real-world"]} difficulty={"Advanced"}/>
                <Card title="V3RY 3ASY"  tags={["real-world", "math", "xss"]} difficulty={"Pro"}/>
            </section>
        )
    }
}
    

export default Content;