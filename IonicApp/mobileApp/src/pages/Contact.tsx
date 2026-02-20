import {
  IonPage, IonContent, IonItem, IonInput,
  IonButton, IonToast
} from "@ionic/react";
import { useState } from "react";

const Contact: React.FC = () => {
  const [toast, setToast] = useState(false);

  return (
    <IonPage>
      <IonContent className="ion-padding">

        <IonItem>
          <IonInput placeholder="Your Name"/>
        </IonItem>

        <IonItem>
          <IonInput placeholder="Email"/>
        </IonItem>

        <IonItem>
          <IonInput placeholder="Message"/>
        </IonItem>

        <IonButton expand="block" onClick={() => setToast(true)}>
          Send Message
        </IonButton>

        <IonToast
          isOpen={toast}
          message="Message Sent Successfully ✅"
          duration={1500}
          onDidDismiss={() => setToast(false)}
        />

      </IonContent>
    </IonPage>
  );
};

export default Contact;