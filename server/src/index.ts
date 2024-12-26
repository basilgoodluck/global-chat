import express from 'express';
import cors from "cors";
import bodyParser from 'body-parser';
import logger from "morgan";
import { PORT } from '@/config';

// import './resolvepaths'

import { AuthRoutes } from '@/routes';

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(logger("dev"))

app.use("/api/auth", AuthRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})


