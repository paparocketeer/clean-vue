import styled from '@emotion/styled';
import { Checkbox, Tooltip } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  CheckedWhiteCheckBoxIcon,
  EmptyWhiteCheckBoxIcon,
  LockIcon,
} from 'src/shared/icons';
import { Typography } from 'src/shared/ui';
import { WithContent } from 'src/shared/utils/WithContent';

import { IControllerStatisticItem } from '../../../../../../../../../store/api/controllers/controllers.types';
import { titleColors } from '../../../constants';
import { actionTypes } from '../../../../../../../constants';

interface IHeadProps extends IControllerStatisticItem {
  checked: boolean;
  groupId?: string | number;
}

export const Head = ({
  checked,
  control_lock,
  name,
  id,
  groupId,
}: IHeadProps) => {
  return (
    <Tooltip
      placement={'top'}
      title={name}>
      <Wrapper color={titleColors['yellow']}>
        <WithContent
          placeholder={<div />}
          isShow={control_lock}>
          <LockIcon
            color={'#000000'}
            width={10}
            height={10}
          />
        </WithContent>
        <Link to={`/groups/${groupId}/${id}`}>
          <Title
            sx={{
              display: '-webkit-box !important',
              '-webkit-line-clamp': '1 !important',
              '-webkit-box-orient': 'vertical !important',
              overflow: 'hidden !important',
              maxWidth: '66px',
            }}
            bold
            variant={'caption.small'}>
            {name}
          </Title>
        </Link>
        <SCheckBox
          inputProps={{
            // @ts-ignore
            'data-checked-id': id,
            'data-type': actionTypes['check-box-action'],
          }}
          checked={checked}
          checkedIcon={<CheckedWhiteCheckBoxIcon />}
          icon={<EmptyWhiteCheckBoxIcon />}
        />
      </Wrapper>
    </Tooltip>
  );
};

const Wrapper = styled(Box)<{ color: string }>`
  display: flex;
  height: 20px;
  padding: 3.932px 5.898px;
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
  cursor: pointer;
`;

const SCheckBox = styled(Checkbox)`
  padding: 0;
  width: 10px;
  height: 10px;
`;
