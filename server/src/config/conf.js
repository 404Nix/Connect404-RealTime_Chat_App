const requiredKeys = {
    port: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    JWTSECRET: process.env.JWTSECRET,
};

for (const key in requiredKeys) {
    if (!requiredKeys[key]) {
        throw new Error(`Missing environment variable: ${key}`);
    }
}

const conf = {
    PORT: String(requiredKeys.port),
    MONGO_URI: String(requiredKeys.MONGO_URI),
    JWTSECRET: String(requiredKeys.JWTSECRET),
};

export default conf;
