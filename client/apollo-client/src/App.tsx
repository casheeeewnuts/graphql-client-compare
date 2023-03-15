import './App.css'
import {gql, useQuery} from "@apollo/client";
import React from "react";

function App() {
  const {data, error, loading} = useQuery(Query, {
    errorPolicy: "all"
  })

  if (loading) {
    return <p>Loading...</p>
  }

  console.dir({data, error})

  return (
    <div className="App">
      <div className="card">
        <p>
          {JSON.stringify(data, null, 2)}
        </p>
      </div>
      <div className="card">
        <p>
          {JSON.stringify(error, null, 2)}
        </p>
      </div>
    </div>
  )
}


const Query = gql`
  query User {
    user(id: 1) {
      id
      email
      article {
        name
      }
    }

    message
    article {
      id
    }
  }
`

export default App
