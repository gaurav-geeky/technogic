import {
  IonApp, IonTabs, IonRouterOutlet,
  IonTabBar, IonTabButton,
  IonIcon, IonLabel
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route, Redirect } from "react-router-dom";
import { home, construct, person, call } from "ionicons/icons";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import Header from "./components/Header";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>

        <Header />


        <IonRouterOutlet style={{ marginTop: "56px" }}>
          <Route path="/home" component={Home} exact />
          <Route path="/services" component={Services} exact />
          <Route path="/profile" component={Profile} exact />
          <Route path="/contact" component={Contact} exact />
          <Redirect exact from="/" to="/home" />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>

          <IonTabButton tab="services" href="/services">
            <IonIcon icon={construct} />
            <IonLabel>Services</IonLabel>
          </IonTabButton>

          <IonTabButton tab="profile" href="/profile">
            <IonIcon icon={person} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>

          <IonTabButton tab="contact" href="/contact">
            <IonIcon icon={call} />
            <IonLabel>Contact</IonLabel>
          </IonTabButton>
        </IonTabBar>

      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;