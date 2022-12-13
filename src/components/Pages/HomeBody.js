import { Button, Container, Row, Col } from "react-bootstrap"

const HomeBody = () => {
    return(
        <Container>
            <h1 style={{textAlign: 'center', fontFamily: "fantasy", padding: '20px'}}>TOURS</h1>
            <div>
                <Row style={{borderBottom: '1px solid black', margin: '4px auto'}}>
                    <Col><span>DEC 31</span></Col>
                    <Col><span style={{color: 'gray'}}>DETROIT, MI</span></Col>
                    <Col><span style={{color: 'gray'}}>DTE ENERGY MUSIC THEATRE</span></Col>
                    <Col><Button variant="info" style={{margin: '4px auto' , height: '2rem', width: '10rem'}}>BUY TICKETS</Button></Col>
                </Row><Row style={{borderBottom: '1px solid black', margin: '4px auto'}}>
                    <Col><span>DEC 11</span></Col>
                    <Col><span style={{color: 'gray'}}>TORONTO,ON</span></Col>
                    <Col><span style={{color: 'gray'}}>BUDWEISER STAGE</span></Col>
                    <Col><Button variant="info" style={{margin: '4px auto' , height: '2rem', width: '10rem'}}>BUY TICKETS</Button></Col>
                </Row><Row style={{borderBottom: '1px solid black', margin: '4px auto'}}>
                    <Col><span>DEC 15</span></Col>
                    <Col><span style={{color: 'gray'}}>BRISTOW, VA</span></Col>
                    <Col><span style={{color: 'gray'}}>JIGGY LUBE LIVE</span></Col>
                    <Col><Button variant="info" style={{margin: '4px auto' , height: '2rem', width: '10rem'}}>BUY TICKETS</Button></Col>
                </Row><Row style={{borderBottom: '1px solid black', margin: '4px auto'}}>
                    <Col><span>DEC 21</span></Col>
                    <Col><span style={{color: 'gray'}}>PHOENIX, AZ</span></Col>
                    <Col><span style={{color: 'gray'}}>AK-CHIN PAVILION</span></Col>
                    <Col><Button variant="info" style={{margin: '4px auto' , height: '2rem', width: '10rem'}}>BUY TICKETS</Button></Col>
                </Row><Row style={{borderBottom: '1px solid black', margin: '4px auto'}}>
                    <Col><span>DEC 25</span></Col>
                    <Col><span style={{color: 'gray'}}>LAS VEGAS, NV</span></Col>
                    <Col><span style={{color: 'gray'}}>T-MOBILE ARENA</span></Col>
                    <Col><Button variant="info" style={{margin: '4px auto' , height: '2rem', width: '10rem'}}>BUY TICKETS</Button></Col>
                </Row><Row style={{borderBottom: '1px solid black', margin: '4px auto'}}>
                    <Col><span>DEC 31</span></Col>
                    <Col><span style={{color: 'gray'}}>C1NCORD, CA</span></Col>
                    <Col><span style={{color: 'gray'}}>CONCORD PAVILION</span></Col>
                    <Col><Button variant="info" style={{margin: '4px auto' , height: '2rem', width: '10rem'}}>BUY TICKETS</Button></Col>
                </Row></div>
        </Container>
    )
}

export default HomeBody;