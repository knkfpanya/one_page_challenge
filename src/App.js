import React, { Component } from 'react'
import axios from 'axios'
import {Card,Row,Col,Container,Navbar} from "react-bootstrap"
import './App.css';

export default class javascriptMap extends Component {
    constructor(props){
        super(props)
        this.state = {
          data: []
        }
      }
    
      getData(){
        var config = {
            method: 'get',
            url: 'https://api.football-data.org/v2/matches',
            // url: 'http://jsonplaceholder.typicode.com/users',
            headers: { 
                'X-Auth-Token': 'bdca04e3166e4ad880295daa3112a5be'
            }
        };
        axios(config).then(res => {
            var data = res.data.matches
            // var filters=data.filters
            // var matches=data.matches
            // console.log(data.matches);
            console.log(data);
            this.setState({data : data})
        })
      }
      componentDidMount(){
        this.getData()
      }
    render() {
        return (
            <>
                <div className='App'>
                    <Navbar className='justify-content-center' bg='dark' expand="lg">
                        <Container>
                            <Navbar.Brand>
                                <h1 className='Playball text-white p-2'>Football Match</h1>
                            </Navbar.Brand>
                        </Container>
                    </Navbar>

                    <Container className='mt-5 mb-5 pb-5'>
                        <Row>
                            <Col md={12} className='p-0 mb-4'>
                                <Card>
                                    <Card.Body className='text-center bg-dark b-none'>
                                        <Card.Text className='text-white sarabun'>Match Day Result</Card.Text>
                                    </Card.Body>
                                </Card>
                                
                            </Col>
                        </Row>
                        {this.state.data.map(
                            d => (
                                <Row>
                                    <Col md={5} xs={4} className='p-0'>
                                        <Card>
                                            <Card.Body className='bg-blue text-white'>
                                                <Card.Text className='text-right' style={{textAlign:"right"}} key={d.id}>{d.homeTeam.name}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={2} xs={4} className='p-0'>
                                        <Card>
                                            <Card.Body className='bg-dark text-white'>
                                                <Card.Text className='text-center' key={d.id}>
                                                    {!d.score.fullTime.homeTeam&&d.score.fullTime.homeTeam!=0? '-' : d.score.fullTime.homeTeam}
                                                    &nbsp;:&nbsp; 
                                                    {!d.score.fullTime.awayTeam&&d.score.fullTime.awayTeam!=0? '-' : d.score.fullTime.awayTeam}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={5} xs={4} className='p-0'>
                                        <Card>
                                            <Card.Body className='bg-apple text-white'>
                                                <Card.Text className='text-left' key={d.id}>{d.awayTeam.name}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    {/* {d.homeTeam.name} */}
                                </Row>
                            )
                        )} 
                    </Container>
                </div>
                <ul>
                    {/* {this.state.data.map(
                        d => (
                            <li key={d.id}>
                                {d.homeTeam.name}
                            </li>
                            )
                    )}  */}
                </ul>
            </>
        )
    }
}