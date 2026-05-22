function StudentCard({
  student,
  likes,
  darkMode,
  setLikes,
  handleStatus,
  setDarkMode,
}) {
  return (
    <div className="card">
      <div className="banner"></div>

      <div className="avatar-wrapper">
        {student.avatar}

        <span
          className={
            student.status === "Online"
              ? "status-dot online"
              : "status-dot offline"
          }
        ></span>
      </div>

      <div className="card-body">
        <h1>{student.fullName}</h1>

        <div
          className={
            student.status === "Online"
              ? "status-badge online"
              : "status-badge offline"
          }
        >
          {student.status}
        </div>

        <div className="info-box">
          <p>
            <strong>Student ID:</strong> {student.studentID}
          </p>

          <p>
            <strong>Class:</strong> {student.className}
          </p>

          <p>
            <strong>Major:</strong> {student.major}
          </p>
        </div>

        <div className="hobby-section">
          <h3>Hobbies</h3>

          <div className="hobby-list">
            {student.hobbies.map((hobby, index) => (
              <span key={index} className="hobby-tag">
                {hobby}
              </span>
            ))}
          </div>
        </div>

        <div className="like-section">
          <h2>Total Likes: {likes}</h2>
        </div>

        <div className="button-group">
          <button onClick={() => setLikes(likes + 1)}>
            Like
          </button>

          <button onClick={handleStatus}>
            {student.status}
          </button>

          <button
            onClick={() =>
              setDarkMode(!darkMode)
            }
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;