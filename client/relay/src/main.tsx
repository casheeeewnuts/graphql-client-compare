import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Environment, Network, RecordSource, RequestParameters, Store, Variables} from "relay-runtime";
import {RelayEnvironmentProvider} from "react-relay";

const fetchRelay = async ({text}: RequestParameters, variables: Variables) => {
  return fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: text,
      variables
    })
  }).then(r => r.json())
}

const env = new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource())
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={env}>
      <App />
    </RelayEnvironmentProvider>
  </React.StrictMode>,
)
