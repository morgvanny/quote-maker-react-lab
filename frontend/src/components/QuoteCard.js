import React from "react";

const QuoteCard = ({
  content,
  user,
  handleUpvote,
  handleDownvote,
  id,
  votes,
  handleDestroy
}) => (
  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          <p>{content}</p>
          <footer>
            - <cite title="Source Title">{user.username}</cite>
          </footer>
        </blockquote>
      </div>
      <div className="float-right">
        <div
          className="btn-group btn-group-sm"
          role="group"
          aria-label="Basic example"
        >
          <button
            onClick={() => handleUpvote(id, votes)}
            type="button"
            className="btn btn-primary"
          >
            Upvote
          </button>
          <button
            onClick={() => handleDownvote(id, votes)}
            type="button"
            className="btn btn-secondary"
          >
            Downvote
          </button>
          <button
            onClick={() => handleDestroy(id)}
            type="button"
            className="btn btn-danger"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div>Votes: {votes}</div>
      </div>
    </div>
  </div>
);

export default QuoteCard;
