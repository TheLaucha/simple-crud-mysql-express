import express from "express"
import { getNotes, getNote, createNote } from "./database.js"
const app = express()
app.use(express.json())

app.get("/notes", async (req, res, next) => {
  try {
    const notes = await getNotes()
    res.send(notes)
  } catch (error) {
    next(error)
  }
})

app.get("/notes/:id", async (req, res, next) => {
  try {
    const id = req.params.id
    const note = await getNote(id)
    res.send(note)
  } catch (error) {
    next(error)
  }
})

app.post("/notes", async (req, res, next) => {
  try {
    const { title, description, tag } = req.body
    const note = await createNote(title, description, tag)
    res.send(note)
  } catch (error) {
    next(error)
  }
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send("Something broke!")
})

app.listen(8080, () => {
  console.log("Server is running on port 8080")
})
