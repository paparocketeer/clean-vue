import styled from '@emotion/styled';
import { Button, InputAdornment, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import MuiCheckbox from '@mui/material/Checkbox';
import React from 'react';
import { HelpLocationIcon, MapIcon, SearchIcon } from 'src/shared/icons';
import { Input, Select } from 'src/shared/ui';

const districtList = [
  {
    id: '0',
    label: 'Московский',
  },
  {
    id: '1',
    label: 'Питерский',
  },
  {
    id: '3',
    label: 'Садовый',
  },
];
export const Form = () => {
  return (
    <Wrapper>
      <SearchWrapper>
        <InnerForm>
          <Input
            label={'Поиск'}
            inputProps={{
              placeholder: 'Введите текст',
              startAdornment: (
                <InputAdornment position={'start'}>
                  <SearchIcon
                    width={20}
                    height={20}
                    color={'#000000'}
                  />
                </InputAdornment>
              ),
            }}
          />
          <Select
            id={'district'}
            list={districtList}
            label={'Район'}
          />
        </InnerForm>
        <Button
          variant={'contained'}
          startIcon={<MapIcon />}>
          Перейти на карту
        </Button>
      </SearchWrapper>
      <Divider />
      <CheckBoxWrapper>
        <CheckBoxItem>
          <CheckBoxItemInner>
            <HelpLocationIcon />
            <Typography>Незаконные подключения</Typography>
          </CheckBoxItemInner>
          <StyledCheckBox />
        </CheckBoxItem>
        <CheckBoxItem>
          <CheckBoxItemInner>
            <HelpLocationIcon />
            <Typography>Незаконные подключения</Typography>
          </CheckBoxItemInner>
          <StyledCheckBox />
        </CheckBoxItem>
        <CheckBoxItem>
          <CheckBoxItemInner>
            <HelpLocationIcon />
            <Typography>Незаконные подключения</Typography>
          </CheckBoxItemInner>
          <StyledCheckBox />
        </CheckBoxItem>
        <CheckBoxItem>
          <CheckBoxItemInner>
            <HelpLocationIcon />
            <Typography>Незаконные подключения</Typography>
          </CheckBoxItemInner>
          <StyledCheckBox />
        </CheckBoxItem>
        <CheckBoxItem>
          <CheckBoxItemInner>
            <HelpLocationIcon />
            <Typography>Незаконные подключения</Typography>
          </CheckBoxItemInner>
          <StyledCheckBox />
        </CheckBoxItem>
        <CheckBoxItem>
          <CheckBoxItemInner>
            <HelpLocationIcon />
            <Typography>Незаконные подключения</Typography>
          </CheckBoxItemInner>
          <StyledCheckBox />
        </CheckBoxItem>
        <CheckBoxItem>
          <CheckBoxItemInner>
            <HelpLocationIcon />
            <Typography>Незаконные подключения</Typography>
          </CheckBoxItemInner>
          <StyledCheckBox />
        </CheckBoxItem>
        <CheckBoxItem>
          <CheckBoxItemInner>
            <HelpLocationIcon />
            <Typography>Незаконные подключения</Typography>
          </CheckBoxItemInner>
          <StyledCheckBox />
        </CheckBoxItem>
      </CheckBoxWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
`;
const Divider = styled(Box)`
  height: 100%;
  border-right: 1px solid #ebeff2;
`;
const SearchWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding: 8px 16px 16px 16px;
`;
const CheckBoxWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: scroll;
  height: 100%;
  width: 100%;
  padding: 8px;
`;
const CheckBoxItem = styled('label')`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const CheckBoxItemInner = styled(Box)`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;
const InnerForm = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyledCheckBox = styled(MuiCheckbox)`
  color: #0f74ff;
`;
