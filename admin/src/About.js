//src/About.js
import {
  List,
  Datagrid,
  TextField,
  UrlField,
  Edit,
  SimpleForm,
  TextInput,
  Create,
  ImageField,
  ImageInput,
} from "react-admin";

export const AboutList = (props) => (
  <>
    <h1>Only renders the 1st item</h1>
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="title1" />
        <TextField source="description1" />
        <TextField source="title2" />
        <TextField source="description2" />
        <ImageField source="img" />
      </Datagrid>
    </List>
  </>
);

export const AboutEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="title1" />
      <TextInput source="description1" />
      <TextInput source="title2" />
      <TextInput source="description2" />
      <ImageField source="img" />
    </SimpleForm>
  </Edit>
);

export const AboutCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="title1" />
      <TextInput source="title2" />
      <TextInput source="description1" />
      <TextInput source="description2" />
      <TextInput source="img" />
    </SimpleForm>
  </Create>
);
