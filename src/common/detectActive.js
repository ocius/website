/**
 * Helper function for better detection of active links.
 */
const detectActive = ({ href, location }) => {
  const updatedPath = location.pathname + location.hash;

  return {
    ...(href === updatedPath
      ? {
          'data-active': true,
        }
      : {}),
  };
};

export default detectActive;
