import React, {useState} from 'react';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonButtons,
  IonMenuButton,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/react';
import {withRouter} from "react-router-dom";


import {KOLObject} from '../models/KOL';
import {connect} from '../data/connect';

import ExampleKOLCard from "../components/ExampleKOLCard";
import {exampleData} from "../data/KOLListExample";




const KOLsList: React.FC = () => {

  const [kols, setKOLs] = useState<KOLObject[]>(exampleData)

  return (
    <IonPage id="kol-list">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton/>
          </IonButtons>
          <IonTitle>KOL</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">KOLs</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonGrid fixed>
          <IonRow>
            {kols.map(kol => (
              <IonCol size="12" size-md="6" key={kol.id}>
                <ExampleKOLCard data={kol}/>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default connect({
  // mapStateToProps: mapStateToProps,
  // mapDispatchToProps: mapDispatchToProps,
  component: React.memo(KOLsList)
});



