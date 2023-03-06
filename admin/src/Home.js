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
  ImageInput,
} from "react-admin";

export const HomeList = (props) => (
  <>
    <h1>Only renders the 1st Item</h1>
    <List {...props}>
      <Datagrid {...props} rowClick="edit">
        <TextField source="_id" />
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
      <p>Get your GOOGLE_DRIVE_IMAGE_ID from drive shared link</p>
      <p>***/d/YOUR_GOOGLE_DRIVE_IMAGE_ID/***</p>
      <p>And use the link below to add img url</p>
      <p>
        https://drive.google.com/uc?export=view&id=INSERT_HERE_YOUR_GOOGLE_DRIVE_IMAGE_ID
      </p>
      <TextInput source="img" />
    </SimpleForm>
  </Edit>
);

export const HomeCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="name" />
      <TextInput source="description" />
      <p>Get your GOOGLE_DRIVE_IMAGE_ID from drive shared link</p>
      <p>***/d/YOUR_GOOGLE_DRIVE_IMAGE_ID/***</p>
      <p>And use the link below to add img url</p>
      <p>
        https://drive.google.com/uc?export=view&id=INSERT_HERE_YOUR_GOOGLE_DRIVE_IMAGE_ID
      </p>
      <TextInput source="img" />
    </SimpleForm>
  </Create>
);
