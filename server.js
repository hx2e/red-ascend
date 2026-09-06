const dotenv = require("dotenv");
const result = dotenv.config();

const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

const WEBHOOK_URL = process.env.DISCORD_WEBHOOK;

console.log("Dossier actuel :", process.cwd());
console.log("Fichier .env chargé :", !result.error);
console.log("Webhook présent :", !!WEBHOOK_URL);

app.use(express.static("."));

app.get("/visitor", async (req, res) => {
    try {
        const response = await fetch(WEBHOOK_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                content: "Quelqu'un vient de visiter RED ASCEND."
            })
        });

        console.log("Discord status :", response.status);

        res.send("OK");
    } catch (error) {
        console.error(error);
        res.status(500).send("Erreur");
    }
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});