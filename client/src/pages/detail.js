import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/grid";
import Jumbotron from "../components/jumbotron";
import API from "../utils/API";

class Detail extends Component {
  state = {
    book: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getBook(this.props.match.params.id)
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.book.title} by {this.state.book.author}
              </h1>              
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
            <img src={this.state.book.image} alt={this.state.book.title}/>
              <h1>Description</h1>
              <p>
                {this.state.book.description}
              </p>
              <p>
                <a href={this.state.book.link} target="_blank" rel="noopener noreferrer">More Info</a>   
              </p>              
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Reading List</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
