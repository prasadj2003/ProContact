import React from 'react';

function Card(props) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-4 max-w-sm mx-auto">
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">{props.name}</h1>
      <h3 className="text-gray-600 mb-4">{props.description}</h3>
      <div className="flex justify-between">
        <a href={props.linkedin} target="_blank" rel="noreferrer" className="w-full mr-2">
          <button className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out">
            LinkedIn
          </button>
        </a>
        <a href={props.github} target="_blank" rel="noreferrer" className="w-full ml-2">
          <button className="w-full bg-gray-800 text-white font-bold py-2 px-4 rounded hover:bg-gray-900 transition duration-300 ease-in-out">
            GitHub
          </button>
        </a>
      </div>
    </div>
  );
}

export default Card;
