import mongoose from "mongoose";

export async function connect() {
  mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const connection = mongoose.connection;
  connection.once("open", () => {
    console.log("MongoDB database connection established successfully!");
  });

  //    const db= await  mongoose.connect(process.env.DB_URL);
}
