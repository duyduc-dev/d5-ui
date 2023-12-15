import { useEffect } from 'react';

const useOnClickOutside = (ref, handler, mouseEvent = 'mousedown') => {
  useEffect(() => {
    document.addEventListener(mouseEvent, (event) => {
      const el = ref?.current;

      if (!el || el.contains(event.target)) {
        return;
      }
      handler(event);
    });
  }, [mouseEvent]);
};

export default useOnClickOutside;
