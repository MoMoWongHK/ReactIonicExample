import React, {useEffect, useState} from 'react';
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
} from '@ionic/react';
import {KOLObject} from '../models/KOL';
import {connect} from '../data/connect';

interface StateProps {
  CurrentKOL: {
    kol: KOLObject,
    isCurrentKOLLoaded: boolean
  }
};


const KOLPage: React.FC<StateProps> = (props) => {

  useEffect(() => {
    console.log(props.CurrentKOL)

  },[props.CurrentKOL])

  if(props.CurrentKOL.isCurrentKOLLoaded){
    return (
      <IonPage id="kol-list">
        <IonHeader translucent={true}>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton/>
            </IonButtons>
            <IonTitle>KOL | {props.CurrentKOL.kol.userName}</IonTitle>
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
              {props.CurrentKOL.kol.firstName + " " + props.CurrentKOL.kol.lastName}
              this is an kol
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    );
  }
  else{
    return(
     <IonPage>
       "loading"
     </IonPage>
    )
  }

};



export default connect({
  mapStateToProps: (state) => ({
    CurrentKOL: state.CurrentKOL
  }),
  // mapDispatchToProps: mapDispatchToProps,
  component: React.memo(KOLPage)
});
