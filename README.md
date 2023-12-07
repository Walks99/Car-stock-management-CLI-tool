# Car Stock Management CLI Tool

### Description

This command-line interface (CLI) tool is designed for managing a car stock database. It provides functionality for adding, finding, updating, removing, and listing cars in the database.

### Installation

```
npm install -g car-stock-management-cli-tool
```

### Usage 
```
car-stock-management-cli-tool [command] [options]
```

### Commands

#### `Add a car`
```
car-stock-management-cli-tool add
```
Prompts the user with questions about the car and adds it to the database.

#### `Find a car`
```
car-stock-management-cli-tool find <makeOrModel>
```
Find a car by make or model.

#### `Remove a car`
```
car-stock-management-cli-tool remove <_id>
```
Remove a car from the database by providing its unique identifier.

#### `List all cars`
```
car-stock-management-cli-tool list
```

### Configuration

The tool uses a MongoDB database for storing car information. Make sure to configure the MongoDB connection in index.js.

### Dependencies

  - Commander
  - Inquirer
  - Mongoose

### Author and contact info

##### *Ben Walker*

  - Email: **benwalker1.personal@gmail.com**
  - Github: **Walks99**

### License

This project is licensed under the ISC License.

Copyright (c) [2023], [Ben Walker - Walks99]

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
