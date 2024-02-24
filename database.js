import mysql from "mysql2"
import dotenv from "dotenv"
dotenv.config()

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise()

export async function getNotes() {
  const result = await pool.query("SELECT * FROM notes")
  const rows = result[0]
  return rows
}

export async function getNote(id) {
  const result = await pool.query(`SELECT * FROM notes WHERE id=?`, [id])
  const row = result[0]
  return row[0]
}

export async function createNote(title, description, tag) {
  const result = await pool.query("INSERT INTO notes (title,description,tag) VALUES (?,?,?)", [
    title,
    description,
    tag,
  ])
  const id = result[0].insertId
  return { id, title, description, tag }
  // Tambien como buen practica puedo hacer lo siguiente:
  // Con el ID que se inserto utilizo la funcion para buscar la nota, y verifico que exista en la base de datos.
  // return getNote(id)
}
