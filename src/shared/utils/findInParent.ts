export const findInParent = (target, attrFind) => {
  const attr = target?.attributes?.getNamedItem(attrFind)?.value;
  if (!attr) {
    if (target?.parentNode) {
      return findInParent(target?.parentNode, attrFind);
    }
    return null;
  } else {
    return attr;
  }
};
