import React, {useEffect, useState} from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonMenuButton, IonRow, IonCol, IonButton, IonList, IonItem, IonLabel, IonText, IonTextarea, IonToast } from '@ionic/react';
import './Login.scss';
import { connect } from '../data/connect';
import {TodoItem} from "../models/TodoItem";

import firebaseRef from "../Config/firebase";
const db = firebaseRef.firestore()


interface OwnProps { }

interface DispatchProps { }

interface SupportProps extends OwnProps, DispatchProps { }

const Home: React.FC<SupportProps> = () => {

  const [allItem, setAllItem] = useState<TodoItem[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(()=> {
    getToDoItemFromFirebase()
  },[])

  const getToDoItemFromFirebase = () => {
    db.collection("Todo")
      .limit(20)
      .get()
      .then(docs => {
        let allTodo: any = []
        if(!docs.empty){
          docs.forEach(doc => {
            allTodo.push({
              id:doc.id,
              ...doc.data()
            })
          })
        }

        setAllItem(allTodo)
        setIsLoaded(true)
      })

  }

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

        {
          isLoaded?
            <IonList>
            {
              allItem.map(item => {
                return(
                  <IonItem key={item.id}>
                    <IonLabel>{item.title}</IonLabel>
                  </IonItem>
                )
              })
            }
            </IonList>
            :
            <div>
              loading
            </div>
        }



      </IonContent>

    </IonPage>
  );
};

export default connect<OwnProps, {}, DispatchProps>({
  component: Home
})
