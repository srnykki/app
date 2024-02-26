import express, { Response, Request} from "express"
import routes from './routes/'

const app = express()

app.use(routes)