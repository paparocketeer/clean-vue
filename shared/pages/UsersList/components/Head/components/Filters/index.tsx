import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import MuiInput from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import React, { useRef, useState } from 'react';
import { PersonIcon, SearchIcon } from 'src/shared/icons';
import { ImportExportIcon } from 'src/shared/icons/ImportExport';
import { Setting2Icon } from 'src/shared/icons/Setting2';
import { BaseMenu, CheckBoxMenu } from 'src/shared/ui/Menu';
import { ICheckedItem } from 'src/shared/ui/Menu/types';

import {
  importExportList,
  importExportListKeys,
  roleList,
  statusList,
} from './constants';

export const Filters = () => {
  const inputRef: React.Ref<HTMLInputElement> | null = useRef(null);
  const [search, setSearch] = useState('');
  const [isShowInput, setShowInput] = useState(false);
  const [statusFilter, setStatusFilter] = useState<Array<ICheckedItem>>([]);
  const [roleFilter, setRoleFilter] = useState<Array<ICheckedItem>>([]);
  const { palette } = useTheme();

  return (
    <Wrapper>
      <CheckBoxMenu
        checkedItems={statusFilter}
        list={statusList}
        onChange={setStatusFilter}>
        <Button
          sx={{
            padding: '7px 15px',
          }}
          variant={'outlined'}
          startIcon={
            <Setting2Icon
              width={24}
              height={24}
            />
          }
          endIcon={
            <Counter hasCount={!!statusFilter.length}>
              {statusFilter.length}
            </Counter>
          }>
          Статус
        </Button>
      </CheckBoxMenu>
      <CheckBoxMenu
        list={roleList}
        checkedItems={roleFilter}
        onChange={setRoleFilter}>
        <Button
          sx={{
            padding: '7px 15px',
          }}
          variant={'outlined'}
          startIcon={
            <PersonIcon
              width={24}
              height={24}
            />
          }
          endIcon={
            <Counter hasCount={!!roleFilter.length}>
              {roleFilter.length}
            </Counter>
          }>
          Роль
        </Button>
      </CheckBoxMenu>

      <BaseMenu
        onChange={(el) => {
          const id = el.id as keyof typeof importExportListKeys;
        }}
        list={importExportList}>
        <Button
          sx={{
            padding: '7px 15px',
          }}
          variant={'outlined'}
          startIcon={
            <ImportExportIcon
              width={24}
              height={24}
            />
          }>
          Импорт/Экспорт
        </Button>
      </BaseMenu>

      <SMuiInput
        inputRef={inputRef}
        startAdornment={
          <InputAdornment position='start'>
            <SearchIcon
              onClick={() => {
                inputRef?.current?.focus();
              }}
              style={{
                userSelect: 'none',
                cursor: 'pointer',
              }}
              width={24}
              height={24}
              color={palette.Accent.Primary}
            />
          </InputAdornment>
        }
        value={isShowInput ? search : 'Поиск'}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder={' '}
        onBlur={() => {
          setShowInput(false);
        }}
        onClick={() => {
          setShowInput(true);
        }}
        isShowInput={isShowInput}
      />
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

const Counter = styled(Box)<{ hasCount: boolean }>`
  color: ${(p) => p.theme.palette.colors.White};
  text-align: center;
  font-feature-settings:
    'liga' off,
    'clig' off;
  font-size: 10px !important;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: 0.4px;
  text-transform: capitalize;
  text-align: center;
  display: flex;
  height: 20px;
  min-width: 20px;
  padding: 4px 2px;
  justify-content: center;
  align-items: center;

  border-radius: 20px;
  background: ${(p) =>
    p.hasCount
      ? p.theme.palette.alert['alert-orange']
      : p.theme.palette.Accent.Primary};
`;

const SMuiInput = styled(MuiInput)<{ isShowInput: boolean }>`
  transition: all 0.3s;
  padding: 7.5px 15px;

  border-radius: 100px;
  border: 1px solid ${(p) => p.theme.palette.Accent.Primary};

  ${(p) => {
    if (p.isShowInput) {
      return css`
        background: ${p.theme.palette.Palette['palette-primary-blue'][
          'palette-primary-blue-50'
        ]};
        width: 568px;
      `;
    } else {
      return css`
        background: transparent;
        width: 113px;

        .MuiInput-input {
          color: ${p.theme.palette.Accent.Primary} !important;
          font-size: 16px !important;
          font-style: normal !important;
          font-weight: 600 !important;
          line-height: 120% !important;
        }
      `;
    }
  }}
`;
