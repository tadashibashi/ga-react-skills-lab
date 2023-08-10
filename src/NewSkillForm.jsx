import "./NewSkillForm.css";
import React, {useContext, useState} from "react";
import {SkillsContext} from "./App.jsx";

export default function NewSkillForm() {

    const [skillName, setSkillName] = useState("");
    const [skillLevel, setSkillLevel] = useState("1");

    const {setSkills} = useContext(SkillsContext);

    function handleSkillInputChange(e) {
        setSkillName(e.target.value);
    }

    function handleSkillLevelChange(e) {
        setSkillLevel(e.target.value);
    }

    function handleSubmit(e) {
        if (!skillName) return;

        setSkills(lastSkills => {
            const skills = lastSkills.map(skill => ({name: skill.name, level: skill.level}) );
            skills.push({name: skillName, level: parseInt(skillLevel) });

            return skills;
        });

        setSkillName("");
    }

    return (
        <form className="border-rounded-1 border-secondary" onSubmit={e => {
            e.preventDefault();
            handleSubmit();
        }}>
            {/* Skill Name Input */}
            <div className="input-group">

                <label className="color-primary" htmlFor="id_skill">Skill</label>
                <input id="id_skill"
                       name="skill"
                       className="border-secondary border-rounded-1"
                       value={skillName}
                       onChange={handleSkillInputChange}/>
            </div>

            {/* Skill Level Input */}
            <div className="input-group">
                <label className="color-primary" htmlFor="id_level">Level</label>
                <select id="id_level"
                        name="level"
                        className="border-secondary border-rounded-1"
                        value={skillLevel}
                        onChange={handleSkillLevelChange}>

                    <option key="level-opt-1">1</option>
                    <option key="level-opt-2">2</option>
                    <option key="level-opt-3">3</option>
                    <option key="level-opt-4">4</option>
                    <option key="level-opt-5">5</option>
                </select>
            </div>

            <input className="btn-primary color-light border-rounded-1 border-none p-1"
                   type="button"
                   value="ADD SKILL"
                   onClick={handleSubmit} />
        </form>
    );
}

