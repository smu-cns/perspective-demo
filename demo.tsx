import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button/Button";
import Paper from "@mui/material/Paper";

import { Allotment } from "allotment";
import "allotment/dist/style.css";
import { useAppDispatch, useAppSelector } from "./hooks";
import { openPanel, closePanel, Panel } from "./perspectiveSlice";
import { AppBar, IconButton } from "@mui/material";
import AddRoad from "@mui/icons-material/AddRoad";

const styles = {
  appRoot: {
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  },

  appContentContainer: {
    flex: "1 1 auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch"
  },

  header: {
    height: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },

  actionBar: {
    width: 64,
    flex: "0 1"
  },

  mainArea: {
    display: "flex",
    flex: "1 1 auto",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "stretch"
  },

  tabContainer: {
    flexGrow: 4,
    position: "relative",
    overflow: "hidden"
  }
};

export default function SimpleContainer() {
  const dispatch = useAppDispatch();

  const panels: Panel[] = useAppSelector((state) => state.panels);

  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={styles.appRoot}>
        <AppBar position="relative" elevation={1} sx={styles.header}>
          Perspective Demo
        </AppBar>

        <Box sx={styles.appContentContainer}>
          <Box sx={styles.actionBar}>
            <Paper elevation={1}>
              <IconButton onClick={(e) => dispatch(openPanel())}>
                <AddRoad />
              </IconButton>
            </Paper>
          </Box>

          <Box sx={styles.mainArea}>
            <Box sx={styles.tabContainer}>
              <Allotment snap>
                {panels.map((p) => (
                  <Allotment.Pane key={p.id}>
                    <div style={{ height: "100%", backgroundColor: "#ccc" }}>
                      {p.label}{" "}
                      <Button
                        onClick={(e) => dispatch(closePanel(p.id))}
                        variant="outlined"
                      >
                        Close Panel
                      </Button>
                      <Button
                        onClick={(e) => dispatch(openPanel(p.id))}
                        variant="outlined"
                      >
                        Split
                      </Button>
                    </div>
                  </Allotment.Pane>
                ))}
              </Allotment>
            </Box>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}
