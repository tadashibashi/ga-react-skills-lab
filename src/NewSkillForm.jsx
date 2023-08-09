import "./NewSkillForm.css";

export default function NewSkillForm() {
    return (
        <form className="border-rounded-1 border-secondary">

            <div className="input-group">
                <label className="color-primary" htmlFor="id_skill">Skill</label>
                <input id="id_skill" name="skill" className="border-secondary border-rounded-1"/>
            </div>

            <div className="input-group">
                <label className="color-primary" htmlFor="id_level">Level</label>
                <select id="id_level" name="level" className="border-secondary border-rounded-1">
                    <option key="level-opt-1">1</option>
                    <option key="level-opt-2">2</option>
                    <option key="level-opt-3">3</option>
                    <option key="level-opt-4">4</option>
                    <option key="level-opt-5">5</option>
                </select>
            </div>


            <input className="btn-primary color-light border-rounded-1 border-none p-1" type="submit" value="ADD SKILL" />
        </form>
    );
}
