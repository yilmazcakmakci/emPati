import React, { Component, createContext } from 'react'
import { getData,setData } from './utils/functions'

export const AppContext = createContext()

export class Context extends Component {

    state = {
        user : {},
        isLoggedIn : false,
        point : 350
    }

    //Farklı kontroller eklenebilir
    changeUser = (user, isLoggedIn) => {
        this.setState({user,isLoggedIn})
    }

    purchase = (price) => {
        this.setState({point : this.state.point - price})
    }
    
    feed = (point) => {
        this.setState({point : this.state.point + point})
    }

    render() {
        const { user, isLoggedIn, point } = this.state
        return (
            <AppContext.Provider value={{user,isLoggedIn,point,changeUser:this.changeUser,purchase:this.purchase,feed:this.feed}}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default Context