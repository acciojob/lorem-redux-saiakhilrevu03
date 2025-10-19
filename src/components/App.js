import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLorem } from "./actions";

function App() {
  const dispatch = useDispatch();
  const { loading, title, body, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchLorem());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}

export default App;
