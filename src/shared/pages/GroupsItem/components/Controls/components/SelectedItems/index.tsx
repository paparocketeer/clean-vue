import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useHandleControllers } from 'src/shared/actions/groups/controllers';
import { useAppSelector } from 'src/shared/hooks/useAppSelector';
import { CloseIcon } from 'src/shared/icons';
import { selectGroupsItem } from 'src/shared/store/selectors/groupItem';
import { Checkbox, Typography } from 'src/shared/ui';

export const SelectedItems = () => {
  const { selectedPoints } = useAppSelector((state) => selectGroupsItem(state));
  const { palette } = useTheme();
  const { selectAll, clearPoints, removePoint } = useHandleControllers();

  const { groupId } = useParams();
  const { points } = useAppSelector(selectGroupsItem);
  const point = points[groupId as any];

  return (
    <Wrapper>
      <Title>
        <Typography
          bold
          sx={{
            width: '323px',
          }}
          variant={'title.small'}>
          Выбранные пункты питания
        </Typography>
        <Checkbox
          checkboxProps={{
            onChange: (e) => {
              const checked = e.target.checked;
              if (checked) {
                selectAll(point.items);
              } else {
                clearPoints();
              }
            },
          }}
          label={
            <Typography
              bold
              variant={'caption.medium'}>
              Выбрать все
            </Typography>
          }
        />
      </Title>
      <Inner>
        {selectedPoints.map((point) => {
          return (
            <Chip
              key={point.id}
              sx={{
                backgroundColor: palette.Inputs['BG Pressed'],
              }}
              label={
                <Typography
                  bold
                  variant={'label.small'}>
                  {point.name}
                </Typography>
              }
              onDelete={() => {
                removePoint(point);
              }}
              deleteIcon={<CloseIcon />}
            />
          );
        })}
      </Inner>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  padding: 8px 8px 16px 16px;
`;

const Title = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Inner = styled(Box)`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  max-height: 107px;
  overflow-y: scroll;
`;
