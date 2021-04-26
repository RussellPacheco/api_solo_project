require("dotenv").config()
require("reflect-metadata")
import App, { runApp } from "./app"

const app: App = runApp()
app.start()