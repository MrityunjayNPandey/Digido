//src/Homes.js
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  UrlField,
  Edit,
  SimpleForm,
  ImageField,
  TextInput,
  Create,
  Show,
  SimpleShowLayout,
} from "react-admin";

export const HomeList = (props) => (
  <>
    <h1>Only renders the 1st Item</h1>
    <List {...props}>
      <Datagrid {...props} rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="description" />
        <ImageField source="img" />
      </Datagrid>
    </List>
  </>
);

export const HomeEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="name" />
      <TextInput source="description" />
      <ImageField source="img" />
      <TextInput source="img" />
    </SimpleForm>
  </Edit>
);

export const HomeCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <ImageField source="img" />
      <TextInput source="img" />
    </SimpleForm>
  </Create>
);
