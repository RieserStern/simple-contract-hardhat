import React from "react";

export function ClaimErrorMessage({ message, dismiss }) {
  return (
    <div className="alert alert-danger" role="alert">
      Error sending claimToken: {message.substring(0, 100)}
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={dismiss}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}
