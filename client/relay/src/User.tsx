import {graphql, useLazyLoadQuery} from "react-relay";
import React from "react";

export default function User() {
    const data = useLazyLoadQuery(
      graphql`
        query UserQuery {
          user(id: 1) {
            id
            name
            email
            article {
              id
              name
            }
          }
          
#          message
        }
      `, {})

  return (
    <div className="card">
      <p>
        {JSON.stringify(data)}
      </p>
    </div>
  )
}