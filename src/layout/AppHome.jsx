import { Component } from "react";
import Header from "../components/header/index.jsx";
import Menus from "../components/menus/index.jsx";
import RouterView from "@/routes/routerView.jsx";

import "./index.scss";
export default class AppHome extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <aside>
            <Menus />
          </aside>
          <article>
            <RouterView routes={this.props.routes} />
          </article>
        </main>
      </>
    );
  }
}
