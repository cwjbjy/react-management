import Header from "../components/header/index.jsx";
import Menus from "../components/menus/index.jsx";

import "./index.scss";
import { Fragment } from "react";

const AppHome = (props) => {
  return (
    <Fragment>
      <Header />
      <main className="wrapper">
        <aside>
          <Menus />
        </aside>
        <article>{props.routes}</article>
      </main>
    </Fragment>
  );
};

export default AppHome;
