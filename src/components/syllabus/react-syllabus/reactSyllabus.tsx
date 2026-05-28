import "../JavaScriptSyllabus.css";

const reactSyllabus = [
    {
        title: "React Fundamentals",
        items: [
            "What is React & Why React",
            "SPA vs MPA",
            "Virtual DOM",
            "JSX",
            "React Folder Structure",
            "Rendering Elements",
        ],
    },
    {
        title: "Components & Props",
        items: [
            "Functional Components",
            "Class vs Functional Components",
            "Props",
            "Props Drilling",
            "Default Props",
            "Reusable Components",
        ],
    },
    {
        title: "State Management",
        items: [
            "useState Hook",
            "State vs Props",
            "Lifting State Up",
            "Controlled vs Uncontrolled Components",
        ],
    },
    {
        title: "Hooks in React",
        items: [
            "Rules of Hooks",
            "useEffect",
            "useContext",
            "useRef",
            "useMemo",
            "useCallback",
            "Custom Hooks",
        ],
    },
    {
        title: "Event Handling & Forms",
        items: [
            "Handling Events in React",
            "Synthetic Events",
            "Form Handling",
            "Form Validation",
        ],
    },
    {
        title: "Conditional Rendering",
        items: [
            "if / else Rendering",
            "Ternary Operator",
            "Logical && Operator",
            "Switch Case Rendering",
        ],
    },
    {
        title: "Lists & Keys",
        items: [
            "Rendering Lists",
            "Keys & Importance",
            "Optimizing List Rendering",
        ],
    },
    {
        title: "React Lifecycle & Effects",
        items: [
            "Component Lifecycle",
            "useEffect Dependencies",
            "Cleanup Functions",
        ],
    },
    {
        title: "Context & State Management",
        items: [
            "Context API",
            "useContext Hook",
            "Global State Management",
            "Introduction to Redux",
        ],
    },
    {
        title: "Routing",
        items: [
            "React Router",
            "BrowserRouter",
            "Routes & Route",
            "useParams",
            "useNavigate",
            "Protected Routes",
        ],
    },
    {
        title: "API Integration",
        items: [
            "Fetching Data",
            "Axios vs Fetch",
            "Loading & Error States",
            "Environment Variables",
        ],
    },
    {
        title: "Performance Optimization",
        items: [
            "React.memo",
            "useMemo",
            "useCallback",
            "Lazy Loading",
            "Code Splitting",
        ],
    },
    {
        title: "Styling in React",
        items: [
            "CSS & SCSS",
            "Inline Styles",
            "CSS Modules",
            "Styled Components",
            "Tailwind CSS",
        ],
    },
    {
        title: "Testing & Best Practices",
        items: [
            "Unit Testing Basics",
            "Jest Overview",
            "React Testing Library",
            "Best Practices",
            "Clean Code in React",
        ],
    },
    {
        title: "Build & Deployment",
        items: [
            "Production Build",
            "Environment Setup",
            "Deployment on Netlify / Vercel",
            "CI/CD Basics",
        ],
    },
    {
        title: "Interview Preparation",
        items: [
            "Common React Interview Questions",
            "Hooks Interview Questions",
            "Machine Coding Round",
            "Debugging React Apps",
            "Real-World Scenarios",
        ],
    },
];

export default function ReactSyllabus3D() {
    return (
        <div className="syllabus-container">
            {/* <h1 className="main-title">React JS Syllabus</h1> */}

            <div className="card-grid">
                {reactSyllabus.map((section, index) => (
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
