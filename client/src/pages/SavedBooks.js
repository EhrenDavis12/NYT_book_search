import React, { Component } from "react";
import { DeleteBtn, ViewBtn } from "../components/Button";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container, BoarderBox } from "../components/Grid";
import API from "../utils/API";/* 
import { Link } from "react-router-dom"; */
import { List, ListItem } from "../components/List";
/* import { Input, TextArea, FormBtn } from "../components/Form"; */

class SavedBooks extends Component {
  state = {
    /* title: "",
    authors: [],
    description: "",
    image: "",
    link: "", */
    books: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", authors: [], description: "", image: "", link: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  /* 
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
 
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  }; */

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>(React) Google Books Search</h1>
              <h1>Searched for and Saved Books of Interest </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <BoarderBox>
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <ListItem key={book._id}>
                      <BoarderBox>
                        <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                        <ViewBtn url={book.link} />
                        {/* <Link to={"/books/" + book._id}> */}
                        <strong>
                          Title: {book.title}
                          <br />
                          Author(s): {book.authors.join(", ")}
                        </strong>
                        <Row>
                          <Col size="lg-3">
                            <img src={`${book.image}`} alt="" />
                          </ Col>
                          <Col size="lg-8">
                            <p>
                              Description: {book.description}
                            </p>
                          </ Col>
                        </ Row>
                        {/* </Link> */}
                      </BoarderBox>
                    </ListItem>
                  ))}
                </List>
              ) : (
                  <h3>No Results to Display</h3>
                )}
            </BoarderBox>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SavedBooks;
