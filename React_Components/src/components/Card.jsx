import React from "react";

const Card = (props) => {
  console.log(props);
  return (
    <div className="bg-white text-black box-border m-5 p-6 text-center  rounded inline-block w-80 h-800 ">
      <img className="mb-3 w-32 h-32 object-cover rounded border m-auto " src={props.photo} alt=""></img>
      <h1 className="text-2xl font-semibold mb-4">{props.username}</h1>
      <h1 className="text-xl font-semibold text-blue-300">{props.prof}</h1>
      <h2 className="text-l font-medium">
        {props.city} {props.age}{" "}
      </h2>
      <button className="mt-4 bg-emerald-700 text-white px-4 py-2 rounded font-medium">
        Add Friend
      </button>
    </div>
  );
};

export default Card;
