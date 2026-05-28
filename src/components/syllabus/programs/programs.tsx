
export default function Programs() {
  // JavaScript Programs
  const jsPrograms = [
    {
      title: "Reverse a String",
      code: `const str = "Hello";
const reversed = str.split("").reverse().join("");
console.log(reversed); // "olleH"`,
    },
    {
      title: "Check Prime Number",
      code: `function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(isPrime(7)); // true`,
    },
    {
      title: "Fibonacci Series",
      code: `function fibonacci(n) {
  const series = [0, 1];
  for(let i=2; i<n; i++) {
    series[i] = series[i-1] + series[i-2];
  }
  return series;
}
console.log(fibonacci(7)); // [0,1,1,2,3,5,8]`,
    },
    {
      title: "Factorial of Number",
      code: `function factorial(n) {
  if(n === 0) return 1;
  return n * factorial(n-1);
}
console.log(factorial(5)); // 120`,
    },
    {
      title: "Palindrome Check",
      code: `function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}
console.log(isPalindrome("level")); // true`,
    },
    {
      title: "Find Largest Number in Array",
      code: `const arr = [10, 20, 5, 40];
const max = Math.max(...arr);
console.log(max); // 40`,
    },
    {
      title: "Remove Duplicates from Array",
      code: `const arr = [1,2,2,3,4,4];
const unique = [...new Set(arr)];
console.log(unique); // [1,2,3,4]`,
    },
    {
      title: "Sum of Array Elements",
      code: `const arr = [1,2,3,4];
const sum = arr.reduce((a,b) => a+b, 0);
console.log(sum); // 10`,
    },
    {
      title: "Count Vowels in String",
      code: `function countVowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
console.log(countVowels("hello world")); // 3`,
    },
    {
      title: "Flatten Array",
      code: `const arr = [1,[2,3],[4,[5]]];
const flat = arr.flat(Infinity);
console.log(flat); // [1,2,3,4,5]`,
    },
  ];

  // React JS Programs
  const reactPrograms = [
    {
      title: "Counter using useState",
      code: `import { useState } from 'react';
export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count+1)}>Increment</button>
    </div>
  );
}`,
    },
    {
      title: "Toggle Visibility",
      code: `import { useState } from 'react';
export default function Toggle() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <p>Hello World</p>}
    </div>
  );
}`,
    },
    {
      title: "Controlled Input",
      code: `import { useState } from 'react';
export default function ControlledInput() {
  const [value, setValue] = useState('');
  return (
    <input value={value} onChange={e => setValue(e.target.value)} />
  );
}`,
    },
    {
      title: "useEffect Timer",
      code: `import { useState, useEffect } from 'react';
export default function Timer() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setCount(c => c+1), 1000);
    return () => clearInterval(interval);
  }, []);
  return <h1>{count}</h1>;
}`,
    },
    {
      title: "Map List in JSX",
      code: `export default function NameList() {
  const names = ['Alice','Bob','Charlie'];
  return <ul>{names.map(n => <li key={n}>{n}</li>)}</ul>;
}`,
    },
    {
      title: "Conditional Rendering",
      code: `export default function Login({ isLoggedIn }) {
  return <div>{isLoggedIn ? <p>Welcome</p> : <p>Please Login</p>}</div>;
}`,
    },
    {
      title: "useRef Example",
      code: `import { useRef } from 'react';
export default function FocusInput() {
  const inputRef = useRef();
  return <input ref={inputRef} placeholder="Focus me" />;
}`,
    },
    {
      title: "Context API Example",
      code: `import { createContext, useContext } from 'react';
const ThemeContext = createContext('light');
export default function App() {
  const theme = useContext(ThemeContext);
  return <p>Theme: {theme}</p>;
}`,
    },
    {
      title: "useReducer Example",
      code: `import { useReducer } from 'react';
function reducer(state, action) {
  switch(action.type) {
    case 'increment': return state+1;
    default: return state;
  }
}
export default function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);
  return <button onClick={() => dispatch({type:'increment'})}>{count}</button>;
}`,
    },
    {
      title: "Simple Form Submit",
      code: `import { useState } from 'react';
export default function Form() {
  const [name, setName] = useState('');
  const handleSubmit = e => { e.preventDefault(); alert(name); };
  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e=>setName(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}`,
    },
  ];

  return (
    // <div>
    //   <div>
    //     {jsPrograms.map((p, i) => (
    //       <div key={i} title={p.title}>
    //         <pre>{p.code}</pre>
    //       </div>
    //     ))}
    //   </div>

    //   <div>
    //     {reactPrograms.map((p, i) => (
    //       <div key={i} title={p.title}>
    //         <pre>{p.code}</pre>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    <div className="syllabus-container">
            {/* <h1 className="main-title">JavaScript Syllabus</h1> */}

            <div className="card-grid">
                {jsPrograms.map((section, index) => (
                    <div className="syllabus-card" key={index}>
                        <h2>{section.title}</h2>
                        <ul>
                            <pre>{section.code}</pre>
                        </ul>
                    </div>
                ))}
            </div>
            <div className="card-grid">
                {reactPrograms.map((section, index) => (
                    <div className="syllabus-card" key={index}>
                        <h2>{section.title}</h2>
                        <ul>
                            <pre>{section.code}</pre>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
  );
}
