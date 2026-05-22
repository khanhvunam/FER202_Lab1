import { useState } from "react";
import "./App.css";
import StudentCard from "./StudentCard";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [student, setStudent] = useState({
    avatar: (
      <img
        src="src/assets/smile.png"
        alt="avatar"
        className="avatar"
      />
    ),
    fullName: "Vu Nam Khanh",
    studentID: "HE205101",
    className: "SE2009",
    major: "Software Engineering",
    hobbies: ["Singing", "Studying languages"],
    status: "Offline",
  });

  function handleStatus() {
    setStudent(prev => {
      return {...prev, status: prev.status == "Online" ? "Offline" : "Online"};
    })
  }

  const [likes, setLikes] = useState(0);

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <StudentCard
        student={student}
        likes={likes}
        darkMode={darkMode}
        setLikes={setLikes}
        handleStatus={handleStatus}
        setDarkMode={setDarkMode}
      />
    </div>
  );
}

export default App;