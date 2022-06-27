import React from "react"

import { CardGroup, Card, Container } from "react-bootstrap"

import home from "../img/githubAccount.png"


class About extends React.Component {
    constructor (props) {
        super(props)
    }

    renderInfo () {
        return(
            <h1 className={"d-flex justify-content-center align-items-center h-100"}>
                NO INFORMATION
            </h1>
        )
    }

    render () {
        return (<>
            {this.renderInfo()}
        </>)
    }
}

export default About