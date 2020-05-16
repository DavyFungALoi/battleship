const battleshipFactory = (name, length, isSunk) => {
  const hitStatus = () => {
    (console.log("hello")
    )}
  return {
    name,
    length,
    isSunk,
    hitStatus,
  };
};

module.exports = battleshipFactory;
