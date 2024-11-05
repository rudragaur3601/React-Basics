import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [username, setusername] = useState('');
  /**
   * Handles the form Submission
   * @param {Event} e - the event triggered by form submission
   */
  const submitHandler = (e) => {
    e.preventDefault(); 
    console.log(`Username : ${username} "Submitted"`);
    setusername('')
  };
  return (
    <div>
      
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
        value={username}
          onChange={(e)=>{
            setusername(e.target.value)

            }}
          className="border px-4 py-3 font-semibold rounded text-xl m-5"
          type="text"
          placeholder="Enter your name"
        ></input>
        <button className="px-4 py-3 m-5 text-xl text-white font-semibold bg-green-600 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
