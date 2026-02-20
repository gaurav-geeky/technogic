import {
  IonPage, IonContent, IonCard, IonCardContent,
  IonButton, IonImg, IonToast
} from "@ionic/react";
import { useState } from "react";
import { useHistory } from "react-router";

const Home: React.FC = () => {
  const [showToast, setShowToast] = useState(false);
  const history = useHistory();

  return (
    <IonPage>
      <IonContent className="ion-padding">

        <IonImg src="https://ionicframework.com/docs/img/demos/card-media.png" />

        <IonCard>
          <IonCardContent>
            Welcome! This app shows real interaction.
          </IonCardContent>
        </IonCard>

        <IonButton expand="block" onClick={() => setShowToast(true)}>
          Click Me
        </IonButton>

        <IonButton expand="block" color="secondary"
          onClick={() => history.push("/services")}>
          Go to Services
        </IonButton>

        <IonToast
          isOpen={showToast}
          message="Button Clicked 🎉"
          duration={1500}
          onDidDismiss={() => setShowToast(false)}
        />

      </IonContent>
    </IonPage>
  );
};

export default Home;