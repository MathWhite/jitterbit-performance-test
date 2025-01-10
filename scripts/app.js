const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");
const fs = require("fs");

// Middleware
dotenv.config({ path: "../.env" });

// Carrega o payload dinamicamente
const payloadPath = "../payloads/full.json";
let body;

try {
    body = JSON.parse(fs.readFileSync(payloadPath, "utf8"));
} catch (err) {
    console.error(`Failed to load payload from ${payloadPath}:`, err.message);
    process.exit(1); // Encerra o processo se o payload não for encontrado
}

async function send_request() {
    try {
        
        const url = `${process.env.BASEURL}/${process.env.PATHURL}`;
        console.log(`Sending request to: ${url}`);

        const response = await axios.post(url, body, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        console.log(`Request successful with status: ${response.status}`);
        return response.status;
    } catch (error) {
        console.error("Error in send_request:", error.message);
        console.error("Stack Trace:", error.stack);
        throw new Error("Failed to send request");
    }
}

// Exporta a função para reutilização
module.exports = { send_request };

// Executa a função (opcional, pode ser feita em outro arquivo)
if (require.main === module) {
    send_request()
        .then((status) => console.log(`Process completed with status: ${status}`))
        .catch((err) => console.error(err.message));
}
