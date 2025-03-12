const deepGet = (obj, keys) => keys.reduce((xs, x) => xs?.[x] ?? null, obj);

export const deepGetByPaths = (obj, ...paths) =>
  paths.map((path) =>
    deepGet(
      obj,
      path
        .replace(/\[([^\[\]]*)\]/g, '.$1.')
        .split('.')
        .filter((t) => t !== '')
    )
  );
