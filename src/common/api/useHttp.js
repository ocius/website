import { useState, useEffect } from 'react';
import axios from 'axios';
import useInterval from '../hooks/useInterval';

const useHttp = (url, interval = null, dependencies = []) => {
  // Set isLoading to true by default to indicate that data is loading
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedData, setFetchedData] = useState([]);

  /**
   * Check if component was unmounted to prevent memory leaks
   */
  const effectCallback = () => {
    // New stuff here
    let unmounted = false;

    // Fetch and return the data
    axios
      .get(url)
      .then((response) => {
        // Avoid memory leaks
        if (!unmounted) {
          setIsLoading(false);
          setFetchedData(response.data);
        }
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(`😱 useHttp() request failed: ${error}`);
        if (!unmounted) setIsLoading(false);
        // Stop execute javascript
        return false;
      });

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
