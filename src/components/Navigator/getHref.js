export const getHref = (parentList, currentParentIndex) => {
  let href = "/";
  parentList.every((v, i) => {
    if (i > currentParentIndex) {
      return false;
    }

    href += v + "/";
    return true;
  });
  return href;
};
