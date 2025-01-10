# Stress Test API with Express

This project is an Express.js application designed to perform stress testing on APIs under different scenarios. Follow the steps below to set up and use the application.

---

## Prerequisites

Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

---

## Setup Instructions

### 1. Clone the Repository
Clone this repository to your local machine:
```bash
git clone <repository-url>
cd <repository-name>
```

### 2. Create the Payload Folder
Create a folder named `payloads` in the root directory of the project:
```bash
mkdir payloads
```

Add a file named `original.json` inside the `payloads` folder with your desired payload content.

### 3. Generate the Payload File
Run the `createPayload.js` script located in the `scripts` folder to generate a larger or smaller payload file (`full.json`).  
You can define the multiplication factor by updating the corresponding variable in `createPayload.js`.  

To run the script, execute:
```bash
node scripts/createPayload.js
```

This will create a `full.json` file inside the `payloads` folder.

### 4. Set Up Environment Variables
Create a `.env` file in the root directory of the project with the following variables:
```
BASEURL=<your_base_url>
PATHURL=<your_path_url>
```
Replace `<your_base_url>` and `<your_path_url>` with the appropriate values for the API you want to test.

### 5. Install Dependencies
Install the required packages:
```bash
npm install axios express dotenv
```

---

## Usage

Once the setup is complete, you can start the application and begin your stress tests.

Run the application:
```bash
node index.js
```

You can customize the behavior by modifying the code or using different payloads in the `payloads` folder.

---

## Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request if you have ideas to improve this project.

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.
