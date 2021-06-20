import React, {useEffect} from 'react';
import {Route} from 'react-router-dom';
import {IonApp, IonRouterOutlet, IonSplitPane} from '@ionic/react';
import {IonReactRouter} from '@ionic/react-router';

import Menu from './components/Menu';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import MainTabs from './pages/MainTabs';
import {connect} from './data/connect';
import {AppContextProvider} from './data/AppContext';
// import {setIsLoggedIn, setUsername, loadUserData} from './data/user/user.actions';

import HomeOrTutorial from './components/HomeOrTutorial';
import {ReactReduxFirebaseProvider} from "react-redux-firebase";
import {getReduxStore, getRrfProp} from "./Config/firebase-redux";
import {Provider} from 'react-redux'


const App: React.FC = () => {
  return (
    <AppContextProvider>
      <Provider store={getReduxStore()}>
        <ReactReduxFirebaseProvider {...getRrfProp()}>
          <IonicAppConnected/>
        </ReactReduxFirebaseProvider>
      </Provider>
    </AppContextProvider>
  );
};

interface StateProps {
  darkMode: boolean;
}

interface DispatchProps {
  // loadUserData: typeof loadUserData;
  // setIsLoggedIn: typeof setIsLoggedIn;
  // setUsername: typeof setUsername;
}

interface IonicAppProps extends StateProps, DispatchProps {
}

const IonicApp: React.FC<IonicAppProps> = ({darkMode}) => {

  useEffect(() => {
    // loadUserData();
    // eslint-disable-next-line
  }, []);

  return (

    <IonApp className={`${darkMode ? 'dark-theme' : ''}`}>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu/>
          <IonRouterOutlet id="main">
            <Route path="/tabs" render={() => <MainTabs/>}/>
            <Route path="/" component={HomeOrTutorial} exact/>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>

  )
}

export default App;

const IonicAppConnected = connect<{}, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    darkMode: state.user.darkMode,
  }),
  // mapDispatchToProps: {loadUserData, setIsLoggedIn, setUsername},
  component: IonicApp
});
