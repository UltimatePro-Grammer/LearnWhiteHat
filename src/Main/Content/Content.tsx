import React from 'react';
import Card from './Card/Card';
import './Content.css';
import db, { ChallengeTable } from "../../databases/challenges"
interface ContentProps {
    genre: string,
    difficulty: string
}
type Genre = "xss" | "ctf";
type Difficulty = "easy" | "intermediate" | "Advanced" | "Pro";

class Content extends React.Component<ContentProps, {genre: Genre, difficulty: Difficulty, cards: ChallengeTable[], loaded: boolean}> {
    constructor(props: ContentProps) {
        super(props);
        this.state = {
            genre: "xss",
            difficulty: "easy",
            cards:[],
            loaded: false
        }
    }
    componentDidMount() {
        this.updateChallenges();
    }
    render() {
        return (
            <section className="Content">
                {
                    this.state.loaded ? 
                        this.state.cards.length > 0 ?
                        this.state.cards.map((obj)=>{
                            return <Card title={obj.title} key={obj.title} tags={obj.tags} difficulty={obj.difficulty[0].toLocaleUpperCase()+obj.difficulty.slice(1)} html={obj.html} />
                        })
                        :
                        <h1 className="no-chall">No challenges under these restrictions. <br /> <a href="https://github.com/UltimatePro-Grammer/LearnWhiteHat" rel="noopener noreferrer" target="_blank">Contribute some?</a></h1>
                    :
                    <h1 className="no-chall">Loading...</h1>
                }
            </section>
        )
    }
    componentDidUpdate(oldProps: ContentProps) {
        const oldGenreIsNew = oldProps.genre !== this.props.genre;
        const oldDifficultyIsNew = oldProps.difficulty !== this.props.difficulty;
        if(oldGenreIsNew || oldDifficultyIsNew) {
            this.updateChallenges();
        }
    }
    updateChallenges = ()=>{
        // let newFetch = `/challenges/${this.props.genre}/${this.props.difficulty}.json`;
        // fetch(newFetch)
        // .then((response)=>{
        //     return response.json();
        // })
        // .then((json)=>{
        //     this.setState({loaded: true, cards: json.map((j: {title: string, desc: string, tags: string})=>{return {difficulty: this.state.difficulty, ...j, tags: j.tags.split(",")}})});
        // });
        db.challenges.where("difficulty").equals(this.props.difficulty)
        .and((x: ChallengeTable) => {
            return x.genre === this.props.genre;
        })
        .toArray((arr: ChallengeTable[])=>{
            this.setState({loaded: true, cards: arr});
        });
    }
}
    

export default Content;