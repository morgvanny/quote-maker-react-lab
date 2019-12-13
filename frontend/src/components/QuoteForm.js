import React, { Component } from "react";
import { connect } from "react-redux";
import { createQuote } from "../actions/quotes";

class QuoteForm extends Component {
  state = {
    content: "",
  };

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createQuote({ ...this.state, votes: 0 });
    this.setState({ content: "" });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form
                  onSubmit={this.handleOnSubmit}
                  className="form-horizontal"
                >
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">
                      Quote
                    </label>
                    <div className="col-md-5">
                      <textarea
                        name="content"
                        onChange={this.handleOnChange}
                        className="form-control"
                        value={this.state.content}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">
                        Add
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     addQuote: quote => dispatch(addQuote(quote))
//   };
// };

//add arguments to connect as needed
export default connect(null, { createQuote })(QuoteForm);
