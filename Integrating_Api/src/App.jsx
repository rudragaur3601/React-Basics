import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list"); // data will be in the form of promises
    setData(response.data);
    console.log(data);
  };

  useEffect(() => {
    getData()
    
  }, [])
  
  return (
    <div className="p-5">
      <div className="p-5 m-5 bg-white">
        {data.map(function (elem, index) {
          return (
            <div
              key={index}
              className="text-black bg-blue-50 border m-1 flex items-center justify-between w-full px-6 py-6 rounded"
            >
              <img
                className="h-40 w-40 rounded object-cover"
                src={elem.download_url}
                alt="images"
              />
              <h1>{elem.author}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
