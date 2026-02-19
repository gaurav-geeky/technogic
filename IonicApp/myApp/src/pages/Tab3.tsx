import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3 upper</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3 lower</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 3 page for explore container name" />
        <p>this </p>
        <p>fkdjf </p>
        <p>dfgj  dkjf </p>
        <p> djf fkj </p>
        <p>this </p>
        <p>fkdjf </p>
        <p>dfgj  dkjf </p>
        <p> djf fkj </p>
        <p>this </p>
        <p>fkdjf </p>
        <p>dfgj  dkjf </p>
        <p> djf fkj </p>
        <p>this </p>
        <p>fkdjf </p>
        <p>dfgj  dkjf </p>
        <p> djf fkj </p>
        <p>this </p>
        <p>fkdjf </p>
        <p>dfgj  dkjf </p>
        <p> djf fkj </p>
        <p>this </p>
        <p>fkdjf </p>
        <p>dfgj  dkjf </p>
        <p> djf fkj </p>
        <p>this </p>
        <p>fkdjf </p>
        <p>dfgj  dkjf </p>
        <p> djf fkj </p>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
