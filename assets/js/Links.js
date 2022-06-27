import React from "react"

import { CardGroup, Card, Container } from "react-bootstrap"

import home from "../img/logo.png"
import enex from "../img/ENEX.png"


class Links extends React.Component {
    constructor (props) {
        super(props)

        this.cards = [
            {
                title : "GITHUB",
                link : "https://github.com/wWrongName",
                img : home
            },
            {
                title : "DEX UI",
                link : "https://devapp.enex.space/",
                img : enex
            },
            {
                title : "Another link",
                link : "",
                img : ""
            },
        ]
    }

    getCardGroup () {
        let dataForRender = this.cards.map(card => {
            return (
                <div className="p-5">
                    <Card className={"custom-card align-items-center"}>
                        <Card.Img src={card.img}/>
                        <div className={"over-card-info d-flex justify-content-center align-items-center"}
                             onClick={() => window.open(card.link)}
                        >
                            <a>{card.title}</a>
                        </div>
                        {/*<Card.Body>*/}
                        {/*    <Card.Title className="card-title"></Card.Title>*/}
                        {/*</Card.Body>*/}
                        {/*<Card.Footer className={"d-flex justify-content-center"}>*/}
                        {/*    <a href={card.link}>{card.title}</a>*/}
                        {/*</Card.Footer>*/}
                    </Card>
                </div>
            )
        })
        return dataForRender
    }

    render () {
        return (<Container className={"d-flex justify-content-center align-items-center h-100"}>
            <CardGroup>
                { this.getCardGroup() }
            </CardGroup>
        </Container>)
    }
}

export default Links