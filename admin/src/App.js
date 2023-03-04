//src/App.js
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { HomeList, HomeEdit, HomeCreate } from "./Home";
import { ServiceList, ServiceEdit, ServiceCreate } from "./Services";
import { AboutList, AboutEdit, AboutCreate } from "./About";
import { OurClientList, OurClientEdit, OurClientCreate } from "./OurClients";
import { FooterList, FooterEdit, FooterCreate } from "./Footer";
import { authProvider } from "./authProvider";

const dataProvider = jsonServerProvider("https://digido-full.vercel.app");

function App() {
  console.log(dataProvider);
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource
        name="home"
        list={HomeList}
        edit={HomeEdit}
        create={HomeCreate}
      />
      <Resource
        name="about"
        list={AboutList}
        edit={AboutEdit}
        create={AboutCreate}
      />
      <Resource
        name="services"
        list={ServiceList}
        edit={ServiceEdit}
        create={ServiceCreate}
      />
      <Resource
        name="OurClients"
        list={OurClientList}
        edit={OurClientEdit}
        create={OurClientCreate}
      />
      <Resource
        name="Footer"
        list={FooterList}
        edit={FooterEdit}
        create={FooterCreate}
      />
    </Admin>
  );
}
export default App;
