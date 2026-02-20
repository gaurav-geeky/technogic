import {
  IonPage, IonContent, IonCard, IonCardContent,
  IonAlert
} from "@ionic/react";
import { useState } from "react";

const Services: React.FC = () => {
  const [alert, setAlert] = useState(false);

  return (
    <IonPage>
      <IonContent className="ion-padding">

        <IonCard button onClick={() => setAlert(true)}>
          <IonCardContent>📱 App Development</IonCardContent>
        </IonCard>

        <IonCard button onClick={() => setAlert(true)}>
          <IonCardContent>🌐 Website Development</IonCardContent>
        </IonCard>

        <IonCard button onClick={() => setAlert(true)}>
          <IonCardContent>🎨 UI/UX Design</IonCardContent>
        </IonCard>

        <IonAlert
          isOpen={alert}
          header="Service Selected"
          message="You clicked a service!"
          buttons={["OK"]}
          onDidDismiss={() => setAlert(false)}
        />

      </IonContent>
    </IonPage>
  );
};

export default Services;