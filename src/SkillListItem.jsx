import "./SkillListItem.css";

export default function SkillListItem({name, level, number}) {
    return <li className="SkillListItem"><span>{number}. </span><span className="skill-name color-primary">{name}</span><span className="bg-primary border-rounded-4 color-light p-1">LEVEL {level}</span></li>
}