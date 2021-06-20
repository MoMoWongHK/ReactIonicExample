import React, { useState } from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonMenuButton, IonRow, IonCol, IonButton, IonList, IonItem, IonLabel, IonText, IonTextarea, IonToast } from '@ionic/react';
import './Login.scss';
import { connect } from '../data/connect';

interface OwnProps { }

interface DispatchProps { }

interface SupportProps extends OwnProps, DispatchProps { }

const Home: React.FC<SupportProps> = () => {

  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (!message) {
      setMessageError(true);
    }
    if (message) {
      setMessage('');
      setShowToast(true);
    }
  };

  return (
    <IonPage id="support-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

        <div className="login-logo">
          <img src="assets/img/appicon.svg" alt="Ionic logo" />
        </div>

        <form noValidate onSubmit={send}>
          <IonList>
            <IonItem>
              <IonLabel position="stacked" color="primary">Welcome to example app</IonLabel>

            </IonItem>

            <IonText color="danger">
              <p className="ion-padding-start">
                Home Page
              </p>
            </IonText>
          </IonList>


        </form>

      </IonContent>

    </IonPage>
  );
};

export default connect<OwnProps, {}, DispatchProps>({
  component: Home
})
