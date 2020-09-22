import Dexie from "dexie"
const db = new Dexie("challenges") as challenges;
db.version(1).stores({
    challenges: `++id, title, difficulty, genre, completed, *tags`
});
db.on("ready", ()=>{
    // modified slightly from the ajax example on https://dexie.org/docs/Dexie/Dexie.on.populate.html 
    return db.challenges.count((count: number)=>{
        return new Promise((resolve)=>{
            if (count > 0) {
                console.log("Already populated");
                resolve();
            } else {
                console.log("Database is empty. Populating from ajax call...");
                fetch("/challenges/all.json")
                .then(response=>response.json())
                .then((data: fetchedJson[])=>{
                    console.log("Calling bulkAdd() to insert objects...");
                    return db.challenges.bulkAdd(data.map((obj: fetchedJson)=>{return {completed: false, ...obj}}) as ChallengeTable[]);
                }).then(()=>{
                    console.log ("Done populating challenges.");
                    resolve();
                });
            }
        });
    });
});
db.open().catch((error: Error)=>{
    // If the processing above fails
    console.error(error.stack || error);
});
export default db;

// typescript stuff
type fetchedJson = {
    title: string,
    desc: string,
    tags: string[],
    html: string,
    difficulty: string,
    genre: string
}
export class challenges extends Dexie {
    challenges: Dexie.Table<ChallengeTable, number>
    constructor() {
        super("challenges");
        db.version(1).stores({
            challenges: `++id, title, difficulty, genre, completed, *tags`
        });
        this.challenges = this.table("challenges");
    }
}
export interface ChallengeTable {
    id: number;
    title: string;
    desc: string;
    difficulty: string;
    genre: string;
    tags: string[];
    html: string;
    completed: boolean;
}