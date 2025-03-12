import React, { PropsWithChildren, useState } from 'react';
import { createPortal } from 'react-dom';
import { elements } from 'src/constants';
import { INotificationProps, NotificationComponent } from 'src/shared/ui';
import { requireNotNull } from 'src/shared/utils/require-not-null';

export interface INotificationContext {
  setOptions: (options: INotificationProps) => void;
}
export const NotificationContext = React.createContext<INotificationContext>({
  setOptions: () => {},
});

const defaultValue: INotificationProps = {
  open: false,
  message: '',
  variant: 'success',
};

export const NotificationProvider = ({ children }: PropsWithChildren) => {
  const [options, setOptions] = useState(defaultValue);

  return (
    <>
      {createPortal(
        <NotificationComponent {...options} />,
        requireNotNull(
          document.getElementById(elements.notificationRoot)
        ) as HTMLElement
      )}
      <NotificationContext.Provider
        value={{
          setOptions,
        }}>
        {children}
      </NotificationContext.Provider>
    </>
  );
};

export const withNotificationProvider = (component: () => React.ReactNode) =>
  function loaderProvider() {
    return <NotificationProvider>{component()}</NotificationProvider>;
  };
