import React from 'react';
import { Pagination } from '@mui/material';

const CustomPagination = ({ page, count, onChange }) => {
  return (
    <Pagination
      count={count}
      page={page}
      onChange={(_, value) => onChange(value)}
      color="primary"
      sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}
    />
  );
};

export default CustomPagination;
