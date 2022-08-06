import { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { FaSearch } from 'react-icons/fa';

import css from '../Gallery/Styles.module.css';

class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    query: '',
  };

  handleQueryChange = evt => {
    this.setState({ query: evt.currentTarget.value.toLowerCase() });
  };

  handleSubmit = evt => {
    const { query } = this.state;
    const { onSubmit } = this.props;
    evt.preventDefault();
    if (!query.trim()) {
      toast.error('Please, enter search query.');
      return;
    }
    onSubmit(query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    return (
      <>
        <header className={css.searchbar}>
          <form className={css.searchForm} onSubmit={this.handleSubmit}>
            <button type="submit" className={css.searchFormBtn}>
              <FaSearch />
            </button>
            <input
              className={css.searchFormInput}
              type="text"
              value={query}
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleQueryChange}
            />
          </form>
        </header>
      </>
    );
  }
}

export default Searchbar;
