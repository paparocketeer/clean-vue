import styled from '@emotion/styled';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import MuiInput from '@mui/material/Input';
import React, { useEffect, useRef, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { CheckedIcon, SearchIcon } from 'src/shared/icons';
import { Typography } from 'src/shared/ui';

import { useAppSelector } from '../../hooks/useAppSelector';
import { selectGroupsItem } from '../../store/selectors/groupItem';
import { TabsVar1 } from './TabsVar1';
import { ITabsProps } from './types';

const testArr = new Array(40).fill('', 0, 40);

export const TabsVar4 = ({ items, name, onChange }: ITabsProps) => {
  const [isShowInput, setShowInput] = useState(false);
  const [isShowBackDrop, setShowBackDrop] = useState(false);
  const [searchVal, setSearchVal] = useState('');
  const ref = useRef<any>();
  const { groupId } = useParams();

  const { points, ...rest } = useAppSelector(selectGroupsItem);
  const point = points[groupId as any];

  const [getSearchParams, setSearchParams] = useSearchParams();

  const handleChange = (e: React.SyntheticEvent, value: string) => {
    if (e.type === 'click') {
      let obj = {};
      for (const entry of (getSearchParams as any).entries()) {
        const [param, value] = entry;
        obj[param] = value;
      }
      setSearchParams({
        ...obj,
        [name]: value,
      });
      onChange?.(value);
    }
    if (e.type === 'change') {
      setSearchVal((e.target as any).value);
    }
    return value;
  };

  useEffect(() => {
    const tabVal = getSearchParams.get(name) || 'all';
    if (searchVal) {
      onChange?.(tabVal, searchVal);
    }
  }, [searchVal]);

  useEffect(() => {
    let obj = {};
    for (const entry of (getSearchParams as any).entries()) {
      const [param, value] = entry;
      obj[param] = value;
    }

    const tabVal = getSearchParams.get(name);

    if (!tabVal) {
      setSearchParams({
        ...obj,
        [name]: items[0].id,
      });
      onChange?.(items[0].id);
    } else {
      const index = items.findIndex(
        (el) => el.id === getSearchParams.get(name)
      );
      onChange?.(items[index].id);
    }
  }, []);

  return (
    <MuiTabsWrapper>
      <Inner ref={ref}>
        {items.map((el) => {
          const isActive = el.id === getSearchParams.get(name);

          return (
            <TabItem
              selected={isActive}
              key={el.id}
              onClick={(e) => {
                handleChange(e, el.id);
              }}>
              <TabItemInner>
                {isActive ? <CheckedIcon /> : undefined}
                <Typography
                  style={{
                    whiteSpace: 'nowrap',
                  }}
                  variant={'label.medium'}
                  color={isActive ? 'colors.White' : 'colors.Black'}
                  bold>
                  {el.label}
                </Typography>
                <Count selected={isActive}>
                  <Typography
                    variant={'label.medium'}
                    color={'colors.Black'}
                    bold>
                    {point?.statistic?.[el.id] || 0}
                  </Typography>
                </Count>
              </TabItemInner>
            </TabItem>
          );
        })}
        <SearchButton
          onClick={() => {
            setShowInput((prev) => !prev);
            setShowBackDrop((prev) => !prev);
          }}
          size={'medium'}>
          <SearchIcon />
        </SearchButton>
        <SMuiInput
          value={searchVal}
          placeholder={' '}
          onFocus={() => {}}
          onChange={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setSearchVal(e.target.value);
          }}
          sx={{
            transform: isShowInput ? 'translateX(0)' : 'translateX(2000px)',
            width: ref?.current?.offsetWidth,
          }}
        />
        <BackDrop
          sx={{
            transform: isShowBackDrop
              ? 'translateX(0px)'
              : 'translateX(3000px)',
            width: ref?.current?.offsetWidth,
          }}
          style={{
            top: '70px',
          }}>
          <Title>
            <TabsVar1
              name={'filter-pp'}
              items={[
                {
                  label: 'Общий поиск',
                  id: '0',
                },
                {
                  label: 'Поиск ШУНО',
                  id: '1',
                },
                {
                  label: 'Поиск по адресам',
                  id: '2',
                },
                {
                  label: 'Поиск светильника',
                  id: '3',
                },
                {
                  label: 'Поиск опоры',
                  id: '4',
                },
              ]}
            />
          </Title>
          <Result>
            <Typography
              variant={'title.small'}
              bold>
              Результат поиска:
            </Typography>

            <Typography
              variant={'title.small'}
              sx={{
                color: '#6B7C84',
              }}
              bold>
              ШУНО:
            </Typography>

            <ResultContent>
              {testArr.map((el, index) => {
                return (
                  <Chip
                    sx={{
                      background: '#EBEFF2',
                      cursor: 'pointer',
                    }}
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

            <Typography
              variant={'title.small'}
              sx={{
                color: '#6B7C84',
              }}
              bold>
              Поиск по адресам:
            </Typography>

            <ResultContent>
              {testArr.map((el, index) => {
                return (
                  <Chip
                    sx={{
                      background: '#EBEFF2',
                      cursor: 'pointer',
                    }}
                    key={index}
                    label={
                      <Typography
                        bold
                        variant={'label.small'}>
                        улица Ленина, 25
                      </Typography>
                    }
                  />
                );
              })}
            </ResultContent>

            <Typography
              variant={'title.small'}
              sx={{
                color: '#6B7C84',
                cursor: 'pointer',
              }}
              bold>
              Поиск светильника:
            </Typography>

            <ResultContent>
              {testArr.map((el, index) => {
                return (
                  <Chip
                    sx={{
                      background: '#EBEFF2',
                      cursor: 'pointer',
                    }}
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

            <Typography
              variant={'title.small'}
              sx={{
                color: '#6B7C84',
              }}
              bold>
              Поиск опоры:
            </Typography>

            <ResultContent>
              {testArr.map((el, index) => {
                return (
                  <Chip
                    sx={{
                      background: '#EBEFF2',
                      cursor: 'pointer',
                    }}
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
      </Inner>
    </MuiTabsWrapper>
  );
};

const TabItem = styled(Box)<{ selected: boolean }>`
  user-select: none;
  cursor: pointer;
  border-radius: 100px;
  height: 33px;
  width: 100%;
  background: #e7f1ff;
  color: #000000;
  border: none;
  opacity: 1;
  padding: 6px 16px 6px 10px;
  text-transform: none;
  ${(p) =>
    p.selected
      ? {
          background: '#0f74ff',
          color: '#ffffff !important',
        }
      : {}}}
`;

const TabItemInner = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border-radius: 100px;
`;

const MuiTabsWrapper = styled(Box)`
  padding: 4px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Inner = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e7f1ff;
  border-radius: 100px;
  padding: 4px;
  height: 40px;
`;

const Count = styled(Box)<{ selected: boolean }>`
  border-radius: 100px;
  background: #fff;
  display: flex;
  height: 21px;
  padding: 2px 6px;
  justify-content: center;
  align-items: center;
  ${(p) =>
    p.selected
      ? {
          background: '#E7F1FF',
        }
      : {}}}
`;

const SearchButton = styled(IconButton)`
  color: #ffffff;
  background: #0f74ff;
  z-index: 1;
  margin-left: 8px;
  :hover {
    color: #0f74ff;
    background: #ffffff;
  }
`;

const SMuiInput = styled(MuiInput)`
  position: absolute;
  padding: 0 40px 0 20px;
  transition: all 0.3s;
  height: 41px;
  border-radius: 100px;
`;

const BackDrop = styled(Box)`
  position: absolute;
  top: 37px;
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
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;
