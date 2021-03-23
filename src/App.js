import React, { Component } from "react";

// Components
import NavBar from "./components/Navbar";
import HeaderJumbotron from "./components/HeaderJumbotron";
import BookCard from "./components/BookCard";
import Footer from "./components/Footer";

// mock data
import { historyBooks } from "./mocks/history-books";

// Bootstrap Components and custom styles
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";

class App extends Component {
  state = {
    historyBooks: historyBooks,
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <main>
          <Container fluid>
            <section className="hero=wrapper">
              <HeaderJumbotron />
            </section>
            <section className="releases-wrapper">
              <h3>Releases</h3>
              <Row noGutters="false">
                {this.state.historyBooks.map((book, i) => {
                  return (
                    <Col key={book.asin}>
                      <BookCard {...book} />
                    </Col>
                  );
                })}
              </Row>
            </section>
          </Container>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
