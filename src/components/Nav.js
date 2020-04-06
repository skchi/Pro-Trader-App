import React, {Component} from "react";
import {NavLink, Link} from "react-router-dom";

import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChartLine, faHome, faDesktop} from "@fortawesome/free-solid-svg-icons";

const Navigation = styled.header`
  width: 100%;
  border-bottom: 0.2em solid #222;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 1em 0;
  height: 10vh;
  margin-bottom: 0.5em;
  background: #1B2634;

  .logo a {
    padding-top: 1em;
    display: flex;
    flex-direction: column;
    clear: both;
    padding-bottom: 1em;
    text-decoration: none;

    p {
      width: 10em;
      display: block;
      font-size: 1.5em;
      font-weight: bold;
    }
  }
  .gray {
    color: #ccc;
  }
  a {
    color: #e8e8e8;
    opacity: 0.55;
    transition: all 0.6s;
    font-size: 1em;
  }
  a:hover {
    opacity: 1;
  }
  nav {
    div {
      display: flex;
      justify-content: space-between;
    }
    span {
      margin: 0 15px;
      justify-content: space-between;
      font-size: 1em;
    }
    a {
      font-size: 1em;
      text-decoration: none;
      .active {
        color: tomato;
      }
    }
    a.active {
      color: #fff;
    }
  }

  @media only screen and (max-width: 800px) {
    padding: 0px;
    .logo {
      padding-left: 15px;
      padding-top: 0px !important;
    }
  }
  @media only screen and (max-width: 600px) {
    height: auto;
    min-height: 50px;
    display: block;
    position: relative;
    .logo {
      width: 100%;
      display: block;
      padding-top: 20px;
      margin: 0px;
      margin-left: -5px;
      a {
        padding: 20px 0px;
      }
    }
    div.collapsed {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-wrap: wrap;

      overflow: hidden;
      max-height: 0;
      -moz-transition-duration: 0.4s;
      -webkit-transition-duration: 0.4s;
      -o-transition-duration: 0.4s;
      transition-duration: 0.4s;
      -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      transition-timing-function: cubic-bezier(0, 1, 0.5, 1);

      &.is-expanded {
        overflow: hidden;
        max-height: 500px; /* approximate max height */
        -moz-transition-duration: 0.4s;
        -webkit-transition-duration: 0.4s;
        -o-transition-duration: 0.4s;
        transition-duration: 0.4s;
        -moz-transition-timing-function: ease-in;
        -webkit-transition-timing-function: ease-in;
        -o-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
      }
      span {
        padding: 15px 10px;
        margin: 0px 0px;
        width: 100%;
      }
    }
  }
`;

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
  }

  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  }

  render() {
    const {isExpanded} = this.state;

    return (
      <Navigation>
        <div className="logo">
          <Link to="/">
            <p><FontAwesomeIcon icon={faChartLine}/>&nbsp;Pro Trader App</p>
          </Link>
        </div>
        <nav className="nav">
          <div className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
            <NavLink activeClassName="active" to="/">
              <span onClick={e => this.handleToggle(e)}><FontAwesomeIcon icon={faHome}/>&nbsp;Home</span>
            </NavLink>
            <NavLink activeClassName="active" to="/screener">
              <span onClick={e => this.handleToggle(e)}><FontAwesomeIcon icon={faDesktop}/>&nbsp;Screener</span>
            </NavLink>
          </div>
        </nav>
      </Navigation>
    );
  }
}

export default Nav;
