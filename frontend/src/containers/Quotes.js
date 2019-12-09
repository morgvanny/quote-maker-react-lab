import React, { Component } from "react";
import { connect } from "react-redux";
import QuoteCard from "../components/QuoteCard";
import {
  upvoteQuote,
  downvoteQuote,
  destroyQuote,
  fetchQuotes
} from "../actions/quotes";

class Quotes extends Component {
  componentDidMount() {
    this.props.fetchQuotes();
  }

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.props.quotes.map(q => (
                <QuoteCard
                  key={q.id}
                  {...q}
                  handleUpvote={this.props.upvoteQuote}
                  handleDownvote={this.props.downvoteQuote}
                  handleDestroy={this.props.destroyQuote}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ quotes }) {
  return { quotes };
}

export default connect(mapStateToProps, {
  upvoteQuote,
  downvoteQuote,
  destroyQuote,
  fetchQuotes
})(Quotes);
