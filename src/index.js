import "./main.css";
import './ui-library/styles/tooltip.css';
import Tooltip from "./ui-library/tooltip";

const tooltip = new Tooltip(document.querySelector('.tooltip'))
tooltip.init();