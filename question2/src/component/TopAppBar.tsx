import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import { Typography } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link } from "react-router-dom";

interface IProps {
  homePage: boolean;
  title: string;
}

export default function TopAppBar(props: React.PropsWithChildren<IProps>) {
  const { homePage, title } = props;

  return (
    <AppBar position="static" color="inherit">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          {homePage ? (
            <Link to="/">
              <ArrowBackIosIcon />
            </Link>
          ) : (
            <></>
          )}
        </IconButton>
        <Typography
          variant="subtitle1"
          align="center"
          className="font-black-bold"
        >
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
