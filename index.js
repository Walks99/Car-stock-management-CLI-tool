import mongoose from "mongoose";
// Map global promise - get rid of warnign
mongoose.Promise = global.Promise;
// Connect to DB
const db = mongoose.connect("mongodb://localhost:27017/customercli");

// Import model
import Customer from "./models/customer.js";

// Add customer
export const addCustomer = (customer) => {
  Customer.create(customer).then((customer) => {
    console.info("New customer added");
    mongoose.disconnect();
  });
};

// Find customer
export const findCustomer = (name) => {
  // Make case insensitive
  const search = new RegExp(name, "i");
  Customer.find({ $or: [{ firstname: search }, { lastname: search }] }).then(
    (customer) => {
      console.info(customer);
      console.info(`${customer.length} matches`);
      mongoose.disconnect();
    }
  );
};

// Update a customer
export const updateCustomer = (_id, customer) => {
  Customer.updateOne({ _id }, customer).then((customer) => {
    console.info("Customer updated");
    mongoose.disconnect();
  });
};

// Remove a customer
export const removeCustomer = (_id) => {
  Customer.deleteOne({ _id }).then((customer) => {
    console.info("Customer removed");
    mongoose.disconnect();
  });
};

// List all customers
export const listCustomers = () => {
  Customer.find().then((customers) => {
    console.info(customers);
    console.info(`${customers.length} customers`);
    mongoose.disconnect();
  });
};
