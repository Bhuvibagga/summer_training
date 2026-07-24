import { useState, useEffect } from "react";
import "./App.css";
import ProfileCard from "./components/ProfileCard";

function App() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  const users = [
    {
      name: "Vrinda Mehta",
      role: "Frontend Developer",
      college: "BITS Pilani"
    },
    {
      name: "Rashika Sharma",
      role: "Data Scientist",
      college: "Symboisis Pune"
    },
    {
      name: "Aisha Shah",
      role: "Finance Analyst",
      college: "IIM Bangalore"
    },
    {
      name: "Armaan Verma",
      role: "Backend Developer",
      college: "IIT Mumabai"
    }
  ];

  return (
    <div className="container">

      <h1>REACT</h1> 

      <div className="counter">

        <h2>Counter: {count}</h2>

        <button
          onClick={() => setCount(count - 1)}
        >
          -
        </button>

        <button
          onClick={() => setCount(count + 1)}
        >
          +
        </button>

      </div>

      <h2>User Profiles</h2>

      <div className="grid">

        {users.map((user, index) => (

          <ProfileCard
            key={index}
            name={user.name}
            role={user.role}
            college={user.college}
          />

        ))}

      </div>

    </div>
  );
}

export default App;