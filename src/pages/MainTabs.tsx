import React  from 'react';
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { Route, Redirect } from 'react-router';
import {home, listOutline} from 'ionicons/icons';

import KOLsList from "./KOLsList";
import Home from "./Home";
import KOLPage from "./KOLPage";

interface MainTabsProps { }

const MainTabs: React.FC<MainTabsProps> = () => {

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/tabs/home" component={Home}/>
        <Route path="/tabs/kols" component={KOLsList} />
        <Route path="/tabs/kol/:id" component={KOLPage} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/tabs/home">
          <IonIcon icon={home} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="about" href="/tabs/kols">
          <IonIcon icon={listOutline} />
          <IonLabel>KOLs</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default MainTabs;
