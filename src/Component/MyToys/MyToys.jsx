import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../AuthProvider/AuthProviders';
import Toys from '../AllToys/Toys/Toys';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyToys = () => {
  const [myToys, setMyToys] = useState([]);
  const { user } = useContext(authContext);
  console.log(myToys);
  const handleDelete = (id) => {
    fetch(`https://toys-car-server-sage.vercel.app/toy/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remaining = myToys.filter((toy) => toy._id != id);
          setMyToys(remaining);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Toy deleted successfully',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    console.log(id);
  };
  const handleUpdate = (id) => {
    console.log(id);
  };

  useEffect(() => {
    fetch(`https://toys-car-server-sage.vercel.app/toys?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [user]);

  return (
    <div>
      {myToys.slice(0, 20).map((toy) => (
        <Toys
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
          key={toy._id}
          toy={toy}
        >
          <>
            <td>
              <Link to={`/update/${toy._id}`}>
                <button className="btn btn-primary">Update</button>
              </Link>
            </td>
            <td>
              <button
                className="btn btn-primary"
                onClick={() => handleDelete(toy._id)}
              >
                Delete
              </button>
            </td>
          </>
        </Toys>
      ))}
    </div>
  );
};

export default MyToys;
