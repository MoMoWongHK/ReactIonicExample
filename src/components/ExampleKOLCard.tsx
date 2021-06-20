import React, {useEffect} from 'react';
import {IonCard, IonCardHeader, IonItem, IonLabel, IonAvatar, IonCardContent, IonList} from '@ionic/react';
import {KOLObject} from '../models/KOL';
import {connect} from "../data/connect";
import {withRouter, RouteComponentProps} from "react-router";

import {CurrentKOLState} from '../data/CurrentKOL/CurrentKOL.reducer';

interface DispatchProps {
  setData: any;
}

interface StateProps extends RouteComponentProps<any>, DispatchProps {
  data: KOLObject
}


const ExampleKOLCard: React.FC<StateProps> = (props) => {
  return (
    <>
      <IonCard className="speaker-card"
               onClick={() => {
                 console.log("in", props.data)
                 props.setData(props.data)
                 props.history.push("/tabs/kol/" + props.data.id);
               }}
      >
        <IonCardHeader>
          <IonItem button detail={false} lines="none" className="speaker-item">
            <IonAvatar slot="start">
              <img src={props.data.avatarUrl} alt="Speaker profile pic"/>
            </IonAvatar>
            <IonLabel>
              <h2>{props.data.userName}</h2>
              <p>{props.data.description}</p>
            </IonLabel>
          </IonItem>
        </IonCardHeader>

        <IonCardContent>
          <IonList lines="none">
            {props.data.platform.map(p => (
              <IonItem detail={false} id={p}>
                <IonLabel>
                  <h3>{p}</h3>
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
        </IonCardContent>
      </IonCard>
    </>
  );
};


export default withRouter(connect({
  mapStateToProps: (state) => ({}),
  mapDispatchToProps: {
    setData: (data: any) => ({
      type: 'set-current-kol-data',
      data
    } as const)
  },
  component: React.memo(ExampleKOLCard)
}));




