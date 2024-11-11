import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { PosterList } from "./components/PosterList";
import { PosterEdit } from "./components/PosterEdit";
import { PosterCreate } from "./components/PosterCreate";
import { CategoryList } from "./components/CategoryList";
import { CategoryEdit } from "./components/CategoryEdit";
import { CategoryCreate } from "./components/CategoryCreate";
import {UserList} from "./components/UserList";
import { UserCreate } from "./components/UserCreate";
import { UserEdit } from "./components/UserEdit";
import { PendingFarmerList } from "./components/PendingFarmerList";

const authProvider = {
  async login({ username, password }) {
      if (username !== 'john' || password !== '123') {
          throw new Error('Login failed');
      }
      localStorage.setItem('username', username);
  },
  async checkError(error) {
      const status = error.status;
      if (status === 401 || status === 403) {
          localStorage.removeItem('username');
          throw new Error('Session expired');
      }
      // other error codes (404, 500, etc): no need to log out
  },
  async checkAuth() {
      if (!localStorage.getItem('username')) {
          throw new Error('Not authenticated');
      }
  },
  async logout() {
      localStorage.removeItem('username');
  },
  async getIdentity() {
      const username = localStorage.getItem('username');
      return { id: username, fullName: username };
  },
};

const dataProvider = jsonServerProvider("http://localhost:3000");

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider} >
    {/* <Resource
      name="posters"
      list={PosterList}
      edit={PosterEdit}
      create={PosterCreate}
    />
    <Resource
      name="categories"
      list={CategoryList}
      edit={CategoryEdit}
      create={CategoryCreate}
      // recordRepresentation="name"
    /> */}
    <Resource
      name="user"
      list={UserList}
      edit={UserEdit}
      create={UserCreate}
    />
    <Resource 
      name="pending_farmers"
      list = {PendingFarmerList}
    />
  </Admin>
);

export default App;
