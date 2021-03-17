import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import { GitHub, LinkOutlined } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  root: {
    width: 300,
    height: 350,
    borderRadius: "10px",
    background: "#25282c",
    margin: 30,
    color: "white",
  },
  media: {
    height: "0",
    paddingTop: "56.25%",
    margin: "10px",
    borderRadius: "10px",
  },
  icon: {
    color: "white",
    transition: "0.2s ease-in",
    "&:hover, &:focus": {
      color: "#e91e63",
    },
  },
  title: {
    marginTop: "7px",
    cursor: "pointer",
    transition: "0.2s ease-in",
    "&:hover, &:focus": {
      color: "#e91e63",
    },
  },
}));

function Project({ projectName, liveLink, githubLink, image }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader className={classes.title} title={projectName} />
      <CardMedia className={classes.media} image={image} />

      <CardActions>
        <IconButton href={liveLink} target="blank">
          <LinkOutlined className={classes.icon} />
        </IconButton>
        <IconButton href={githubLink} target="__blank">
          <GitHub className={classes.icon} />
        </IconButton>
      </CardActions>
    </Card>
  );
}
export default Project;
