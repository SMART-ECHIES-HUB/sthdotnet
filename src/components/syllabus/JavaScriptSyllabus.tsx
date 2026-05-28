import "./JavaScriptSyllabus.css";

const syllabus = [
    {
        title: "JavaScript Fundamentals",
        items: [
            "Data Types (Primitive & Non-Primitive)",
            "Variables: var, let, const",
            "Scope & Lexical Environment",
            "Hoisting",
            "== vs ===",
            "Execution Context",
            "Call Stack",
        ],
    },
    {
        title: "Functions & Core Concepts",
        items: [
            "Function Declarations vs Expressions",
            "First-Class Functions",
            "Higher-Order Functions",
            "Closures",
            "Currying",
            "Unary Functions",
            "Private Variables",
        ],
    },
    {
        title: "Objects & Prototypes",
        items: [
            "Object Creation Methods",
            "Prototypal Inheritance",
            "Prototype Chain",
            "this Keyword",
            "call, apply, bind",
            "Shallow Copy vs Deep Copy",
        ],
    },
    {
        title: "Asynchronous JavaScript",
        items: [
            "Callbacks",
            "Callback Hell",
            "Promises",
            "Promise Chaining",
            "Async / Await",
            "Event Loop",
            "Microtasks vs Macrotasks",
            "Fetch API",
            "Error Handling (try / catch)",
        ],
    },
    {
        title: "Arrays & Functional Programming",
        items: [
            "Array Methods: map, filter, reduce",
            "forEach vs map",
            "Immutability",
            "Functional Programming Concepts",
        ],
    },
    {
        title: "DOM & Browser APIs",
        items: [
            "DOM Manipulation",
            "Event Bubbling",
            "Event Capturing",
            "Event Delegation",
            "localStorage",
            "sessionStorage",
            "Browser Compatibility",
            "Feature Detection",
        ],
    },
    {
        title: "Modern JavaScript (ES6+)",
        items: [
            "Arrow Functions",
            "Destructuring",
            "Spread Operator",
            "Rest Operator",
            "Template Literals",
            "Default Parameters",
            "Modules (import / export)",
        ],
    },
    {
        title: "Advanced JavaScript Concepts",
        items: [
            "Generators (function*)",
            "Yield Keyword",
            "Event-Driven Programming",
            "Client-Side Rendering",
            "Server-Side Rendering",
            "CORS",
            "WebSockets",
        ],
    },
    {
        title: "Performance & Best Practices",
        items: [
            "Memory Management",
            "Garbage Collection",
            "Avoiding Memory Leaks",
            "Code Optimization",
            "Clean Code Principles",
        ],
    },
    {
        title: "Interview Preparation",
        items: [
            "Output-Based Questions",
            "Common Interview Questions",
            "Real-World Scenarios",
            "Debugging Techniques",
            "Problem-Solving Patterns",
        ],
    },
];

export default function JavaScriptSyllabus() {
    return (
        <div className="syllabus-container">
            {/* <h1 className="main-title">JavaScript Syllabus</h1> */}

            <div className="card-grid">
                {syllabus.map((section, index) => (
                    <div className="syllabus-card" key={index}>
                        <h2>{section.title}</h2>
                        <ul>
                            {section.items.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
