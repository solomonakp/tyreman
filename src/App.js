import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadUser } from './redux/actions/authActions';
import {
  showSpinner,
  hideSpinner,
  initialLoad,
  lightNav,
  darkNav,
} from './redux/actions/uiActions';
import PropTypes from 'prop-types';
import theme from './components/theme';
// css start
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactNotification from 'react-notifications-component';
import overlayStyles from 'overlayscrollbars/css/OverlayScrollbars.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications-component/dist/theme.css';
import 'hamburgers/dist/hamburgers.min.css';
import 'animate.css/animate.compat.css';
// css end

// fonts
import CircularStdItEot from './assets/font/CircularStd-MediumItalic.eot';
import CircularStdItWf2 from './assets/font/CircularStd-MediumItalic.woff2';
import CircularStdItWf from './assets/font/CircularStd-MediumItalic.woff';
import CircularStdItTtf from './assets/font/CircularStd-MediumItalic.ttf';

import CircularStdBlackEot from './assets/font/CircularStd-Black.eot';
import CircularStdBlackWf2 from './assets/font/CircularStd-Black.woff2';
import CircularStdBlackWf from './assets/font/CircularStd-Black.woff';
import CircularStdBlackTtf from './assets/font/CircularStd-Black.ttf';

import CircularStdEot from './assets/font/CircularStd-Medium.eot';
import CircularStdWf2 from './assets/font/CircularStd-Medium.woff2';
import CircularStdWf from './assets/font/CircularStd-Medium.woff';
import CircularStdTtf from './assets/font/CircularStd-Medium.ttf';

import CircularStdBoldEot from './assets/font/CircularStd-Bold.eot';
import CircularStdBoldWf2 from './assets/font/CircularStd-Bold.woff2';
import CircularStdBoldWf from './assets/font/CircularStd-Bold.woff';
import CircularStdBoldTtf from './assets/font/CircularStd-Bold.ttf';

import CircularStdBlackItEot from './assets/font/CircularStd-BlackItalic.eot';
import CircularStdBlackItWf2 from './assets/font/CircularStd-BlackItalic.woff2';
import CircularStdBlackItWf from './assets/font/CircularStd-BlackItalic.woff';
import CircularStdBlackItTtf from './assets/font/CircularStd-BlackItalic.ttf';

import CircularBookItEot from './assets/font/CircularStd-BookItalic.eot';
import CircularBookItWf2 from './assets/font/CircularStd-BookItalic.woff2';
import CircularBookItWf from './assets/font/CircularStd-BookItalic.woff';
import CircularBookItTtf from './assets/font/CircularStd-BookItalic.ttf';

import CircularStdBoldItEot from './assets/font/CircularStd-BoldItalic.eot';
import CircularStdBoldItWf2 from './assets/font/CircularStd-BoldItalic.woff2';
import CircularStdBoldItWF from './assets/font/CircularStd-BoldItalic.woff';
import CircularStdBoldItTtf from './assets/font/CircularStd-BoldItalic.ttf';

import CircularBookEot from './assets/font/CircularStd-Book.eot';
import CircularBookWf2 from './assets/font/CircularStd-Book.woff2';
import CircularBookWf from './assets/font/CircularStd-Book.woff';
import CircularBookTtf from './assets/font/CircularStd-Book.ttf';
// fonts end
// components
import Auth from './pages/auth';
import NotFound from './pages/NotFound.js';
import { prerenderedLoadable } from './components/prerenderedLoadable';

const Home = prerenderedLoadable(() => import('./pages/index'));
const About = prerenderedLoadable(() => import('./pages/about'));
const Tyres = prerenderedLoadable(() => import('./pages/tyres'));
const Contact = prerenderedLoadable(() => import('./pages/contact'));
const DeliveryInformation = prerenderedLoadable(() =>
  import('./pages/deliveryInformation')
);
const TermsAndConditions = prerenderedLoadable(() =>
  import('./pages/termsAndConditions')
);
const PrivacyPolicy = prerenderedLoadable(() =>
  import('./pages/privacyPolicy')
);

