import React from 'react';

import {
  Datagrid,
  EmailField,
  List,
  Responsive,
  SimpleList,
  TextField,
  UrlField,
} from 'react-admin';

export const SiteList = props => (
  <List bulkActions={false} {...props}>
    <Responsive
      small={(
        <SimpleList
          primaryText={record => record.name}
          secondaryText={record => record.address}
        />
      )}
      medium={(
        <Datagrid>
          <TextField source="name" sortable={false} />
          <UrlField source="address" sortable={false} />
          <EmailField source="email" sortable={false} />
          <TextField source="googleAnalytics" sortable={false} />
          <TextField source="charityNumber" sortable={false} />
        </Datagrid>
      )}
    />
  </List>
);