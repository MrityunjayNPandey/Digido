//src/Footers.js
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
  ArrayField,
  Show,
  ImageField,
  SimpleShowLayout,
} from "react-admin";

export const FooterList = (props) => {
  console.log(props);
  return (
    <>
      <h1>
        layout is hard coded here, they can only be updated, don't delete or
        change the order, it is mapped with ID
      </h1>
      <List {...props}>
        <Datagrid {...props} rowClick="edit">
          <TextField source="id" disabled />
          <TextField source="name" />
          <TextField source="value" />
          <TextField source="link" />
        </Datagrid>
      </List>
    </>
  );
};

export const FooterEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="name" />
      <TextInput source="value" />
      <TextInput source="link" />
    </SimpleForm>
  </Edit>
);

export const FooterCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="value" />
      <TextInput source="link" />
    </SimpleForm>
  </Create>
);
