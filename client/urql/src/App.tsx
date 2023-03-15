import './App.css'
import {useQuery, gql} from "urql";


function App() {
  const [result] = useQuery({
    query: gql`
      query {
        user(id: 1) {
          id
          name
          email
        }
        
        message
      }
    `
  })

  const { data, fetching, error } = result

  if (fetching) return <p>Now Loading...</p>

  return (
    <div className="App">
      <div className="card">
        <p>
          {JSON.stringify(data, null, 2)}
        </p>
        <p>
          {JSON.stringify(error, null, 2)}
        </p>
      </div>
    </div>
  )
}

export default App
