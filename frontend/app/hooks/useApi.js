import { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(true);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    setError(!response.ok);
    setData(response.data);
    console.log("NEW DATA HAS BEEN REQUESTED, THE DATA IS >>> ", data);
    return response;
  };

  return {
    data,
    error,
    loading,
    request,
  };
};
