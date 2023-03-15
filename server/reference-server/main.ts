import {buildSchema} from "graphql";
import express from "express"
import {graphqlHTTP} from "express-graphql"
import cors from "cors"
import getPort from "get-port";
import * as fs from "fs";
import bodyParser from "body-parser";


const Schema = buildSchema(fs.readFileSync(__dirname + "/schema.graphql").toString())

const resolveUser = async ({id}: Record<string, unknown>) => {
  throw "resolveUser hangup!"

  return {
    id,
    name: "shu-nonaka",
    email: "shu.nonaka@example.com",
    article: resolveArticle
  }
}

const resolveArticle = async () => {
  // throw "hahahahahahaha!"

  return [
    {
      id: "article",
      name: "user-article"
    }
  ]
}

const app = express()

app.use(cors())
app.use(express.static("public"))
app.use(bodyParser.json())

app.use("/graphql", graphqlHTTP({
  schema: Schema,
  rootValue: {
    article: resolveArticle,
    user: resolveUser,
    message: async () => {
      // throw "nooooooooooooo!"
      return "yes!"
    }
  },
  graphiql: true
}))
app.use("/", (req, res) => {
  res.redirect("/graphql")
})

getPort({port: 4000}).then(port => {
  app.listen(port)
  console.log(`graphql server ready on http://localhost:${port}/graphql`)
})