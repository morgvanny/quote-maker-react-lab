import React, { Component } from "react";
import { connect } from "react-redux";
import QuoteCard from "../components/QuoteCard";
import { upvoteQuote, downvoteQuote, deleteQuote } from "../actions/quotes";

class Quotes extends Component {
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
                  handleDelete={this.props.deleteQuote}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(argument) {
  return { quotes: argument.quotes };
}

export default connect(mapStateToProps, {
  upvoteQuote,
  downvoteQuote,
  deleteQuote
})(Quotes);
