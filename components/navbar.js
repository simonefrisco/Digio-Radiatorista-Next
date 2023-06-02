import React from 'react'

import PropTypes from 'prop-types'

const Navbar = (props) => {
  return (
    <>
      <div className={`navbar-container ${props.rootClassName} `}>
        <header data-thq="thq-navbar" className="navbar-navbar">
          <div className="navbar-left">
            <img
              alt={props.Logo_alt}
              src={props.Logo_src}
              className="navbar-logo"
            />
          </div>
          <div data-thq="thq-navbar-btn-group" className="navbar-right">
            <nav className="navbar-links">
              <a href="#ourservice" className="navbar-link">
                {props.Link}
              </a>
              <a href="#tocontact" className="navbar-link1">
                {props.Link3}
              </a>
            </nav>
            <a href="#book" className="navbar-book button button-main">
              <img
                alt={props.image_alt1}
                src={props.image_src1}
                className="navbar-image"
              />
              <span href="#subform" className="navbar-link2">
                {props.Link31}
              </span>
            </a>
          </div>
          <div data-thq="thq-burger-menu" className="navbar-burger-menu">
            <svg viewBox="0 0 1024 1024" className="navbar-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="navbar-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="navbar-nav"
            >
              <div className="navbar-container1">
                <img
                  alt={props.Logo_alt1}
                  src={props.Logo_src1}
                  className="navbar-logo1"
                />
                <div data-thq="thq-close-menu" className="navbar-menu-close">
                  <svg viewBox="0 0 1024 1024" className="navbar-icon2">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="navbar-nav1"
              >
                <nav className="navbar-links1">
                  <a href="#ourservice" className="navbar-link3">
                    {props.Link4}
                  </a>
                  <a href="#tocontact" className="navbar-link4">
                    {props.Link32}
                  </a>
                </nav>
                <a href="#book" className="navbar-book1 button button-main">
                  <img
                    id="#subform"
                    alt={props.image_alt3}
                    src={props.image_src3}
                    className="navbar-image1"
                  />
                  <span href="#subform" className="navbar-link5">
                    {props.Link311}
                  </span>
                </a>
              </nav>
            </div>
          </div>
        </header>
      </div>
      <style jsx>
        {`
          .navbar-container {
            display: flex;
            position: relative;
            justify-content: space-between;
          }
          .navbar-navbar {
            flex: 1;
            width: 100%;
            display: flex;
            z-index: 100;
            max-width: auto;
            align-self: stretch;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: space-between;
          }
          .navbar-left {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navbar-logo {
            width: 165px;
            object-fit: cover;
          }
          .navbar-right {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .navbar-links {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          .navbar-link {
            cursor: pointer;
            font-style: normal;
            transition: 0.3s;
            font-weight: 500;
            line-height: 24px;
            text-decoration: none;
          }
          .navbar-link:hover {
            opacity: 0.5;
          }
          .navbar-link1 {
            cursor: pointer;
            font-style: normal;
            transition: 0.3s;
            font-weight: 500;
            line-height: 24px;
            text-decoration: none;
          }
          .navbar-link1:hover {
            opacity: 0.5;
          }
          .navbar-book {
            text-decoration: none;
          }
          .navbar-image {
            width: 18px;
            object-fit: cover;
          }
          .navbar-link2 {
            cursor: pointer;
            font-style: normal;
            transition: 0.3s;
            font-weight: 500;
            line-height: 24px;
            text-decoration: none;
          }
          .navbar-link2:hover {
            opacity: 0.5;
          }
          .navbar-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .navbar-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navbar-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 1000;
            position: fixed;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .navbar-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .navbar-logo1 {
            width: 165px;
            object-fit: cover;
          }
          .navbar-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navbar-icon2 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navbar-nav1 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-links1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navbar-link3 {
            cursor: pointer;
            font-style: normal;
            transition: 0.3s;
            font-weight: 500;
            line-height: 24px;
            text-decoration: none;
          }
          .navbar-link3:hover {
            opacity: 0.5;
          }
          .navbar-link4 {
            cursor: pointer;
            font-style: normal;
            transition: 0.3s;
            font-weight: 500;
            line-height: 24px;
            text-decoration: none;
          }
          .navbar-link4:hover {
            opacity: 0.5;
          }
          .navbar-book1 {
            text-decoration: none;
          }
          .navbar-image1 {
            width: 18px;
            object-fit: cover;
          }
          .navbar-link5 {
            cursor: pointer;
            font-style: normal;
            transition: 0.3s;
            font-weight: 500;
            line-height: 24px;
            text-decoration: none;
          }
          .navbar-link5:hover {
            opacity: 0.5;
          }
          .navbar-root-class-name {
            align-self: stretch;
          }
          @media (max-width: 1600px) {
            .navbar-container {
              justify-content: space-between;
            }
            .navbar-navbar {
              width: 100%;
              padding: var(--dl-space-space-oneandhalfunits);
              max-width: auto;
              align-self: stretch;
              flex-direction: row;
              justify-content: space-between;
            }
            .navbar-left {
              align-self: flex-start;
              justify-content: flex-start;
            }
            .navbar-links {
              padding-right: 12px;
            }
            .navbar-links1 {
              padding-right: 12px;
            }
            .navbar-root-class-name {
              align-self: stretch;
            }
          }
          @media (max-width: 1200px) {
            .navbar-container {
              width: 100%;
              flex-direction: row;
              justify-content: flex-start;
            }
            .navbar-navbar {
              width: 100%;
              z-index: 1000;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              justify-content: space-between;
            }
            .navbar-left {
              align-self: flex-start;
              flex-direction: row;
            }
            .navbar-root-class-name {
              align-self: stretch;
            }
          }
          @media (max-width: 991px) {
            .navbar-container {
              width: 100%;
              justify-content: space-between;
            }
            .navbar-navbar {
              z-index: 1000;
              justify-content: space-between;
            }
            .navbar-right {
              display: none;
            }
            .navbar-links {
              display: none;
            }
            .navbar-burger-menu {
              display: flex;
              padding: var(--dl-space-space-unit);
              border-radius: var(--dl-radius-radius-round);
              background-color: #2461ff;
            }
            .navbar-icon {
              fill: white;
            }
            .navbar-nav {
              align-items: center;
            }
            .navbar-nav1 {
              align-items: center;
            }
            .navbar-links1 {
              flex-direction: column;
              padding-bottom: 60px;
            }
            .navbar-root-class-name {
              align-self: stretch;
            }
          }
          @media (max-width: 470px) {
            .navbar-container {
              width: 100%;
              justify-content: space-between;
            }
            .navbar-navbar {
              width: 100%;
            }
            .navbar-root-class-name {
              align-self: stretch;
            }
          }
          @media (max-width: 385px) {
            .navbar-container {
              justify-content: space-between;
            }
            .navbar-navbar {
              width: 100%;
              padding: var(--dl-space-space-unit);
            }
            .navbar-mobile-menu {
              padding: 16px;
            }
            .navbar-nav {
              align-items: flex-start;
            }
            .navbar-nav1 {
              align-items: flex-start;
            }
            .navbar-links1 {
              display: flex;
              flex-direction: column;
              padding-bottom: 60px;
            }
            .navbar-root-class-name {
              align-self: stretch;
            }
          }
        `}
      </style>
    </>
  )
}

