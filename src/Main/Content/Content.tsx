import React, { ChangeEvent, MutableRefObject, useCallback, useEffect, useRef, useState } from 'react';
import Card from './Card/Card';
import './Content.css';
import db, { ChallengeTable } from "../../databases/challenges";
import { useLocation } from 'wouter';
import SearchGraphic from "./SearchGraphic.svg";
interface ContentProps {
    genre: string,
    difficulty: string
}
type Genre = "xss" | "ctf";
type Difficulty = "easy" | "intermediate" | "Advanced" | "Pro";

const Content = (props: ContentProps)=>{
    const [loaded, setLoaded] = useState(false);
    const [cards, setCards]: [ChallengeTable[], any] = useState([]);
    const [difficulty, setDifficulty]: [Difficulty, any] = useState("easy");
    const [genre, setGenre]: [Genre, any] = useState("xss");
    const [location, setLocation]: [string, any] = useLocation();
    const tagMatch = location.match(/\/t\/(.+)/);
    const [tag, setTag]: [string|"", any] = useState(tagMatch ? tagMatch[1] : "");
    const updateChallenges = useCallback(()=>{
        console.group();
            if(!tag) {
                db.challenges.where("difficulty").equals(props.difficulty)
                .toArray((arr: ChallengeTable[])=>{
                    arr = arr.filter(x=>x.genre === props.genre);
                    if(!tag) {
                        setLoaded(true);
                        setCards(arr);
                    }
                });
            } else {
                switch(tag) {
                    case "easy":
                    case "intermediate":
                    case "advanced":
                    case "pro":
                        db.challenges.where("difficulty").equals(tag)
                        .toArray((arr: ChallengeTable[])=>{
                            setLoaded(true);
                            setCards(arr);
                        });
                        break;
                    default:
                        db.challenges.where("tags").equals(tag)
                        .toArray((arr: ChallengeTable[])=>{
                            setLoaded(true);
                            setCards(arr);
                        });
                        break;
                }
            }
            console.groupEnd();
        },
        [props, tag]
    );
    const handleSearch = (event: ChangeEvent<HTMLInputElement>)=>{
        setTag(event.target.value);
    }
    const handleSearchBlur = ()=>{
        if(tag) {
            setLocation("/t/"+tag);
        } else {
            setLocation("/");
        }
    }


    const previousPropsRef: MutableRefObject<ContentProps|undefined> = useRef();
    previousPropsRef.current = props;
    useEffect(() => {
        const oldGenreIsNew = previousPropsRef.current?.genre !== genre;
        const oldDifficultyIsNew = previousPropsRef.current?.difficulty !== difficulty;
        if(oldGenreIsNew || oldDifficultyIsNew) {
            setLocation("/");
            updateChallenges();
        }
        previousPropsRef.current = props;
        setGenre(props.genre);
        setDifficulty(props.difficulty);
    }, [props, genre, difficulty, updateChallenges, setLocation]);
    useEffect(()=>{
        updateChallenges();
    }, [updateChallenges]);
    useEffect(()=>{
        const tagMatch = location.match(/\/t\/(.+)/);
        setTag(tagMatch ? tagMatch[1] : "");
    }, [location]);

    
    return (
        <section className="Content">
            <div className="search">
                <img src={SearchGraphic} alt="Search Icon" />
                <div className="bar"></div>
                <input type="search" className="searcher" placeholder="Enter a search here..." value={tag} onChange={handleSearch} onBlur={handleSearchBlur}/>
            </div>
            {
                loaded ? 
                    cards.length > 0 ?
                    cards.map((obj, index)=>{
                        return <Card title={obj.title} key={obj.title} tags={obj.tags} difficulty={obj.difficulty[0].toLocaleUpperCase()+obj.difficulty.slice(1)} html={obj.html} id={obj.id} description={obj.desc}/>
                    })
                    :
                    <h1 className="no-chall">No challenges under these restrictions. <br /> <a href="https://github.com/UltimatePro-Grammer/LearnWhiteHat" rel="noopener noreferrer" target="_blank">Contribute some?</a></h1>
                :
                <h1 className="no-chall">Loading...</h1>
            }
        </section>
    )
}
    

export default Content;