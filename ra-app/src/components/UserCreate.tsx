import {
    Create,
    NumberInput,
    ReferenceInput,
    SimpleForm,
    TextInput,
  } from "react-admin";
  
  export const UserCreate = () => (
    <Create>
      <SimpleForm>
        <TextInput source="id" />
        <TextInput source="email" />
        <TextInput source="username" />
        <TextInput source="first_name" />
        <TextInput source="last_name" />
        <NumberInput source="phone_number" />
        <TextInput source="profile_picture_url" />
        <TextInput source="role" />
      </SimpleForm>
    </Create>
  );