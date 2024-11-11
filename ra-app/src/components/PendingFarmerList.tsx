// src/farmers.js
import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  ShowButton,
  Button,
  useRefresh,
  useNotify,
  useRecordContext,
  useDataProvider,
} from 'react-admin';
import jsonServerProvider from "ra-data-json-server";

const dataProvider = jsonServerProvider("http://localhost:3000");

// Custom Approve Button
const ApproveButton = ({ source }: { source: string }) => {
  const refresh = useRefresh();
  const notify = useNotify();
  const record = useRecordContext();

  const approve = () => {
    dataProvider
      .update('farmers', { id: record[source].id, data: { ...record[source], approved: true } })
      .then(() => {
        notify('Farmer approved');
        refresh();
      })
      .catch((error) => {
        notify(`Error: ${error.message}`, { type: 'warning' });
      });
  };

  return <Button label="Approve" onClick={approve} />;
};

// Custom Reject Button
const RejectButton = ({ record }) => {
  const refresh = useRefresh();
  const notify = useNotify();
  

  const reject = () => {
    const reason = prompt('Please provide a reason for rejection:');
    if (reason) {
      dataProvider
        .delete('pendingFarmers', { id: record.id })
        .then(() => {
          // Send feedback to the farmer (implement as needed)
          notify('Farmer rejected');
          refresh();
        })
        .catch((error) => {
          notify(`Error: ${error.message}`, { type: 'warning' });
        });
    }
  };

  return <Button label="Reject" onClick={reject} />;
};

// Pending Farmers List
export const PendingFarmerList = (props) => (
  <List {...props} title="Pending Farmers">
    <Datagrid>
      <TextField source="farm.name" />
      <TextField source="farm.size" />
      <TextField source="farm.geo_loc" />
      <ApproveButton />
      <RejectButton />
      <ShowButton />
    </Datagrid>
  </List>
);
