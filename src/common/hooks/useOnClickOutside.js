import { useEffect } from 'react';

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    // Detect if it's a mobile device
    const isTouchDevice = 'ontouchstart' in document.documentElement;
    const eventListener = isTouchDevice ? 'touchstart' : 'mousedown';

    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener(eventListener, listener);
    return () => {
      document.removeEventListener(eventListener, listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
