import axios from 'axios';
import KeyCloak from 'keycloak-js';
import React, { ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  REACT_APP_AUTH_CLIENT_ID,
  REACT_APP_AUTH_REALM,
  REACT_APP_AUTH_REDIRECT_URL,
  REACT_APP_AUTH_URL,
} from 'src/constants/env';
import { useAppDispatch } from 'src/shared/hooks/useAppDispatch';
import { FullPageLoader } from 'src/shared/ui';
import { getStorageObject, setStorageObject } from 'src/shared/utils/storage';

import { onUpdateProfile } from '../../../shared/store/slices/profile';

interface IAuthProps {
  children: ReactNode;
}

export const Auth = ({ children }: IAuthProps) => {
  const [keyCloak, setKeyCloak] = useState<any>();
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { pathname, search } = useLocation();

  useEffect(() => {
    const keyCloak = new KeyCloak({
      realm: REACT_APP_AUTH_REALM,
      url: REACT_APP_AUTH_URL,
      clientId: REACT_APP_AUTH_CLIENT_ID,
    });
    keyCloak
      .init({
        onLoad: 'login-required',
        redirectUri: REACT_APP_AUTH_REDIRECT_URL + pathname + search,
      })
      .then((auth) => {
        setKeyCloak(keyCloak);
        setIsAuth(auth);
        if (auth) {
          setStorageObject('isAuth', 'true');
          keyCloak.loadUserProfile().then((data) => {
            dispatch(onUpdateProfile(data));

            window.axiosInstance = axios.create({
              baseURL: '/main/v1',
              headers: {
                Authorization: `Bearer ${keyCloak?.token}`,
              },
            });
            window.axiosInstanceProfile = axios.create({
              baseURL: '/aa/v1/main',
              headers: {
                Authorization: `Bearer ${keyCloak?.token}`,
              },
            });
          });
          window.accessToken = keyCloak?.token || '';
          window.keyCloak = keyCloak;
        }
      });
    keyCloak.onTokenExpired = () => {
      keyCloak
        .updateToken(360)
        .then((refreshed) => {
          if (refreshed) {
            window.accessToken = keyCloak?.token || '';
            window.keyCloak = keyCloak;
            window.axiosInstance = axios.create({
              baseURL: '/main/v1',
              headers: {
                Authorization: `Bearer ${keyCloak?.token}`,
              },
              withCredentials: false,
            });
            window.axiosInstanceProfile = axios.create({
              baseURL: '/aa/v1/main',
              headers: {
                Authorization: `Bearer ${keyCloak?.token}`,
              },
              withCredentials: false,
            });
          } else {
          }
        })
        .catch(() => {});
    };

    const localIsAuth = getStorageObject('isAuth');
    setIsAuth(!!localIsAuth);
  }, []);

  useEffect(() => {
    if (keyCloak?.token) {
      window.accessToken = keyCloak?.token || '';
    }
  }, [isAuth]);

  if (keyCloak) {
    return children;
  }
  return <FullPageLoader />;
};
