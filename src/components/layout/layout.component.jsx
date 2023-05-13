import { Sidebar } from "./sidebar/sidebar.component"
import PropTypes from 'prop-types'

export const Layout = ({ children, users, setUsers}) => {
     return (
          <div className="d-flex">
               <Sidebar users={users} setUsers={setUsers}/>
               <div className="pt-3">{children}</div>  
          </div>
     )
}

Layout.propType = {
     children: PropTypes.any,
     users: PropTypes.array,
}