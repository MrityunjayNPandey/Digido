//src/Services.js
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  UrlField,
  Edit,
  SimpleForm,
  TextInput,
  Create,
  ImageField,
} from "react-admin";

export const ServiceList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="description" />
      <TextField source="visit" />
      <ImageField source="img" />
      <TextField source="btname" />
    </Datagrid>
  </List>
);

export const ServiceEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="title" />
      <TextInput source="description" />
      <TextInput source="visit" />
      <ImageField source="img" />
      <TextInput source="img" />
      <TextInput source="btname" />
    </SimpleForm>
  </Edit>
);

export const ServiceCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="description" />
      <TextInput source="visit" />
      <ImageField source="img" />
      <TextInput source="img" />
      <TextInput source="btname" />
    </SimpleForm>
  </Create>
);
