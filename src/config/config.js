import dotenv from "dotenv";
dotenv.config();

const config={
    dbUri: process.env.MONGO_DB_URI,
    imgUrl:process.env.IMG_URL
}

export default config;