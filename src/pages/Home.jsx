import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => {
          setUsers(data);
          setLoading(false);
        });
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <p>There is something wrong !......</p>;
  }
  if (error) {
    return <p> {error}</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
      {users.map(
        (user) => (
          <Card key={user.id} name={user.name} email={user.email} />
        )
        // <li key={user.id}> {user.name} - {user.email}</li>
      )}
    </div>
  );
};

export default Home;
