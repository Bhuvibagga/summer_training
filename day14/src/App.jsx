import { useState } from "react";
import "./App.css";

function App() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [success, setSuccess] = useState(false);

  const [submittedName, setSubmittedName] = useState("");

  const users = [
    {
      id: 1,
      name: "Vaibhav Mehta",
      email: "vaibhav@gmail.com"
    },
    {
      id: 2,
      name: "Rashika Sharma",
      email: "rashika@gmail.com"
    },
    {
      id: 3,
      name: "Aisha Shah",
      email: "aisha@gmail.com"
    },
    {
      id: 4,
      name: "Armaan Verma",
      email: "armaan@gmail.com"
    }
  ];

  function handleChange(event) {

    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });

  }

  function handleSubmit(event) {

    event.preventDefault();

    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.password === ""
    ) {
      alert("All fields are required");
      return;
    }

    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }

    setSubmittedName(formData.name);

    setSuccess(true);

    setFormData({
      name: "",
      email: "",
      password: ""
    });

  }

  return (
    <div className="container">

      <h1>User Registration Form</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit">
          Register
        </button>

      </form>

      {success && (

        <div className="success-card">

          <h2>Registration Successful</h2>

          <p>Welcome, {submittedName}</p>

        </div>

      )}

      <h2>Registered Users</h2>

      <div className="users">

        {users.map((user) => (

          <div
            key={user.id}
            className="user-card"
          >

            <h3>{user.name}</h3>

            <p>{user.email}</p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default App;