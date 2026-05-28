import { useEffect } from "react";
import "./interview-prep-js.css";

const topics = [
    {
        title: "Execution Context & Call Stack",
        core: [
            "Execution Context (Global, Function, Eval)",
            "Call Stack mechanism (LIFO)",
            "Phases: Creation & Execution",
        ],
        questions: [
            "Explain the order of execution in nested function calls.",
            "What happens under the hood when calling a function with new?",
            "How does the call stack handle recursion?",
            "Predict output for nested function calls with setTimeout.",
        ],
    },
    {
        title: "Hoisting & Temporal Dead Zone",
        core: [
            "var hoisting (initialized with undefined)",
            "let & const hoisting (TDZ)",
            "Function declaration vs expression hoisting",
        ],
        questions: [
            "Predict output: console.log(a); var a=5; console.log(b); let b=10;",
            "Explain difference between var, let, and const hoisting.",
            "Why accessing let/const before declaration throws ReferenceError?",
            "Function declarations vs expressions hoisting examples.",
        ],
    },
    {
        title: "Scope, Lexical Environment & Closures",
        core: [
            "Global, Function, Block Scope",
            "Lexical environment & scope chain",
            "Closures: function remembering outer environment",
        ],
        questions: [
            "Implement a counter using closures.",
            "Predict output: for(var i=0;i<3;i++){ setTimeout(()=>console.log(i),1000); }",
            "How can closures lead to memory leaks?",
            "Explain private variables using closures.",
        ],
    },
    {
        title: "this Keyword (All Cases)",
        core: [
            "Default, Implicit, Explicit, and new binding",
            "Arrow functions & lexical this",
            "this in classes",
        ],
        questions: [
            "Predict output for a mix of arrow and normal functions using this.",
            "Implement a class method that retains correct this in a callback.",
            "Difference between bind, call, and apply.",
            "Why arrow functions cannot be used as constructors?",
        ],
    },
    {
        title: "Event Loop (Microtask vs Macrotask)",
        core: [
            "Call Stack vs Task Queue",
            "Microtasks: Promises, queueMicrotask",
            "Macrotasks: setTimeout, setInterval, I/O",
        ],
        questions: [
            "Predict output: console.log('Start'); setTimeout(()=>console.log('Timeout'),0); Promise.resolve().then(()=>console.log('Promise')); console.log('End');",
            "Explain microtask vs macrotask and give examples.",
            "What happens if multiple microtasks and macrotasks are queued?",
            "Explain starvation of macrotasks in heavy microtask loops.",
        ],
    },
    {
        title: "Async JS (Callbacks, Promises, Async/Await)",
        core: [
            "Callbacks & callback hell",
            "Promises & chaining",
            "Async/Await syntax and error handling",
        ],
        questions: [
            "Convert a callback function into a promise-based function.",
            "Explain async/await behavior with examples.",
            "Difference between Promise.all and Promise.race.",
            "Handle errors in async/await using try/catch.",
        ],
    },
    {
        title: "Memory Management & Garbage Collection",
        core: [
            "Automatic memory allocation & deallocation",
            "Mark-and-sweep algorithm",
            "Memory leaks & optimization strategies",
        ],
        questions: [
            "Explain how garbage collection works in JS.",
            "Identify potential memory leaks in closures or DOM references.",
            "How to avoid memory leaks in large web apps?",
            "What is weak map and how does it help with memory?",
        ],
    },
    {
        title: "Prototypes & Inheritance",
        core: [
            "Prototype objects and __proto__",
            "Constructor functions vs ES6 classes",
            "Inheritance chain",
        ],
        questions: [
            "Explain prototype chain and inheritance in JS.",
            "Difference between class-based and prototype-based inheritance.",
            "How to extend objects without modifying original prototype?",
            "What is Object.create and when to use it?",
        ],
    },
    {
        title: "Objects & Arrays",
        core: [
            "Object & array creation, mutation",
            "Shallow copy vs deep copy",
            "Common methods: Object.assign, spread, JSON.parse/stringify",
        ],
        questions: [
            "Explain shallow vs deep copy in objects and arrays.",
            "How to avoid mutation when copying arrays or objects?",
            "Difference between Object.assign and spread operator.",
            "Clone a nested object safely.",
        ],
    },
    {
        title: "Functions (Types, Currying, Higher-Order)",
        core: [
            "Function declarations, expressions, arrow functions",
            "Higher-order functions & callbacks",
            "Currying & partial application",
        ],
        questions: [
            "Explain higher-order functions with examples.",
            "Implement currying for a simple add function.",
            "Difference between function declaration and expression.",
            "Use arrow functions to shorten callbacks.",
        ],
    },
    {
        title: "ES6+ Features",
        core: [
            "let/const, arrow functions",
            "Destructuring, spread/rest operators",
            "Template literals, default params, modules",
        ],
        questions: [
            "Explain difference between var, let, and const.",
            "Demonstrate destructuring, spread, and rest operators.",
            "Write default parameter examples.",
            "Explain template literals with expressions.",
        ],
    },
    {
        title: "Error Handling",
        core: [
            "try, catch, finally",
            "Throwing custom errors",
            "Promise & async/await error handling",
        ],
        questions: [
            "Explain try/catch/finally blocks.",
            "Difference between synchronous and asynchronous error handling.",
            "How to create custom error classes?",
            "Handle errors in Promise chains.",
        ],
    },
    {
        title: "Performance & Optimization",
        core: [
            "Execution time optimization",
            "Memory optimization",
            "Debouncing, throttling, lazy loading",
        ],
        questions: [
            "Identify common performance bottlenecks in JS.",
            "Techniques for memory and execution optimization.",
            "Explain debouncing and throttling with examples.",
            "Lazy load images or modules in web apps.",
        ],
    },
    {
        title: "React Internals & Rendering",
        core: [
            "Reconciliation algorithm",
            "Virtual DOM vs Real DOM",
            "React Fiber architecture",
            "Batching of state updates",
        ],
        questions: [
            "How does React decide what to re-render?",
            "Explain reconciliation with an example.",
            "What problem does React Fiber solve?",
            "How does automatic batching work in React 18?",
        ],
    },
    {
        title: "Hooks – Advanced Concepts",
        core: [
            "Rules of Hooks",
            "useEffect vs useLayoutEffect",
            "useCallback and referential equality",
            "useMemo and expensive computations",
        ],
        questions: [
            "Why are hooks required to be called in the same order?",
            "When should useLayoutEffect be preferred?",
            "How does useCallback prevent re-renders?",
            "When does useMemo become an anti-pattern?",
        ],
    },
    {
        title: "State Management",
        core: [
            "Lifting state up",
            "Controlled vs uncontrolled components",
            "Context API limitations",
            "External state libraries",
        ],
        questions: [
            "When should state be lifted up?",
            "What problems does Context API solve and not solve?",
            "Compare Redux, Zustand, and Recoil.",
            "How do you structure global state in large apps?",
        ],
    },
    {
        title: "Rendering Patterns",
        core: [
            "Conditional rendering patterns",
            "Render props",
            "Higher-order components (HOC)",
            "Compound component pattern",
        ],
        questions: [
            "Compare render props and HOC patterns.",
            "When should you use compound components?",
            "What problems do HOCs solve?",
            "How do you avoid prop collisions in HOCs?",
        ],
    },
    {
        title: "Concurrent React",
        core: [
            "Concurrent rendering",
            "useTransition",
            "useDeferredValue",
            "Suspense for data fetching",
        ],
        questions: [
            "What is concurrent rendering in React?",
            "Difference between useTransition and useDeferredValue.",
            "How does Suspense pause rendering?",
            "How does React handle race conditions?",
        ],
    },
    {
        title: "Error Handling",
        core: [
            "Error boundaries",
            "Error handling in render phase",
            "Async error handling",
            "Global error logging",
        ],
        questions: [
            "Why can’t hooks catch render errors?",
            "How do error boundaries work internally?",
            "How do you handle async errors in React?",
            "Design a global error handling strategy.",
        ],
    },
    {
        title: "Advanced APIs & Patterns",
        core: [
            "forwardRef",
            "useImperativeHandle",
            "Portals",
            "Custom hooks architecture",
        ],
        questions: [
            "When should forwardRef be used?",
            "Explain useImperativeHandle with a real example.",
            "What problems do portals solve?",
            "How do you design scalable custom hooks?",
        ],
    },
    {
        title: "React Architecture",
        core: [
            "Separation of concerns",
            "Atomic design",
            "Feature-based folder structure",
            "Scalable React applications",
        ],
        questions: [
            "How do you structure a large React project?",
            "Container vs presentational components.",
            "What is atomic design in React?",
            "How do you enforce consistency across teams?",
        ],
    },
    {
        title: "Testing & Production Readiness",
        core: [
            "Unit testing vs integration testing",
            "Testing hooks",
            "Mocking APIs",
            "Production best practices",
        ],
        questions: [
            "How do you test custom hooks?",
            "What should not be tested in React?",
            "How do you mock APIs in React tests?",
            "What are React production best practices?",
        ],
    },
    
    {
        title: "Performance Optimization",
        core: [
            "React.memo",
            "Avoiding unnecessary re-renders",
            "Code splitting",
            "List virtualization",
        ],
        questions: [
            "How does React.memo work internally?",
            "Why does useMemo sometimes not improve performance?",
            "What causes unnecessary re-renders?",
            "How does virtualization improve rendering performance?",
        ],
    },

];

