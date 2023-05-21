import React, { useEffect, useState } from 'react';
import TabToy from '../TabToy/TabToy';

const ShopCategory = () => {
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState('Sports Car');

  useEffect(() => {
    fetch('https://toys-car-server-sage.vercel.app/toys')
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const filteredToys = toys.filter((toy) => toy.sub === activeTab);

  const handleTabClick = (category) => {
    setActiveTab(category);
  };

  return (
    <div className="mt-20 mb-10">
      <div className="mt-5 text-center">
        <h1 className="text-3xl font-semibold mb-3">Shop Category section </h1>
        <p className="text-xl  mb-3">
          Shop Cars is filtered by using subcategory in which tab we will press
          that tab category items will be displayed.
        </p>
      </div>
      <div className="text-center mt-15">
        <div className="btn-group">
          <button
            className={`btn ${activeTab === 'Sports Car' ? 'btn-active' : ''}`}
            onClick={() => handleTabClick('Sports Car')}
          >
            Sports Car
          </button>
          <button
            className={`btn ${
              activeTab === 'Mini Police Car' ? 'btn-active' : ''
            }`}
            onClick={() => handleTabClick('Mini Police Car')}
          >
            Mini Police Car
          </button>
          <button
            className={`btn ${activeTab === 'Regular Car' ? 'btn-active' : ''}`}
            onClick={() => handleTabClick('Regular Car')}
          >
            Regular Car
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-10 mt-10 mb-10 container mx-auto">
        {filteredToys.map((toy) => (
          <TabToy key={toy._id} toy={toy}></TabToy>
        ))}
      </div>
    </div>
  );
};

export default ShopCategory;
