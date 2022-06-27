import React from "react"
import ReactDOM from "react-dom"

import "regenerator-runtime/runtime.js"

import "bootstrap/dist/css/bootstrap.min.css"
import "../css/index.css"

import HNavbar from "./HNavbar"
import Links   from "./Links"


class Root extends React.Component {
    constructor (props) {
        super(props)
        this.menu = {
            home  : "home",
            about : "about",
            links : "links"
        }
        this.state = {
            menuItem : "home"
        }
    }

    openPage (item) {
        this.setState({ menuItem : item })
    }

    menuViewController () {
        switch (this.state.menuItem) {
            case this.menu.home:
                return <>home</>
            case this.menu.about:
                return <>about</>
            case this.menu.links:
                return <Links />
            default:   
                return <>error</>
        }
    }

    render () {
        return (<>
            <HNavbar menu={this.menu} openPage={this.openPage.bind(this)}/>
            {this.menuViewController()}
        </>)
    }
}

ReactDOM.render(
    <Root />,
    document.getElementById("root")
)