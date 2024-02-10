export const deleteObjDuplicates = arreyObj => {
  const uniqueObj = arreyObj.reduce((accum, current) => {
    if (!accum[current.id]) {
      accum[current.id] = current;
    }

    return accum;
  }, {});

  const uniqueArray = Object.values(uniqueObj);

  uniqueArray.sort((a, b) => {
    const dateA = Date.parse(a.release_date);
    const dateB = Date.parse(b.release_date);
    return dateB - dateA;
  });

  return uniqueArray;
};
