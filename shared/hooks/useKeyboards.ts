import { useCallback, useEffect } from 'react';

export const useKeyboard = (handler: (event: KeyboardEvent) => void) => {
  useEffect(() => {
    const handle = (event: KeyboardEvent) => {
      handler(event);
    };
    document.addEventListener('keyup', handle);

    return () => {
      document.removeEventListener('keyup', handle);
    };
  }, [handler]);
};

export const useEscape = (handler: (event: KeyboardEvent) => void) => {
  const handlerCallback = useCallback(
    (event: KeyboardEvent) => {
      if (event.code === 'Escape') {
        handler(event);
      }
    },
    [handler]
  );

  useKeyboard(handlerCallback);
};

export const useBackspace = (handler: (event: KeyboardEvent) => void) => {
  const handlerCallback = useCallback(
    (event: KeyboardEvent) => {
      if (event.code === 'Backspace') {
        handler(event);
      }
    },
    [handler]
  );

  useKeyboard(handlerCallback);
};
