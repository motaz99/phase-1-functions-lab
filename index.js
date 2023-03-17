// Code your solution in this file!

const distanceFromHqInBlocks = (someValue) => {
  const distanceInBlocks = Math.abs(someValue - 42);
  return distanceInBlocks;
};

const distanceFromHqInFeet = (someValue) => {
  const distanceInBlocks = distanceFromHqInBlocks(someValue);
  const distanceInFeet = distanceInBlocks * 264;

  return distanceInFeet;
};

const distanceTravelledInFeet = (start, destination) => {
  const startOnFeet = distanceFromHqInFeet(start);
  const destinationOnFeet = distanceFromHqInFeet(destination);
  const distanceTraveledInFeet = Math.abs(destinationOnFeet - startOnFeet);
  return distanceTraveledInFeet;
};

const calculatesFarePrice = (start, destination) => {
  const distanceTraveledInFeet = distanceTravelledInFeet(start, destination);

  if (distanceTraveledInFeet > 2500) return "cannot travel that far";
  if (distanceTraveledInFeet > 400 && distanceTraveledInFeet < 2000) {
    const farePrice = ((distanceTraveledInFeet - 400) * 2) / 100;
    return farePrice;
  }
  if (distanceTraveledInFeet <= 400) return 0;
  if (distanceTraveledInFeet > 2000) return 25;
};
