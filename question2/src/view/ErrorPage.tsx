import React from "react";
import { Link } from "react-router-dom";
import InternalServerError from "../assets/images/InternalServerError.jpg";
import { Button } from "@material-ui/core";
class ErrorPage extends React.Component {
  render() {
    return (
      <div>
        <img
          alt="error"
          src={InternalServerError}
          className="not-found-image"
        />
        <p style={{ textAlign: "center" }}>
          <Link to="/">
            <Button variant="contained" color="primary" disableElevation>
              Go To Home
            </Button>
          </Link>
        </p>
      </div>
    );
  }
}
export default ErrorPage;
