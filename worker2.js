module.exports = ({ a }) => {
  if (a < 2) {
    throw new Error("bukan prime");
  }

  for (let i = 2; i <= Math.sqrt(a); i++) 
  {
    if (a % i === 0) {
      throw new Error("bukan prime");
    }
  }

  return "prime";
}
