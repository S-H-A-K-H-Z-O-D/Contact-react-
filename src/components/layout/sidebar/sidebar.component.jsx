import { Link } from "react-router-dom"
import PropTypes from 'prop-types'
import { useRef } from "react"

export const Sidebar = ({ users, setUsers }) => {

     const elSearch = useRef()

     
     let onSearch = (e) => {
          let regex = RegExp(e.target.value, 'gi')
          let searchedUsers = []
          
          users.forEach(element => {
               
               if(element.fullName.includes(e.target.value)){
                    searchedUsers.push(element)
               }
               setUsers(searchedUsers)
          });
     }

     return (
          <div className="vh-100 p-3 mx-3 border-end">
               <div className="d-flex mb-3">
                    <input ref={elSearch} onChange={onSearch} className="form-control" type="text" />
                    <Link to='/add' className="btn btn-primary ms-2">New</Link>
               </div>

               {users.length > 0 ? (<ul className="list-group list-group-flush mt-3">

                    {users.map(user => 
                         (<li key={user.id} className="list-group-item list-group-item-action">
                              <Link to={`contact/${user.id}`}>{user.fullName}</Link>
                         </li>)
                    )}

               </ul>) : <i>No contacts</i>}
          </div>
     )
}

Sidebar.propTypes = {
     users: PropTypes.array
}