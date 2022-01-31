import Banner from "./components/banner";
import Header from "./components/header";
import gsap from "gsap";
import "./styles/App.scss";
import { useEffect, useRef } from "react";
import Cases from "./components/cases";
import IntroOverlay from "./components/introOverlay";

function App() {
    const title = useRef(null);

    useEffect(() => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);

        // prevent flashing
        gsap.to("body", 0, { css: { visibility: "visible" } });

        // timeline
        const tl = gsap.timeline();
        // tl.from(title.current, { duration: 2, opacity: 0, y: 70 });
        tl.from(".line span", {
            duration: 1.8,
            y: 100,
            ease: "power4.out",
            delay: 1,
            skewY: 7,
            stagger: {
                amount: 0.3,
            },
        })
            .to(".overlay-top", { duration: 1.6, height: 0, ease: "expo.inOut", stagger: 0.4 })
            .to(".overlay-bottom", {
                duration: 1.6,
                width: 0,
                ease: "expo.inOut",
                delay: -0.8,
                stagger: {
                    amount: 0.4,
                },
            })
            .to(".intro-overlay", { duration: 0, css: { display: "none" } })
            .from(".case-image img", {
                duration: 1.6,
                scale: 1.4,
                ease: "expo.inOut",
                delay: -2,
                stagger: { amount: 0.4 },
            });
    }, []);
    return (
        <div className="App">
            <IntroOverlay />
            <Header />
            <Banner title={title} />
            <Cases />
        </div>
    );
}

export default App;
