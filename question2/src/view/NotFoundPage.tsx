import React from "react";
import { Link } from "react-router-dom";
import PageNotFound from "../assets/images/PageNotFound.jpg";
import { Button } from "@material-ui/core";
class NotFoundPage extends React.Component {
  render() {
    return (
      <div>
        <img
          alt="page_not_found"
          src={PageNotFound}
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
export default NotFoundPage;
