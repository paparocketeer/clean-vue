export enum StorageKeys {
  AuthToken = 'auth_token',
  isAuth = 'is_auth',
  RefreshToken = 'refresh_token',
  SessionId = 'session_id',
  LastRefresh = 'last_refresh',
  Language = 'language',
  Remember = 'remember',
}
type TMode = 'local' | 'session' | 'both';
export const getStorageObject = (key: keyof typeof StorageKeys) => {
  let json = localStorage.getItem(StorageKeys[key]);
  if (!json) {
    json = sessionStorage.getItem(StorageKeys[key]);
  }
  if (!json || json === 'undefined') {
    return undefined;
  }

  try {
    return JSON.parse(json);
  } catch {
    return undefined;
  }
};

export const setStorageObject = (
  key: keyof typeof StorageKeys,
  object: unknown,
  mode: TMode = 'both'
): void => {
  let json = JSON.stringify(object);

  if (mode === 'both') {
    localStorage.setItem(StorageKeys[key], json);
    sessionStorage.setItem(StorageKeys[key], json);
  }
  if (mode === 'session') {
    sessionStorage.setItem(StorageKeys[key], json);
  }
  if (mode === 'local') {
    localStorage.setItem(StorageKeys[key], json);
  }
};

export const removeStorageObject = (
  key: keyof typeof StorageKeys,
  mode: TMode = 'both'
): void => {
  if (mode === 'both') {
    localStorage.removeItem(StorageKeys[key]);
    sessionStorage.removeItem(StorageKeys[key]);
  }
  if (mode === 'session') {
    sessionStorage.removeItem(StorageKeys[key]);
  }
  if (mode === 'local') {
    localStorage.removeItem(StorageKeys[key]);
  }
};

export const clearStorage = () => {
  localStorage.clear();
  sessionStorage.clear();
};
