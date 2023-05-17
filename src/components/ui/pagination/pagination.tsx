import React from 'react';
import PaginationI from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface IPagination {
  count: number;
  numberPage: number;
  setNumberPage: (el:number)=>void;
}

export const Pagination: React.FC<IPagination> = ({ numberPage, setNumberPage, count }) => {
  return (
    <Stack spacing={2}>
      <PaginationI
        onChange={(event: React.ChangeEvent<unknown>, value: number) => {
          setNumberPage(value);
        }}
        page={numberPage}
        count={count}
        shape="rounded"
        size="small"
      />
    </Stack>
  );
};
