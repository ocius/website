import { useState, useEffect } from 'react';
import axios from 'axios';
import useInterval from '../hooks/useInterval';

const useHttp = (url, interval = null, dependencies = []) => {
  // Set isLoading to true by default to indicate that data is loading
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedData, setFetchedData] = useState([]);

  const fetchData = () => {
    // Fetch and return the data
    axios
      .get(url)
      .then((response) => {
        setIsLoading(false);
        setFetchedData(response.data);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(`😱 useHttp() request failed: ${error}`);
        setIsLoading(false);
        // Stop execute javascript
        return false;
      });
  };

  // Check if component was unmounted to prevent memory leaks
  const effectCallback = () => {
    // New stuff here
    let unmounted = false;
    if (!unmounted) {
      fetchData();
    }
    return () => {
      // Bye bye!
      unmounted = true;
    };
  };

  if (!interval) {
    useEffect(effectCallback, dependencies);
  } else {
    useInterval(effectCallback, interval);
  }

  return [isLoading, fetchedData];
};

export default useHttp;
