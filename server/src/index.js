import "dotenv/config";
import app from "./app.js";
import conf from "./config/conf.js";
import connectDB from "./db/index.js";

// development code starts here

import dns from "dns";
dns.setServers(["8.8.8.8"]);

// development code ends here

console.log("Starting server...");
connectDB()
    .then(() => {
        app.on("error", (err) => {
            console.error("Server error:", err);
        });

        app.listen(conf.PORT, () => {
            console.log("Server is running on http://localhost:" + conf.PORT);
        });
    })
    .catch((err) => {
        console.error("Failed to connect to MongoDB:", err);
        process.exit(1);
    });
