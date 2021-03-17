import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Project from "../Projects/Project";
import projectStorage from "../../firebase";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor: "transparent",
    color: "white",
    display: "flex",
    flexDirection: "column",

    background: "#151618",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,

    margin: "auto",
    marginTop: "3%",
  },
  tabPanel: {
    display: "flex",
    justifyContent: "space-evenly",
    padding: "30px",
    flexWrap: "wrap",
  },
}));

function TabsComponent() {
  //

  const [reactProjects, setReactProjects] = useState([]);
  useEffect(() => {
    projectStorage
      .collection("reactProjects")
      // .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setReactProjects(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        )
      );
  }, []);
  const [webDevProjects, setWebDevProjects] = useState([]);
  useEffect(() => {
    projectStorage
      .collection("webdevProjects")
      // .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setWebDevProjects(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        )
      );
  }, []);
  const [appProjects, setAppProjects] = useState([]);
  useEffect(() => {
    projectStorage
      .collection("appProjects")
      // .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setAppProjects(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        )
      );
  }, []);
  const [components, setComponents] = useState([]);
  useEffect(() => {
    projectStorage
      .collection("components")
      // .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setComponents(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        )
      );
  }, []);
  //
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    // <div className="tabs">
    <div className={classes.root}>
      <Tabs
        orientation="horizontal"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="React Projects" {...a11yProps(0)} />
        <Tab label="HTML CSS JS" {...a11yProps(1)} />
        <Tab label="Flutter / Android" {...a11yProps(2)} />

        <Tab label="React Components" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div className={classes.tabPanel}>
          {reactProjects.map((project) => (
            <Project
              key={project.id}
              projectName={project.data.name}
              liveLink={project.data.live}
              githubLink={project.data.github}
              image={project.data.image}
            />
          ))}
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className={classes.tabPanel}>
          {webDevProjects.map((project) => (
            <Project
              key={project.id}
              projectName={project.data.name}
              liveLink={project.data.live}
              githubLink={project.data.github}
              image={project.data.image}
            />
          ))}
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className={classes.tabPanel}>
          {appProjects.map((project) => (
            <Project
              key={project.id}
              projectName={project.data.name}
              liveLink={project.data.live}
              githubLink={project.data.github}
              image={project.data.image}
            />
          ))}
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className={classes.tabPanel}>
          {components.map((project) => (
            <Project
              key={project.id}
              projectName={project.data.name}
              liveLink={project.data.live}
              githubLink={project.data.github}
              image={project.data.image}
            />
          ))}
        </div>{" "}
      </TabPanel>
    </div>
    // </div>
  );
}

export default TabsComponent;
