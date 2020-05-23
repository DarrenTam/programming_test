import React from "react";
import {
  makeStyles,
  Card,
  Avatar,
  CardHeader,
  CardContent,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";

interface IProps {
  iconPath: string;
  name: string;
  email: string;
  id: string;
  rel: boolean;
  lat?: number;
  long?: number;
}
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 10,
    marginBottom: 10,
  },
}));

export default function PeopleCard(props: React.PropsWithChildren<IProps>) {
  const { iconPath, name, email, id, rel, lat, long } = props;
  const classes = useStyles();

  return rel ? (
    <Link to={"/map?id=" + id}>
      <Card className={classes.root}>
        <CardHeader
          avatar={<Avatar aria-label="recipe" src={iconPath} />}
          title={name ?? "user"}
          subheader={email ?? "user@undefined.com"}
        />
      </Card>
    </Link>
  ) : (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar aria-label="recipe" src={iconPath} />}
        title={name ?? "user"}
        subheader={email ?? "user@undefined.com"}
      />
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Lat {lat ?? 0} , Long {long ?? 0}
        </Typography>
      </CardContent>
    </Card>
  );
}
