import React, { Component } from 'react'

// Components
import NavBar from './components/Navbar'
import Hero from './components/Hero'
import BookCard from './components/BookCard'
import Footer from './components/Footer'

// Mocks
import { historyBooks } from './mocks/history-books'

// Services
import { GET_ALL_COMMENTS, ADD_COMMENT } from './services/comment.service'

// Bootstrap Components and custom styles
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button
} from 'react-bootstrap'
import './App.css'

// The Comment structure is this:

// {
//   "comment": "A good book but definitely I don't like many parts of the plot",
//   "rate": 3,
//   "elementId": "0316438960" //book id
// }

class App extends Component {
  state = {
    historyBooks: historyBooks,
    comments: [],
    selectedBook: '',
    comment: {
      text: '',
      rating: 1
    }
  }

  handleInput = (e) => {
    let id = e.target.id
    console.log(e.target.value)
    console.log(id)
    this.setState({
      comment: {
        ...this.state.comment,
        [id]: e.target.value
      }
    })
  }

  handleSelectBook = (asin) => {
    this.setState({ selectedBook: asin })
  }

  async handleSubmitComment() {
    console.log(this.state.comment)
    const response = await ADD_COMMENT(this.state.comment)
    if (response.ok) {
      this.setState({
        comment: {
          text: '',
          rating: 1
        }
      })
    }
  }

  async componentDidMount() {
    const comments = await GET_ALL_COMMENTS()
    this.setState({ comments: [comments, ...this.state.comments] })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <main>
          <Container fluid>
            <section>
              <Hero />
            </section>
            {/* COMMMENTS */}
            <section>
              <Container>
                <Row className="justify-content-center">
                  <Col>
                    <form onSubmit={this.handleSubmitComment}>
                      <div>
                        <InputGroup className="mb-3">
                          <InputGroup.Prepend>
                            <InputGroup.Text>Comment</InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl
                            id="text"
                            onChange={this.handleInput}
                            value={this.state.comment.text}
                            as="textarea"
                            aria-label="With textarea"
                          />
                          {this.state.comment.text}
                        </InputGroup>
                      </div>
                      <div>
                        <InputGroup className="mb-3">
                          <InputGroup.Prepend>
                            <InputGroup.Text>Rating</InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl
                            id="rating"
                            onChange={this.handleInput}
                            value={this.state.comment.rating}
                            aria-label="RATING"
                          />
                          <InputGroup.Append>
                            <InputGroup.Text>1/5</InputGroup.Text>
                          </InputGroup.Append>
                        </InputGroup>
                      </div>
                      <Button variant="secondary" type="submit">
                        Submit
                      </Button>
                    </form>
                  </Col>
                  <Col>2</Col>
                </Row>
              </Container>
            </section>
            <section>
              <h3>Releases</h3>
              <Row noGutters="false">
                {this.state.historyBooks.map((book, i) => {
                  return (
                    <Col
                      onClick={() => this.handleSelectBook(book.asin)}
                      key={book.asin}
                    >
                      <BookCard {...book} />
                    </Col>
                  )
                })}
              </Row>
            </section>
          </Container>
        </main>
        <Footer />
      </div>
    )
  }
}

export default App
