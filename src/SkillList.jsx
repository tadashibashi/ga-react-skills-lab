import SkillListItem from "./SkillListItem"
import "./SkillList.css";

export default function SkillList({items}) {
    return (
        <ul className="SkillList border-rounded-1 border-secondary p-1">
            {
                items.map((item, i) => {
                    return <SkillListItem name={item.name.toUpperCase()} level={item.level} key={"skill:" + item.name + i} number={i + 1} />
                })
            }
        </ul>
    );
}
