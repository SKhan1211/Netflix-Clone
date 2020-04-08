import { connect } from 'react-redux';
import React from 'react';
// import { Link } from 'react-router-dom';
import { fetchAllMovies } from '../../actions/content_actions';
import { createListItem, deleteListItem } from '../../actions/list_item_actions';
import Content from './content';

const mapStateToProps = state => ({
  movies: state.movies,
  listItems: state.listItems
});

const mapDispatchToProps = dispatch => ({
  fetchAllMovies: () => dispatch(fetchAllMovies()),
  createListItem: (userId, movieId) => dispatch(createListItem(userId, movieId)),
  deleteListItem: listItemId => dispatch(deleteListItem(listItemId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);