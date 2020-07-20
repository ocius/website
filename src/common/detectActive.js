/**
 * Helper function for better detection of active links.
 */
const detectActive = ({ href, location }) => {
  // Remove trailing slashes
  const updatedHref = href.replace(/\/$/, '');
  const updatedPath = location.pathname.replace(/\/$/, '');

  return {
    ...(updatedHref === updatedPath
      ? {
          'data-active': true,
        }
      : {}),
  };
};

export default detectActive;
