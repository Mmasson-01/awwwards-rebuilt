import React from "react";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";
import { ReactComponent as LeftArrow } from "../assets/arrow-left.svg";

const caseStudies = [
    {
        id: 1,
        subtitle: "Curology",
        title: "A custom formula for your skin's unique needs",
        img: "curology-min",
    },
    {
        id: 2,
        subtitle: "Y Space",
        title: "A unique concept for your space",
        img: "yourspace-min",
    },
    {
        id: 3,
        subtitle: "Lumin",
        title: "A super nice lumina",
        img: "lumin-min",
    },
];

export default function Cases() {
    return (
        <section className="cases">
            <div className="container-fluid">
                <div className="cases-navigation">
                    <div className="cases-arrow prev disabled">
                        <LeftArrow />
                    </div>
                    <div className="cases-arrow next">
                        <RightArrow />
                    </div>
                </div>
                <div className="row">
                    {caseStudies.map((caseItem) => (
                        <div className="case" key={caseItem.id}>
                            <div className="case-details">
                                <span>{caseItem.subtitle}</span>
                                <h2>{caseItem.title}</h2>
                            </div>
                            <div className="case-image">
                                <img src={require(`../assets/${caseItem.img}.png`)} alt={caseItem.title} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
