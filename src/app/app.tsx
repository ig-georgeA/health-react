import { IgrAvatar, IgrAvatarModule, IgrIconButton, IgrIconButtonModule, IgrNavbar, IgrNavbarModule, IgrNavDrawer, IgrNavDrawerItem, IgrNavDrawerModule, IgrRipple, IgrRippleModule } from '@infragistics/igniteui-react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import styles from './app.module.css';
import createClassTransformer from './style-utils';

IgrAvatarModule.register();
IgrIconButtonModule.register();
IgrNavbarModule.register();
IgrNavDrawerModule.register();
IgrRippleModule.register();

export default function App() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();
  const navDrawer = useRef<IgrNavDrawer>(null);

  return (
    <>
      <div className={classes("column-layout master-view-container")}>
        <div className={classes("row-layout main-navigation")}>
          <IgrNavbar className={classes("navbar")}>
            <div className={classes("row-layout group")} key={uuid()}>
              <div onClick={() => navigate(`/home`)} className={classes("row-layout group_1")}>
                <img src="/src/assets/logo2.svg" className={classes("image")} />
                <p className={classes("typography__subtitle-2 text")}>
                  <span>HEALTHCARE ASSISTANT</span>
                </p>
              </div>
            </div>
            <div slot="end" className={classes("row-layout group_2")} key={uuid()}>
              <div className={classes("row-layout group_1")}>
                <IgrAvatar src="/src/assets/Avatar13.png" shape="circle" className={classes("avatar")}></IgrAvatar>
                <p className={classes("typography__subtitle-2 text")}>
                  <span>Sandy Anderson</span>
                </p>
              </div>
              <IgrIconButton variant="flat" clicked={() => navDrawer?.current?.toggle()} className={classes("icon-button")}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>menu</span>
                </span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrIconButton>
            </div>
          </IgrNavbar>
        </div>
        <div className={classes("row-layout bottom-container")}>
          <div className={classes("view-container")}>
            <Outlet></Outlet>
          </div>
          <IgrNavDrawer position="end" ref={navDrawer} className={classes("nav-drawer")}>
            <div style={{display: 'contents'}} onClick={() => navigate(`/home`)} key={uuid()}>
              <IgrNavDrawerItem>
                <span slot="icon" key={uuid()}>
                  <span className={classes("material-icons icon_1")} key={uuid()}>
                    <span key={uuid()}>home</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </span>
                <div slot="content" key={uuid()}>Home</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{display: 'contents'}} onClick={() => navigate(`/medications`)} key={uuid()}>
              <IgrNavDrawerItem>
                <span slot="icon" key={uuid()}>
                  <span className={classes("material-icons icon_1")} key={uuid()}>
                    <span key={uuid()}>healing</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </span>
                <div slot="content" key={uuid()}>Medications</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{display: 'contents'}} onClick={() => navigate(`/health-indicators`)} key={uuid()}>
              <IgrNavDrawerItem>
                <span slot="icon" key={uuid()}>
                  <span className={classes("material-icons icon_1")} key={uuid()}>
                    <span key={uuid()}>favorite</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </span>
                <div slot="content" key={uuid()}>Health Indicators</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{display: 'contents'}} onClick={() => navigate(`/appointments`)} key={uuid()}>
              <IgrNavDrawerItem>
                <span slot="icon" key={uuid()}>
                  <span className={classes("material-icons icon_1")} key={uuid()}>
                    <span key={uuid()}>calendar_today</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </span>
                <div slot="content" key={uuid()}>Appointments</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{display: 'contents'}} onClick={() => navigate(`/profile`)} key={uuid()}>
              <IgrNavDrawerItem>
                <span slot="icon" key={uuid()}>
                  <span className={classes("material-icons icon_1")} key={uuid()}>
                    <span key={uuid()}>account_circle</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </span>
                <div slot="content" key={uuid()}>Medical Profile</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{display: 'contents'}} onClick={() => navigate(`/emergency`)} key={uuid()}>
              <IgrNavDrawerItem>
                <span slot="icon" key={uuid()}>
                  <span className={classes("material-icons icon_1")} key={uuid()}>
                    <span key={uuid()}>error</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </span>
                <div slot="content" key={uuid()}>Emergency</div>
              </IgrNavDrawerItem>
            </div>
          </IgrNavDrawer>
        </div>
      </div>
    </>
  );
}
