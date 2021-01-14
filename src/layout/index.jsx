import Header from "../components/header/index.jsx";
import Menus from "../components/menus/index.jsx";
import { connect } from "react-redux";
import "./index.scss";


const AppHome = (props) => {
  return (
    <div className={props.themeColor}>
      <Header />
      <main className="wrapper">
        <aside>
          <Menus />
        </aside>
        <article>{props.routes}</article>
      </main>
    </div>
  );
};

const mapStateToProps = (state)=>{
  return state.theme
}

export default connect(mapStateToProps,null)(AppHome);
