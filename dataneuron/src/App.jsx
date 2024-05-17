import React from "react";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import { Resize, ResizeVertical, ResizeHorizon } from "react-resize-layout"; // Importing components from react-resize-layout library
import "./App.css";

const App = () => {
  return (
    <>
      {/* <NavBar /> */}
      <Resize>
        <ResizeVertical height="50%" minHeight="250px">
          <Resize handleWidth="3px">
            <ResizeHorizon width="50%" minWidth="160px">
              <First />
            </ResizeHorizon>

            <ResizeHorizon width="50%" minWidth="160px">
              <Second />
            </ResizeHorizon>
          </Resize>
        </ResizeVertical>

        <ResizeVertical height="50%" minHeight="100px">
          <Resize>
            <Third />
          </Resize>
        </ResizeVertical>
      </Resize>
    </>
  );
};

export default App;