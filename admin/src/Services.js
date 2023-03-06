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

export const ServiceCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="description" />
      <TextInput source="visit" />
      <TextInput source="btname" />
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
