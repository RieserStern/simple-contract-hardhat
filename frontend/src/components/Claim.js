import React from "react";

export function Claim({ claimTokens }) {
    return (
        <div>
            <h4>Smart Token</h4>
        <form
            onSubmit={(event) => {
            // This function just calls the transferTokens callback with the
            // form's data.
            event.preventDefault();

            const formData = new FormData(event.target);
            const claimAmount = formData.get("claimAmount");

            claimTokens(claimAmount);
            
            }}
        >
            <div className="form-group">
            {/* <label>Amount of {tokenSymbol}</label> */}
            <input
                className="form-control"
                type="number"
                step="1"
                name="claimAmount"
                placeholder="0"
                required
            />
            </div>
            <div className="form-group">
            <input className="btn btn-primary" type="submit" value="Claim" />
            </div>
        </form>
        </div>
    )
}
