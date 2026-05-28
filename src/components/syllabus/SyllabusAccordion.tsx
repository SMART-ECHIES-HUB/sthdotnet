import { useState } from "react";
import "./SyllabusAccordion.css";

export default function Accordion({ title, children }) {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // Convert children to array
    const childrenArray = Array.isArray(children) ? children : [children];

    return (
        <div className="accordion-container">

            {childrenArray.map((child, index) => (
                <div className="accordion-card" key={index}>

                    <div
                        className="accordion-header"
                        onClick={() => toggle(index)}
                    >
                        <h2>{title}</h2>
                        <span>{activeIndex === index ? "−" : "+"}</span>
                    </div>

                    {activeIndex === index && (
                        <div className="accordion-content">{child}</div>
                    )}
                </div>
            ))}
        </div>
    );
}
