module.exports = ({ a }) => {
  if (a % 2 === 0) {
    return "prime";
  } else {
    throw new Error("bukan prime");
  }
}
