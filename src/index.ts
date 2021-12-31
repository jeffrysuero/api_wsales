import "reflect-metadata"
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { Connection, createConnection } from 'typeorm'

const app = express();


    createConnection({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "004522",
      database: "db_wsales",
      synchronize:true,
      logging:true,
      entities: [
          "dist/entity/**/*.js"
      ]
    });


app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.listen(3000,() => {
    console.log("server on por 3000")
});