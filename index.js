import mongoose from "mongoose";
// Map global promise - get rid of warnign
mongoose.Promise = global.Promise;
// Connect to DB
const db = mongoose.connect("mongodb://localhost:27017/turners");

// Import schema
import Cars from "./models/carStockSchema.js";

// Add car
export const addCar = (car) => {
  Cars.create(car).then((car) => {
    console.info("New car added");
    mongoose.disconnect();
  });
};

// Find car
export const findCar = (makeOrModel) => {
  // Make case insensitive
  const search = new RegExp(makeOrModel, "i");
  Cars.find({ $or: [{ make: search }, { model: search }] }).then(
    (car) => {
      console.info(car);
      console.info(`${car.length} matches`);
      mongoose.disconnect();
    }
  );
};

// Update a car
export const updateCar = (_id, car) => {
  Cars.updateOne({ _id }, car).then((car) => {
    console.info("Car updated");
    mongoose.disconnect();
  });
};

// Remove a car
export const removeCar = (_id) => {
  Cars.deleteOne({ _id }).then((car) => {
    console.info("Car removed");
    mongoose.disconnect();
  });
};

// List all car
export const listCars = () => {
  Cars.find().then((cars) => {
    console.info(cars);
    console.info(`${cars.length} cars`);
    mongoose.disconnect();
  });
};
