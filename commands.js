#!/usr/bin/env node

import { program } from "commander";
import inquirer from "inquirer";
import {
  addCar,
  findCar,
  updateCar,
  removeCar,
  listCars,
} from "./index.js";

// Customer questions
const questions = [
  {
    type: "input",
    name: "bodyStyle",
    message: "Style of car e.g Hatchback, Sedan, Coupe",
  },
  {
    type: "input",
    name: "make",
    message: "Make of car",
  },
  {
    type: "input",
    name: "model",
    message: "Car model",
  },
  {
    type: "input",
    name: "year",
    message: "Year of manufacture",
  },
  {
    type: "input",
    name: "price",
    message: "Listing price",
  },
  {
    type: "input",
    name: "image",
    message: "Link to car listing",
  },
];

program.version("1.0.0").description("Car Stock Mangement System");

// Add command
program
  .command("add")
  .alias("a")
  .description("Add a car")
  .action(() => {
    inquirer.prompt(questions).then((answers) => addCar(answers));
  });

//   Find command
program
  .command("find <makeOrModel>")
  .alias("f")
  .description("Find a car")
  .action((makeOrModel) => findCar(makeOrModel));

// Update command
program
  .command("update <_id>")
  .alias("u")
  .description("Update a car")
  .action((_id) => {
    inquirer.prompt(questions).then((answers) => updateCar(_id, answers));
  });

// Remove command
program
  .command("remove <_id>")
  .alias("r")
  .description("Remove a car")
  .action((_id) => removeCar(_id));

// List command
program
  .command("list")
  .alias("l")
  .description("List all car")
  .action(() => listCars());

program.parse(process.argv);
