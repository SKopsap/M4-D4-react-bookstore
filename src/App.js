import React, { Component } from 'react'

// Components
import NavBar from './components/Navbar'
import Hero from './components/Hero'
import BookCard from './components/BookCard'
import Footer from './components/Footer'

// Mocks
import { historyBooks } from './mocks/history-books'

// Services
import { GET_ALL_COMMENTS, ADD_COMMENT } from './services/comments.service'

// Bootstrap Components and custom styles
import { Container, Row, Col } from 'react-bootstrap'
import './App.css'

// The Comment structure is this:

// {
//   "comment": "A good book but definitely I don't like many parts of the plot",
//   "rate": 3,
//   "elementId": "0316438960"
// }

class App extends Component {
  state = {
    historyBooks: historyBooks,
    comments: []
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
            <section>{/* COMMMENT FORM */}</section>
            <section>
              <h3>Releases</h3>
              <Row noGutters="false">
                {this.state.historyBooks.map((book, i) => {
                  return (
                    <Col key={book.asin}>
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
