import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';


export default function Landing() {


    // State variables for form inputs
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');
  const [isSubmitted, setIssubmitted] = useState(false);

  const [allCards, setAllCards] = useState([]);
  async function send(e) {
    e.preventDefault(); // Prevent default form submission

    try {
      const result = await axios.post("http://localhost:3000/add", {
        name,
        description,
        linkedin,
        github,
      });

      console.log(result.data); // Handle success
      setIssubmitted(true)
    } catch (error) {
      console.error(error); // Handle error
    }

    // setting the input fields empty after form gets submitted
    setDescription('')
    setName('')
    setLinkedin('')
    setGithub('')
    setIssubmitted(false)
  }

  useEffect(() => {
    async function fetchCards() {
      try {
        const result = await axios.get("http://localhost:3000/get");
        setAllCards(result.data); 
      } catch (error) {
        console.error(error); 
      }
    }

    fetchCards();
  }, [allCards]);
  return (
    <>
      <form onSubmit={send}>
        {" "}
        {/* Changed to onSubmit */}
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div className="p-4">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="p-4">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <input
              type="text"
              id="description"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div className="p-4">
            <label
              htmlFor="linkedin"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              LinkedIn
            </label>
            <input
              type="url"
              id="linkedin"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="https://www.linkedin.com/in/username"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
              required
            />
          </div>
          <div className="p-4">
            <label
              htmlFor="github"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              GitHub
            </label>
            <input
              type="url"
              id="github"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="https://github.com/username"
              value={github}
              onChange={(e) => setGithub(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </form>
      <div className="grid grid-cols-4 gap-4">
        {allCards.map((card) => (
          <Card
            name={card.name}
            description={card.description}
            linkedin={card.linkedin}
            github={card.github}
          />
        ))}
      </div>
    </>
  );
}
