import React from 'react';
import { GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';

const ExportToolbar = () => (
    <GridToolbarContainer>
      <GridToolbarExport color='secondary' />
    </GridToolbarContainer>
);

export default ExportToolbar;