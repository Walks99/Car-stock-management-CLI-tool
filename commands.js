#!/usr/bin/env node

import { program } from "commander";
import inquirer from "inquirer";
import {
  addCustomer,
  findCustomer,
  updateCustomer,
  removeCustomer,
  listCustomers,
} from "./index.js";

// Customer questions
const questions = [
  {
    type: "input",
    name: "firstname",
    message: "Customer first name",
  },
  {
    type: "input",
    name: "lastname",
    message: "Customer last name",
  },
  {
    type: "input",
    name: "phone",
    message: "Customer phone number",
  },
  {
    type: "input",
    name: "email",
    message: "Customer email address",
  },
];

program.version("1.0.0").description("Client Management System");

// Add command
program
  .command("add")
  .alias("a")
  .description("Add a customer")
  .action(() => {
    inquirer.prompt(questions).then((answers) => addCustomer(answers));
  });

//   Find command
program
  .command("find <name>")
  .alias("f")
  .description("Find a customer")
  .action((name) => findCustomer(name));

// Update command
program
  .command("update <_id>")
  .alias("u")
  .description("Update a customer")
  .action((_id) => {
    inquirer.prompt(questions).then((answers) => updateCustomer(_id, answers));
  });

// Remove command
program
  .command("remove <_id>")
  .alias("r")
  .description("Remove a customer")
  .action((_id) => removeCustomer(_id));

// List command
program
  .command("list")
  .alias("l")
  .description("List all customers")
  .action(() => listCustomers());

program.parse(process.argv);