class App extends Component {
  componentDidMount = () => {
    this.props.loadUser();
  };

  static propTypes = {
    userLoading: PropTypes.bool.isRequired,
    loadUser: PropTypes.func.isRequired,
    spinner: PropTypes.bool.isRequired,
    initialLoad: PropTypes.func.isRequired,
    init: PropTypes.bool.isRequired,
    showSpinner: PropTypes.func.isRequired,
    hideSpinner: PropTypes.func.isRequired,
    bannerIsLight: PropTypes.bool.isRequired,
    lightNav: PropTypes.func.isRequired,
    darkNav: PropTypes.func.isRequired,
  };

  render() {
    const appProps = { ...this.props };
    return (
      <Router>
        <div className='App'>
          <ReactNotification isMobile={true} breakpoint={425} />
          <Switch>
            <Route
              exact
              path='/'
              render={(props) => <Home {...props} {...appProps} />}
            />
            <Route
              exact
              path='/about'
              render={(props) => <About {...props} {...appProps} />}
            />
            <Route
              exact
              path='/auth'
              render={(props) => <Auth {...props} {...appProps} />}
            />
            <Route
              exact
              path='/delivery-information'
              render={(props) => (
                <DeliveryInformation {...props} {...appProps} />
              )}
            />
            <Route
              exact
              path='/terms-and-conditions'
              render={(props) => (
                <TermsAndConditions {...props} {...appProps} />
              )}
            />
            <Route
              exact
              path='/privacy-policy'
              render={(props) => <PrivacyPolicy {...props} {...appProps} />}
            />
            <Route
              exact
              path='/tyres'
              render={(props) => <Tyres {...props} {...appProps} />}
            />
            <Route
              exact
              path='/contact'
              render={(props) => <Contact {...props} {...appProps} />}
            />
            <Route exact path='/shell.html' render={() => null} />
            <Route
              exact
              render={(props) => <NotFound {...props} {...appProps} />}
            />
          </Switch>
        </div>
        <style jsx global>
          {overlayStyles}
        </style>
        <style jsx global>
          {`
            /*  fonts */
            /* standard medium italic */
            @font-face {
              font-family: 'Circular Std';
              src: url(${CircularStdItEot});
              src: local('Circular Std Medium Italic'),
                local('CircularStd-MediumItalic'),
                url(${CircularStdItEot}) format('embedded-opentype'),
                url(${CircularStdItWf2}) format('woff2'),
                url(${CircularStdItWf}) format('woff'),
                url(${CircularStdItTtf}) format('truetype');
              font-weight: 500;
              font-style: italic;
              font-display: auto;
            }
            /* standard black */
            @font-face {
              font-family: 'Circular Std';
              src: url(${CircularStdBlackEot});
              src: local('Circular Std Black'), local('CircularStd-Black'),
                url(${CircularStdBlackEot}) format('embedded-opentype'),
                url(${CircularStdBlackWf2}) format('woff2'),
                url(${CircularStdBlackWf}) format('woff'),
                url(${CircularStdBlackTtf}) format('truetype');
              font-weight: 900;
              font-style: normal;
              font-display: auto;
            }
            /*  standard medium */
            @font-face {
              font-family: 'Circular Std';
              src: url(${CircularStdEot});
              src: local('Circular Std Medium'), local('CircularStd-Medium'),
                url(${CircularStdEot}) format('embedded-opentype'),
                url(${CircularStdWf2}) format('woff2'),
                url(${CircularStdWf}) format('woff'),
                url(${CircularStdTtf}) format('truetype');
              font-weight: 500;
              font-style: normal;
              font-display: auto;
            }
            /*  standard bold */
            @font-face {
              font-family: 'Circular Std';
              src: url(${CircularStdBoldEot});
              src: local('Circular Std Bold'), local('CircularStd-Bold'),
                url(${CircularStdBoldEot}) format('embedded-opentype'),
                url(${CircularStdBoldWf2}) format('woff2'),
                url(${CircularStdBoldWf}) format('woff'),
                url(${CircularStdBoldTtf}) format('truetype');
              font-weight: bold;
              font-style: normal;
              font-display: auto;
            }
            /*  standard black italic */
            @font-face {
              font-family: 'Circular Std';
              src: url(${CircularStdBlackItEot});
              src: local('Circular Std Black Italic'),
                local('CircularStd-BlackItalic'),
                url(${CircularStdBlackItEot}) format('embedded-opentype'),
                url(${CircularStdBlackItWf2}) format('woff2'),
                url(${CircularStdBlackItWf}) format('woff'),
                url(${CircularStdBlackItTtf}) format('truetype');
              font-weight: 900;
              font-style: italic;
              font-display: auto;
            }
            /*  standard book italic */
            @font-face {
              font-family: 'Circular Std Book';
              src: url(${CircularBookItEot});
              src: local('Circular Std Book Italic'),
                local('CircularStd-BookItalic'),
                url(${CircularBookItEot}) format('embedded-opentype'),
                url(${CircularBookItWf2}) format('woff2'),
                url(${CircularBookItWf}) format('woff'),
                url(${CircularBookItTtf}) format('truetype');
              font-weight: normal;
              font-style: italic;
              font-display: auto;
            }
            /* standard bold italic */
            @font-face {
              font-family: 'Circular Std';
              src: url(${CircularStdBoldItEot});
              src: local('Circular Std Bold Italic'),
                local('CircularStd-BoldItalic'),
                url(${CircularStdBoldItEot}) format('embedded-opentype'),
                url(${CircularStdBoldItWf2}) format('woff2'),
                url(${CircularStdBoldItWF}) format('woff'),
                url(${CircularStdBoldItTtf}) format('truetype');
              font-weight: bold;
              font-style: italic;
              font-display: auto;
            }
            /*  standard book */
            @font-face {
              font-family: 'Circular Std Book';
              src: url(${CircularBookEot});
              src: local('Circular Std Book'), local('CircularStd-Book'),
                url(${CircularBookEot}) format('embedded-opentype'),
                url(${CircularBookWf2}) format('woff2'),
                url(${CircularBookWf}) format('woff'),
                url(${CircularBookTtf}) format('truetype');
              font-weight: normal;
              font-style: normal;
              font-display: auto;
            }

            /* fonts */

            * {
              box-sizing: border-box;
            }
            html {
              -ms-text-size-adjust: 100%;
              -webkit-text-size-adjust: 100%;
              text-size-adjust: 100%;
            }

            html,
            body,
            #root,
            .App,
            #prc-1-1 {
              height: 100%;
              width: 100%;
              font-family: 'Circular Std';
            }

            body {
              margin: 0;
              padding: 0;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              text-rendering: optimizeLegibility;
              font-kerning: normal;
              scroll-behavior: smooth;
              overflow-x: hidden;
            }

            a,
            a:hover,
            a:active,
            a:focus {
              outline: none;
              text-decoration: none;
            }
            p {
              font-family: ${theme.fontFamily.circularBook};
            }

            button {
              white-space: nowrap;
              display: inline-block;
              border: 0;
            }

            .layout {
              display: flex;
              flex-direction: column;

              width: 100%;
              position: relative;
            }

            .content-area {
              flex: 1;
              display: flex;
              flex-direction: column;
              position: relative;
              height: 100%;
              min-height: 100vh;
            }
          `}
        </style>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  userLoading: state.auth.isLoading,
  spinner: state.ui.spinner,
  init: state.ui.initialLoad,
  bannerIsLight: state.ui.bannerIsLight,
});

export default connect(mapStateToProps, {
  loadUser,
  showSpinner,
  hideSpinner,
  initialLoad,
  lightNav,
  darkNav,
})(App);
