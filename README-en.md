# Good-Practices-for-AIs

[Read this document in Portuguese](./README.md)

## Overview
This API was developed to efficiently and practically manage people's information. All data is stored in memory, without the use of a database, making it ideal for simple applications or testing.

## Objectives
- Facilitate the management of people's data.
- Provide a simple and intuitive interface for developers.
- Demonstrate best practices in API development.

## Features
- Add a new person.
- List all people.
- Update a person's information.
- Remove a person.

## Technologies Used
- Node.js
- Express.js

## Endpoints

### 1. Add a New Person
**POST** `/pessoas`  
**Description:** Adds a new person to the system.  
**Request Body (JSON):**
```json
{
    "name": "string",
    "age": "number"
}
```
**Response (201 Created):**
```json
{
    "id": "string",
    "name": "string",
    "age": "number"
}
```

### 2. List All People
**GET** `/pessoas`  
**Description:** Returns a list of all registered people.  
**Response (200 OK):**
```json
[
    {
        "id": "string",
        "name": "string",
        "age": "number"
    }
]
```

### 3. Update a Person's Information
**PUT** `/pessoas/:id`  
**Description:** Updates the data of an existing person.  
**URL Parameters:**  
- `id` (string): ID of the person to be updated.  
**Request Body (JSON):**
```json
{
    "name": "string",
    "age": "number"
}
```
**Response (200 OK):**
```json
{
    "id": "string",
    "name": "string",
    "age": "number"
}
```

### 4. Remove a Person
**DELETE** `/pessoas/:id`  
**Description:** Removes a person from the system.  
**URL Parameters:**  
- `id` (string): ID of the person to be removed.  

## How to Run

Follow the steps below to run the application:

1. **Clone the repository**  
    ```bash
    git clone https://github.com/your-username/Good-Practices-for-AIs.git
    cd Good-Practices-for-AIs
    ```

2. **Install dependencies**  
    Make sure you have Node.js installed. Then, run:  
    ```bash
    npm install
    ```

3. **Start the server**  
    Run the following command to start the server:  
    ```bash
    npm start
    ```

4. **Access the API**  
    The API will be available at `http://localhost:3000`. Use tools like Postman or cURL to interact with the endpoints.