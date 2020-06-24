import React from 'react';
import { connect } from "react-redux";
import { getMovies } from '../actions/getMovies';
class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Title: "",
      Year: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(this.props)
  }
  showValues() {
    return this.props.movie.data.map((item, index) => (
      <p>{item.Title}</p>
    ));
  }
  handleSubmit(event) {
    alert('You selected: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <div>
        {this.showValues()}
        <form style={{ padding: 10 }} onSubmit={this.handleSubmit}>
          <label>
            Pick your genre:
          <select value={this.state.value} onChange={this.handleChange}>
              <option value="movies">Movies</option>
              <option value="episodes">Episodes</option>
              <option value="series">Series</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    movie: store.movie,
  };
};

export default connect(
  mapStateToProps, {
  getMovies,
}
)(Movie);