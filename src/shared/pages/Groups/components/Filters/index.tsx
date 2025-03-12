import styled from '@emotion/styled';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import MuiInput from '@mui/material/Input';
import React, { useState } from 'react';
import { useHandleSettingGroups } from 'src/shared/actions/settings/groups';
import { useAppSelector } from 'src/shared/hooks/useAppSelector';
import { SearchIcon } from 'src/shared/icons';
import { selectGroupsSetting } from 'src/shared/store/selectors/setting/groups';
import { Checkbox, Typography } from 'src/shared/ui';
import { Switch } from 'src/shared/ui/base/Switch';

const testArr = new Array(60);
testArr.fill({}, 0, 60);
export const Filters = () => {
  const [isShowInput, setShowInput] = useState(false);
  const [isShowBackDrop, setShowBackDrop] = useState(false);
  const { compactView, withGroupName, withAccidents } = useAppSelector(
    (state) => selectGroupsSetting(state)
  );
  const { handleOnWithGroupName, handleWithAccidents, handleOnCompactView } =
    useHandleSettingGroups();

  return (
    <Wrapper>
      <Inner>
        <Switch
          checked={withAccidents}
          onChange={(el) => {
            handleWithAccidents?.(el.target.checked);
          }}
          label={'Сортировка без аварий / с авариями'}
        />
        <Switch
          checked={withGroupName}
          onChange={(el) => {
            handleOnWithGroupName?.(el.target.checked);
          }}
          label={'Скрыть названия групп'}
        />
        <Switch
          checked={compactView}
          onChange={(el) => {
            handleOnCompactView?.(el.target.checked);
          }}
          label={'Компактный вид'}
        />
        <SearchButton
          onClick={() => {
            setShowInput((prev) => !prev);
            setShowBackDrop((prev) => !prev);
          }}
          size={'medium'}>
          <SearchIcon />
        </SearchButton>
        <SMuiInput
          placeholder={' '}
          onFocus={() => {}}
          sx={{
            transform: isShowInput ? 'translateX(0)' : 'translateX(785px)',
          }}
        />
      </Inner>
      <BackDrop
        sx={{
          transform: isShowBackDrop ? 'translateX(0px)' : 'translateX(6000px)',
        }}>
        <Title>
          <Checkbox
            checkboxProps={{
              defaultChecked: true,
              sx: {
                color: '#0F74FF',
                '&.Mui-checked': {
                  color: '#0F74FF',
                },
              },
            }}
            label={<Typography variant={'body.medium'}>Поиск по ШУНО</Typography>}
          />
          <Checkbox
            checkboxProps={{
              sx: {
                color: '#0F74FF',
                '&.Mui-checked': {
                  color: '#0F74FF',
                },
              },
            }}
            label={
              <Typography variant={'body.medium'}>
                Поиск по светильникам
              </Typography>
            }
          />
          <Checkbox
            checkboxProps={{
              sx: {
                color: '#0F74FF',
                '&.Mui-checked': {
                  color: '#0F74FF',
                },
              },
            }}
            label={
              <Typography variant={'body.medium'}>Искать везде</Typography>
            }
          />
        </Title>
        <Result>
          <Typography
            variant={'title.small'}
            bold>
            Результат поиска:
          </Typography>
          <ResultContent>
            {testArr.map((el, index) => {
              return (
                <Chip
                  key={index}
                  label={
                    <Typography
                      bold
                      variant={'label.small'}>
                      251-1
                    </Typography>
                  }
                />
              );
            })}
          </ResultContent>
        </Result>
      </BackDrop>
    </Wrapper>
  );
};

const BackDrop = styled(Box)`
  position: absolute;
  top: 37px;
  width: 700px;
  border-radius: 24px;
  box-shadow:
    0 -1px 4px 0 rgba(0, 0, 0, 0.03),
    0 5px 12px 0 rgba(0, 30, 69, 0.08);
  background: #ffffff;
  transition: all 0.3s;
  z-index: 2;
`;

const Title = styled(Box)`
  display: flex;
  padding: 16px;
  border-bottom: #ebeff2 2px solid;
`;

const Result = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  padding: 8px 8px 16px 16px;
`;

const ResultContent = styled(Box)`
  height: 168px;
  overflow: scroll;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

const SMuiInput = styled(MuiInput)`
  position: absolute;
  padding: 0 40px 0 20px;
  width: 766px;
  transition: all 0.3s;
`;

const Wrapper = styled(Box)`
  border-radius: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  padding: 8px;
  position: relative;
`;

const Inner = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  position: relative;
  overflow: hidden;
`;

const SearchButton = styled(IconButton)`
  color: #ffffff;
  background: #0f74ff;
  z-index: 1;
  :hover {
    color: #0f74ff;
    background: #ffffff;
  }
`;
