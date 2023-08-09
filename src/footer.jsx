import React from "react";

export default function Footer() {
  var today = new Date();
  return (
    <footer className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <h5>Team Member allocation-{today.getFullYear()}</h5>
        </div>
      </div>
    </footer>
  );
}
