export const getHref = (parentList: string[], currentParentIndex: number) => {
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
