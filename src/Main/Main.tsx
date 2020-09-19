import React from 'react';
import './Main.css';
import Sidebar from './Sidebar/Sidebar';
import Content from './Content/Content';

type Genre = "xss" | "ctf";
type Difficulty = "easy" | "intermediate" | "Advanced" | "Pro";

class Main extends React.Component<{}, {genre: Genre, difficulty: Difficulty}> {
    constructor(props: object) {
        super(props);
        this.state = {
            genre: "xss",
            difficulty: "easy"
        }
    }
    newGenre = (value: string)=>{
        this.setState({genre: value as Genre});
    }
    newDifficulty = (value: string)=>{
        this.setState({difficulty: value as Difficulty});
    }
    render() {
        return (
            <main className="Main">
                <Sidebar genreSelect={this.newGenre} difficultySelect={this.newDifficulty} />
                <Content genre={this.state.genre} difficulty={this.state.difficulty} />
            </main>
        )
    }
}
    

export default Main;