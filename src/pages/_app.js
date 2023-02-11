import React from "react";
import Navbar from "./../components/Navbar";
import IndexPage from "./index";
import FaqPage from "./faq";
import ContactPage from "./contact";
import DocumentationPage from "./documentation";
import LegalPage from "./legal";
import { Switch, Route, Router } from "./../util/router";
import NotFoundPage from "./404";
import Footer from "./../components/Footer";
import "./../util/analytics";
import Chat from "./../components/Chat";
import { ThemeProvider } from "./../util/theme";

function App(props) {
  return (
    <ThemeProvider>
      <>
        <Chat />
        <Router>
          <>
            <Navbar
              color="default"
              logo="https://github.com/onuryilmaz10/blackdawn/blob/main/src/images/blackdawn-fire-in-the-hole-logo.svg"
              logoInverted="https://github.com/onuryilmaz10/blackdawn/blob/main/src/images/blackdawn-fire-in-hole-logo-white.svg"
            />

            <Switch>
              <Route exact path="/" component={IndexPage} />

              <Route exact path="/faq" component={FaqPage} />

              <Route exact path="/contact" component={ContactPage} />

              <Route
                exact
                path="/documentation"
                component={DocumentationPage}
              />

              <Route exact path="/legal/:section" component={LegalPage} />

              <Route component={NotFoundPage} />
            </Switch>

            <Footer
              bgColor="light"
              size="normal"
              bgImage=""
              bgImageOpacity={1}
              description="Blackdawn | Fire in the hole. Pellet Stove "
              copyright={`© ${new Date().getFullYear()} Blackdawn | Fire in the Hole. Pellet Stove`}
              logo="https://github.com/onuryilmaz10/blackdawn/blob/main/src/images/blackdawn-fire-in-the-hole-logo.svg"
              logoInverted="https://github.com/onuryilmaz10/blackdawn/blob/main/src/images/blackdawn-fire-in-hole-logo-white.svg"
              sticky={true}
            />
          </>
        </Router>
      </>
    </ThemeProvider>
  );
}

export default App;
