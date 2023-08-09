import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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

function App() {
      const [skills, setSkills] = useState(startingSkills);
      const [showTodos, setShowTodos] = useState(true);

      function showTodosClickHandler(evt) {
          setShowTodos(value => {
              if (value)
                  evt.target.innerText = "Show Todos";
              else
                  evt.target.innerText = "Hide Todos";
              return !value;
          });

      }

  return (
        <div className="App">
            <button onClick={showTodosClickHandler}>Hide Todos</button>
            <h1>React Dev Skills</h1>
            {showTodos && <SkillList items={skills}/>}
            <NewSkillForm />
        </div>
  );
}

export default App;
