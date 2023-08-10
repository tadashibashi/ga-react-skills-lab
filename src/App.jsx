import React, {createContext, useState} from 'react'
import './App.css'

import SkillList from "./SkillList";
import NewSkillForm from "./NewSkillForm";

const startingSkills = [
    {
        name: "html",
        level: 2,
    },
    {
        name: "css",
        level: 2,
    },
    {
        name: "typescript",
        level: 3,
    }
];

export const SkillsContext = createContext(null);

export default function App() {
    const [skills, setSkills] = useState(startingSkills);
    const [showTodos, setShowTodos] = useState(true);

    return (
        <div className="App">
            <button onClick={() => setShowTodos(!showTodos)}>
                {showTodos ? "Hide Todos" : "Show Todos"}
            </button>

            <h1>React Dev Skills</h1>
            {showTodos &&  <SkillList items={skills} /> }

            <SkillsContext.Provider value={{skills, setSkills}} >
                <NewSkillForm />
            </SkillsContext.Provider>
        </div>
    );
}
