import styled from '@emotion/styled';
import { IconButton, InputLabel } from '@mui/material';
import MuiAutocomplete, { AutocompleteProps } from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import React from 'react';

import { BoldCloseIcon } from '../../icons';
import { Typography } from '../base/Typography';

interface IAutocompleteProps
  extends Omit<
    AutocompleteProps<{ label: string; id: string }, true, any, any>,
    'renderInput' | 'onChange'
  > {
  label: string;
  onChange: (values: any) => void;
}
export const Autocomplete = ({
  label,
  onChange,
  value,
  options,
}: IAutocompleteProps) => {
  console.log(value);
  return (
    <Wrapper>
      <InputLabel>
        <Typography
          bold
          variant={'label.large'}>
          {label}
        </Typography>
      </InputLabel>
      <MuiAutocomplete
        multiple
        options={options}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => {
            const { key, ...tagProps } = getTagProps({ index });

            return (
              <Chip
                variant='outlined'
                label={option.label}
                key={option.id}
                deleteIcon={
                  <IconButton
                    sx={{ height: '10px', padding: 0, margin: 0 }}
                    size={'small'}>
                    <BoldCloseIcon />
                  </IconButton>
                }
                {...tagProps}
              />
            );
          })
        }
        renderInput={(params) => <STextField {...params} />}
        onChange={(_, v) => {
          onChange(v);
        }}
      />
    </Wrapper>
  );
};
const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;

const STextField = styled(TextField)`
  max-height: 20px;
`;
