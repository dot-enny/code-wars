function sqInRect(length, width) {
  if (length === width) return null

  const result = [];

  while (length > 0 && width > 0) {
    if (length > width) {
      result.push(width);
      length -= width;
    } else {
      result.push(length);
      width -= length;
    };
  };

  return result;
};
  


console.log(sqInRect(5, 3)); 
console.log(sqInRect(3, 5)); 