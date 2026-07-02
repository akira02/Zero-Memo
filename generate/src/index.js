import { h, render } from "preact";
import { App } from "./components";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

render(h(App), document.getElementById("app"));
