import { useState, useEffect } from 'react';
import axios from 'axios';
import useInterval from '../hooks/useInterval';

const useHttp = (url, interval = null, dependencies = []) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState([]);

  const fetchData = () => {
    setIsLoading(true);
    // Fetch and return the data
    axios
      .get(url)
      .then(response => {
        setIsLoading(false);
        setFetchedData(response.data);
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(`😱 useHttp() request failed: ${error}`);
        setIsLoading(false);
        // Stop execute javascript
        return false;
      });
  };

  if (!interval) {
    useEffect(() => {
      fetchData();
    }, dependencies);
  } else {
    useInterval(() => {
      fetchData();
    }, interval);
  }

  return [isLoading, fetchedData];
};

export default useHttp;
