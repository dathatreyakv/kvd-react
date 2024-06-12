import {createContext} from 'react'

const UserContext = createContext({loggedInUser: "Default User", setUserName: null})

export default UserContext;