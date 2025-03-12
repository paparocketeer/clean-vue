import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Button, Checkbox, Tooltip } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import {
  CheckedWhiteCheckBoxIcon,
  EmptyWhiteCheckBoxIcon,
  LockIcon,
} from 'src/shared/icons';
import { Typography } from 'src/shared/ui';
import { WithContent } from 'src/shared/utils/WithContent';

import { useGetConstants } from '../../../useGetConstants';

interface IHeadProps {
  isLocked: boolean;
  title: string;
  checked: boolean;
  onCheck: (id: string, status: boolean) => void;
  id: string;
}
export const Head = ({ checked, isLocked, title, onCheck, id }: IHeadProps) => {
  const { titleColors } = useGetConstants();
  const { palette } = useTheme();

  return (
    <Tooltip
      placement={'top'}
      title={title}>
      <Wrapper color={titleColors['yellow']}>
        <WithContent
          placeholder={<div />}
          isShow={isLocked}>
          <LockIcon
            color={palette.colors.Black}
            width={24}
            height={24}
          />
        </WithContent>
        <Title
          sx={{
            display: '-webkit-box !important',
            '-webkit-line-clamp': '1 !important',
            '-webkit-box-orient': 'vertical !important',
            overflow: 'hidden !important',
            maxWidth: '102px',
          }}
          bold
          variant={'title.large'}>
          {title}
        </Title>
        <SCheckBox
          checked={checked}
          onChange={(e) => {
            const checked = e.target.checked;
            if (checked) {
              onCheck(id, true);
            } else {
              onCheck(id, false);
            }
          }}
          checkedIcon={<CheckedWhiteCheckBoxIcon />}
          icon={<EmptyWhiteCheckBoxIcon />}
        />
      </Wrapper>
    </Tooltip>
  );
};

const Wrapper = styled(Box)<{ color: string }>`
  display: flex;
  height: 40px;
  padding: 8px 12px;
  align-items: center;
  gap: 3.932px;
  align-self: stretch;
  justify-content: space-between;
  background: ${(p) => p.color};
`;

const Title = styled(Typography)`
  display: flex;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const SCheckBox = styled(Checkbox)`
  padding: 0;
  width: 24px;
  height: 24px;
`;
