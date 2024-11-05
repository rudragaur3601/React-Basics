import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";

const App = () => {
  const users = [
    
    
    {
      name: "William Martinez",
      city: "Philadelphia",
      age: 45,
      profession: "Business Consultant",
      profilePhoto: "./public/images/sampleimg.jpg",
    },
    {
      name: "Sophia Rodriguez",
      city: "San Antonio",
      age: 29,
      profession: "Content Writer",
      profilePhoto: "./public/images/sampleimg.jpg",
    },
    {
      name: "Benjamin Lee",
      city: "San Diego",
      age: 32,
      profession: "Financial Analyst",
      profilePhoto: "./public/images/sampleimg.jpg",
    },
    {
      name: "Isabella Hernandez",
      city: "Dallas",
      age: 27,
      profession: "UX Designer",
      profilePhoto: "./public/images/sampleimg.jpg",
    },
    {
      name: "Lucas Wilson",
      city: "San Jose",
      age: 38,
      profession: "Network Administrator",
      profilePhoto: "./public/images/sampleimg.jpg",
    },
    {
      name: "William Martinez",
      city: "Philadelphia",
      age: 45,
      profession: "Business Consultant",
      profilePhoto: "./public/images/sampleimg.jpg",
    },
    {
      name: "Sophia Rodriguez",
      city: "San Antonio",
      age: 29,
      profession: "Content Writer",
      profilePhoto: "./public/images/sampleimg.jpg",
    },
    {
      name: "Benjamin Lee",
      city: "San Diego",
      age: 32,
      profession: "Financial Analyst",
      profilePhoto: "./public/images/sampleimg.jpg",
    },
  ];

  return (
    <div>
      <div className="p-10">
        {users.map(function (elem, index) {
          return (
            <Card
              key={index}
              photo={elem.profilePhoto}
              username={elem.name}
              age={elem.age}
              prof={elem.profession}
              city={elem.city}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
