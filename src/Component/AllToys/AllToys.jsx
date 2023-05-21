import React, { useContext, useEffect, useState } from 'react';
import Toys from './Toys/Toys';
import { authContext } from '../AuthProvider/AuthProviders';

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [filteredToys, setFilteredToys] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { user, loading } = useContext(authContext);

  useEffect(() => {
    fetch('https://toys-car-server-sage.vercel.app/toys')
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setFilteredToys(data);
      });
  }, []);

  const handleSearch = () => {
    if (toys.length === 0) {
      return;
    }

    const filteredToys = toys.filter((toy) =>
      toy.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredToys(filteredToys);
  };

  return (
    <div>
      <div className="flex justify-center mt-4 mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by name"
          className="border border-gray-300 rounded-l py-2 px-4"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-r"
        >
          Search
        </button>
      </div>

      {loading ? (
        <div className="text-center mt-10 mb-10">
          <progress className="progress w-56"></progress>
        </div>
      ) : (
        <>
          {filteredToys.map((toy) => (
            <Toys key={toy._id} toy={toy}></Toys>
          ))}
        </>
      )}
    </div>
  );
};

export default AllToys;
