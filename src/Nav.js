import React, {useEffect, useState} from 'react'
import { AppBar, Toolbar, IconButton,
    Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'

const Navigation = () => {
    const [online, setOnline] = useState(true)
    const logoutRender= () => {
        if(document.cookie === "loggedIn="){
            setOnline(true)
        } else if(document.cookie === "loggedIn=true"){
            setOnline(false)
        }
        return online
    }
    useEffect(() => {
        logoutRender()

    })
    return (
        <AppBar position="relative">
            <Toolbar>
                <IconButton color="inherit">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    Local Businesses
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/listings">Listings</Link>
                    </li>
                    <li className="nav-list-item"
                        onClick={() => {
                            document.cookie = "loggedIn="
                            window.location.replace("/login")
                        }}>
                        {online ? 'Login' : "Logout"}
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation