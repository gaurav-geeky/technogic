import { IonPage, IonContent, IonText, IonButton } from "@ionic/react";
import Header from "../components/Header";
import { useHistory } from "react-router";

const About: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <Header title="About Us" />
      <IonContent className="ion-padding">

        <IonText>
          <h2>Who We Are</h2>
          <p>
            We build modern mobile applications using Ionic and React.
            Our goal is to create fast and beautiful apps.
          </p>
        </IonText>

        <IonButton expand="block" onClick={() => history.push("/contact")}>
          Contact Us
        </IonButton>

      </IonContent>
    </IonPage>
  );
};

export default About;