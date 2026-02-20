import { IonHeader, IonToolbar, IonTitle } from "@ionic/react";

const Header: React.FC = ({  }) => {
  return (
    <IonHeader>
      <IonToolbar color="primary">
        <IonTitle> hello i am header</IonTitle> 
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;