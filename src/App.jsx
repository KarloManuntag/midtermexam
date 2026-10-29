import { useState } from 'react'
import './App.css'

function App() {
  const STUDENT_NAME = "KARLO MANUNTAG"
  const SECTION = "BSIT- DA3A"
  const SUBJECT_CODE = "C-PCIT9"

  const [display, setDisplay] = useState("10 Things That Require Zero Talent")

  // Arranged in the calculator keypad layout matching the screenshot
  const keypad = [
    { label: "7", text: "7 - Being Coachable" },
    { label: "8", text: "8 - Doing A Little Extra" },
    { label: "9", text: "9 - Being Prepared" },
    { label: "4", text: "4 - Having A Positive Attitude" },
    { label: "5", text: "5 - Being Passionate" },
    { label: "6", text: "6 - Using Good Body Language" },
    { label: "1", text: "1 - Being On Time" },
    { label: "2", text: "2 - Making An Effort" },
    { label: "3", text: "3 - Being High Energy" },
    { label: "NAME", text: STUDENT_NAME },
    { label: "0", text: "0 - Having A Strong Work Ethic" },
    { label: "SUBJ", text: SUBJECT_CODE },
  ]

  return (
    <div className="app-viewport">
      <div className="card">
        {/* Header */}
        <h1 className="header-title">
          {STUDENT_NAME} - {SECTION}
        </h1>

        {/* Display Banner */}
        <div className="display-box">
          <p>{display}</p>
        </div>

        {/* Keypad Grid */}
        <div className="keypad">
          {keypad.map((item) => (
            <button
              key={item.label}
              onClick={() => setDisplay(item.text)}
              className="keypad-btn"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App