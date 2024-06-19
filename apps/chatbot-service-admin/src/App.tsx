import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ChatFlowList } from "./chatFlow/ChatFlowList";
import { ChatFlowCreate } from "./chatFlow/ChatFlowCreate";
import { ChatFlowEdit } from "./chatFlow/ChatFlowEdit";
import { ChatFlowShow } from "./chatFlow/ChatFlowShow";
import { TriggerList } from "./trigger/TriggerList";
import { TriggerCreate } from "./trigger/TriggerCreate";
import { TriggerEdit } from "./trigger/TriggerEdit";
import { TriggerShow } from "./trigger/TriggerShow";
import { CustomFieldList } from "./customField/CustomFieldList";
import { CustomFieldCreate } from "./customField/CustomFieldCreate";
import { CustomFieldEdit } from "./customField/CustomFieldEdit";
import { CustomFieldShow } from "./customField/CustomFieldShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ChatbotService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ChatFlow"
          list={ChatFlowList}
          edit={ChatFlowEdit}
          create={ChatFlowCreate}
          show={ChatFlowShow}
        />
        <Resource
          name="Trigger"
          list={TriggerList}
          edit={TriggerEdit}
          create={TriggerCreate}
          show={TriggerShow}
        />
        <Resource
          name="CustomField"
          list={CustomFieldList}
          edit={CustomFieldEdit}
          create={CustomFieldCreate}
          show={CustomFieldShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
