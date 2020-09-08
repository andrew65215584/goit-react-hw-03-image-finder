import React, { Component } from 'react';
import axios from 'axios';
// import style from './App.module.css';

import SearchBar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import Load from './components/Loader/Loader';

const apiKey = '17947468-54ca6cabf086bd192346cc10e';

class App extends Component {
  state = {
    articles: [],
    isLoading: false,
    query: '',
    currentPage: 1,
    modalVisible: false,
    currentId: 736877,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchArticles();
    }

    if (prevState.articles !== this.state.articles) {
      setTimeout(() => {
        window.scrollTo({
          top: document.documentElement.clientHeight,
          behavior: 'smooth',
        });
      }, 2000);
    }
  }

  // scroll = () => {

  // }

  toogleModal = () => {
    this.setState(prevState => {
      return {
        modalVisible: !prevState.modalVisible,
      };
    });
  };

  getCurrentId = id => {
    this.setState({ currentId: id });
  };

  getCurrentImage = () => {
    const filteredEl = this.state.articles.filter(
      el => el.id === this.state.currentId,
    );

    let el = filteredEl[0];

    return el.webformatURL;
  };

  getQuery = query => {
    this.setState({ query: query, currentPage: 1, articles: [] });
  };

  fetchArticles = () => {
    this.setState({ isLoading: true });

    axios
      .get(
        `https://pixabay.com/api/?q=${this.state.query}&page=${this.state.currentPage}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`,
      )
      .then(response => {
        this.setState(prevState => ({
          articles: [...prevState.articles, ...response.data.hits],
          isLoading: false,
          currentPage: prevState.currentPage + 1,
        }));

        //  setTimeout(() => {
        //  window.scrollTo({
        //    top: document.documentElement.clientHeight - 400,
        //    behavior: 'smooth',
        //  });
        //  }, 500);
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    return (
      <div>
        <SearchBar getQuery={this.getQuery} />

        <ImageGallery
          articlesArr={this.state.articles}
          toogleModal={this.toogleModal}
          getCurrentId={this.getCurrentId}
        />

        {this.state.articles.length > 0 ? (
          <Button fetch={this.fetchArticles} />
        ) : (
          ''
        )}

        {this.state.isLoading && <Load />}

        {this.state.modalVisible && (
          <Modal
            toogleModal={this.toogleModal}
            getCurrentImage={this.getCurrentImage}
          >
            <h1>This is modal</h1>
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
