export const getPath = (path: string, params?: Object) => {
  if (!params) {
    return path;
  }
  let res = path;
  for (const key in params) {
    res = res.replace(key, params[key]);
  }
  return res;
};