Navbar.defaultProps = {
  text6: 'Contatta',
  image_src: '4128eece-2ecf-401b-b1a5-2e0c5636ce2a',
  Link4: 'Servizi',
  text5: 'Contact',
  text: '+0 123-456-789',
  Link311: 'Prenota un appuntamento',
  image_src2: 'f721f4b6-c1d3-4c7d-90ca-255a80116cec',
  Link31: 'Prenota un appuntamento',
  Link: 'Servizi',
  Link2: 'Prices',
  image_alt: 'image',
  image_alt3: 'image',
  text2: 'Features',
  Logo_alt: 'image',
  text4: 'Prices',
  Link32: 'Contatti',
  Logo_alt1: 'image',
  Link3: 'Contatti',
  text1: 'Book an appointment',
  image_alt1: 'image',
  image_src1: '/Icons/calendar.svg',
  rootClassName: '',
  Logo_src: '/Branding/logo1-1500h.png',
  image_alt2: 'image',
  Logo_src1: '/Branding/logo1-1500h.png',
  text3: 'How it works',
  image_src3: '/Icons/calendar.svg',
  Link1: 'How it works',
}

Navbar.propTypes = {
  text6: PropTypes.string,
  image_src: PropTypes.string,
  Link4: PropTypes.string,
  text5: PropTypes.string,
  text: PropTypes.string,
  Link311: PropTypes.string,
  image_src2: PropTypes.string,
  Link31: PropTypes.string,
  Link: PropTypes.string,
  Link2: PropTypes.string,
  image_alt: PropTypes.string,
  image_alt3: PropTypes.string,
  text2: PropTypes.string,
  Logo_alt: PropTypes.string,
  text4: PropTypes.string,
  Link32: PropTypes.string,
  Logo_alt1: PropTypes.string,
  Link3: PropTypes.string,
  text1: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src1: PropTypes.string,
  rootClassName: PropTypes.string,
  Logo_src: PropTypes.string,
  image_alt2: PropTypes.string,
  Logo_src1: PropTypes.string,
  text3: PropTypes.string,
  image_src3: PropTypes.string,
  Link1: PropTypes.string,
}

export default Navbar
