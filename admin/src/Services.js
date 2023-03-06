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
  ImageInput,
} from "react-admin";

export const ServiceList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="title" />
      <TextField source="description" />
      <TextField source="btname" />
      <TextField source="visit" />
      <ImageField source="img" />
    </Datagrid>
  </List>
);

export const ServiceEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="description" />
      <TextInput source="visit" />
      <TextInput source="btname" />
      <ImageField source="img" />
      <p>
        Upload your image on imagekit.io and then update the img field with the
        url of the uploaded image.
      </p>
      <TextInput source="img" />
    </SimpleForm>
  </Edit>
);

export const ServiceCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="description" />
      <TextInput source="visit" />
      <TextInput source="btname" />
      <p>
        Upload your image on imagekit.io and then update the img field with the
        url of the uploaded image.
      </p>
      <TextInput source="img" />
    </SimpleForm>
  </Create>
);
