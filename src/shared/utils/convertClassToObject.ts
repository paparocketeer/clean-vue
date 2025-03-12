export function convertClassToObject(classInstance): any {
  const entries = Object.entries(classInstance);

  return entries.reduce((accum, [key, value]) => {
    accum[key] = value;
    return accum;
  }, {});
}
