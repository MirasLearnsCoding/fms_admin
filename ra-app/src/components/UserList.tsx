import {
    ExportButton,
    List,
    NumberField,
    SelectColumnsButton,
    TextField,
    TopToolbar,
    DatagridConfigurable,
    EditButton,
    DeleteButton,
    EmailField,
  } from "react-admin";

  
  const UserListActions = () => (
    <TopToolbar>
      <SelectColumnsButton />
      <ExportButton />
    </TopToolbar>
  );
  
  export const UserList = () => (
    <List >
      <DatagridConfigurable>
        <TextField source="id" />
        <EmailField source="email" />
        <TextField source="username" />
        <TextField source="first_name" />
        <TextField source="last_name" />
        <NumberField source="phone_number" />
        <TextField source="profile_picture_url" />
        <TextField source="role" />
        <EditButton />
      </DatagridConfigurable>
    </List>
  );
  