import React from 'react';
import style from '../../App.module.css';

class SearchBar extends React.Component {
  state = {
    query: '',
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.getQuery(this.state.query);

    this.setState({ query: '' });
  };

  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <header className={style.Searchbar}>
        <form className={style.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={style.SearchFormButton}>
            <span className={style.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={style.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            name={'query'}
            value={this.props.query}
            placeholder="Search images and photos"
            onChange={this.handleInput}
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
