import { createPool } from "mysql2/promise";
import {
  DB_HOST,
  DB_DATABASE,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
} from "./config.js";

export const pool = createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  port: DB_PORT,
  database: DB_DATABASE
});

(async () => {
  try {
    const connection = await pool.getConnection();
    console.log("Conexión exitosa a la base de datos.");
    connection.release();
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error.message);
  }
})();