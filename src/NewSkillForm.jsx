import "./NewSkillForm.css";
import React, {useContext, useRef} from "react";
import {SkillsContext} from "./App.jsx";

export default function NewSkillForm() {

    // using a ref to keep track of form data: no special state validation needed
    const formData = useRef({name: "", level: "1"});
    // reference to name <input>, to reset on submit
    const nameInput = useRef();
    // function to add a skill to the list, passed from App
    const addSkill = useContext(SkillsContext);


    // handles changes for all inputs
    function handleInputChange(e) {
        // collect form data on the fly
        formData.current[e.target.name] = e.target.value;
    }


    // handles form submissions
    function handleSubmit(e) {
        // don't POST to "/"
        e.preventDefault();

        // ensure name is filled in
        if (!formData.current.name) return;

        // call addSkill from SkillsContext
        addSkill && addSkill({name: formData.current.name, level: formData.current.level});

        // clear form & formData for skill "name"
        nameInput.current.value = "";
        formData.current.name = "";
    }


    return (
        <form className="border-rounded-1 border-secondary" onSubmit={handleSubmit}>

            {/* Skill Name Input */}
            <div className="input-group">

                <label className="color-primary" htmlFor="id_skill">Skill</label>
                <input id="id_skill"
                       ref={nameInput}
                       name="name"
                       className="border-secondary border-rounded-1"
                       onChange={handleInputChange}
                       autoComplete="off"
                       required
                />
            </div>

            {/* Skill Level Input */}
            <div className="input-group">
                <label className="color-primary" htmlFor="id_level">Level</label>
                <select id="id_level"
                        name="level"
                        className="border-secondary border-rounded-1"
                        onChange={handleInputChange}>

                    <option key="level-opt-1">1</option>
                    <option key="level-opt-2">2</option>
                    <option key="level-opt-3">3</option>
                    <option key="level-opt-4">4</option>
                    <option key="level-opt-5">5</option>
                </select>
            </div>

            <input className="btn-primary color-light border-rounded-1 border-none p-1"
                   type="submit"
                   value="ADD SKILL"
                    />
        </form>
    );
}