export default function JavaScriptSyllabus() {
    useEffect(() => {
        const cards = document.querySelectorAll(".syllabus-card");

        const animateCard = async (card) => {
            const items = card.querySelectorAll(".questions li");

            for (let li of items) {
                const spans = li.querySelectorAll("span");

                for (let span of spans) {
                    span.classList.add("highlighted");

                    // remove highlight after delay
                    setTimeout(() => {
                        span.classList.remove("highlighted");
                    }, 10000);

                    await new Promise((r) => setTimeout(r, 1)); // typing speed
                }

                await new Promise((r) => setTimeout(r, 1000)); // gap between questions
            }
        };

        setInterval(() => {
            // 🔥 run ALL cards at the same time
            cards.forEach((card) => {
                animateCard(card);
            });
        }, 10000);

    }, []);



    return (
        <div className="syllabus-container">
            {/* <h1>🔥 JavaScript Interview Syllabus</h1> */}
            <div className="card-grid">
                {topics.map((topic, index) => (
                    <div className="syllabus-card" key={index}>
                        <h2>
                            <span className="pointer">&#x1F449;</span>
                            {topic.title}
                        </h2>

                        <h3>🔹 Core Concepts</h3>
                        <ul>
                            {topic.core.map((c, i) => (
                                <li key={i}>{c}</li>
                            ))}
                        </ul>

                        <h3>🔹 Interview Questions</h3>
                        <ul className="questions">
                            {topic.questions.map((q, i) => (
                                <li key={i} className="highlight">
                                    {[...q].map((c, idx) => (
                                        <span key={idx}>{c}</span>
                                    ))}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
