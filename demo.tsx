import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button/Button";

import { Allotment } from "allotment";
import "allotment/dist/style.css";
import { useAppDispatch, useAppSelector } from "./hooks";
import { openPanel, closePanel, Panel } from "./perspectiveSlice";

export default function SimpleContainer() {
  const dispatch = useAppDispatch();
  const panels: Panel[] = useAppSelector((state) => state.panels);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Button onClick={(e) => dispatch(openPanel())}>Open Panel</Button>
        <Box sx={{ bgcolor: "#cfe8fc", height: "80vh" }}>
          <Allotment snap>
            {panels.map((p) => (
              <Allotment.Pane key={p.id}>
                <div style={{ height: "100%", backgroundColor: "#ccc" }}>
                  {p.label}{" "}
                  <Button onClick={(e) => dispatch(closePanel(p.id))}>
                    Close Panel
                  </Button>
                </div>
              </Allotment.Pane>
            ))}
          </Allotment>
        </Box>
      </Container>
    </React.Fragment>
  );
}
