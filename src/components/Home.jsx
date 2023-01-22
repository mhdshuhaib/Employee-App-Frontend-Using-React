
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const Home = () => {
  var [data, setdata] = useState([])

  useEffect(
    () => {
      Employeelist();
    }, []
  )
  var apilink = "https://jsonplaceholder.typicode.com/users"
  const Employeelist = () => {
    axios.get(apilink)
      .then(
        (response) => {
          console.log(response)
          setdata(response.data)
        }
      )
      .catch(
        (error) => {
          alert(error)
        }
      )
  }


  return (
    <div>
      <Navbar/>
    <div className="container">
      <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              {data.map(
                (value, index) => {
                  return <tr>
                    <td>{value.id}</td>
                    <td>{value.name}</td>
                    <td>{value.email}</td>
                  </tr>
                }
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Home