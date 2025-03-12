import styled from '@emotion/styled';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useRef, useState } from 'react';
import Dropzone from 'react-dropzone';

import { CloseIcon, FileIcon, FileSelectionIcon } from '../../icons';
import { Typography } from '../base/Typography';

interface IBigFileSelectProps {
  withFileCount?: boolean;
  helpText?: string;
}
const defaultHelpText = 'Выберите файл или перетащите его в поле загрузки';
export const BigFileSelect = ({
  withFileCount = true,
  helpText = defaultHelpText,
}: IBigFileSelectProps) => {
  const inputRef: React.MutableRefObject<HTMLInputElement> | any = useRef(null);
  const [fileList, setFIleList] = useState<File[]>([]);

  return (
    <Wrapper withFileCount={withFileCount}>
      <Dropzone
        onDrop={(acceptedFiles) =>
          setFIleList((prev) => [...prev, ...acceptedFiles])
        }>
        {({ getRootProps, getInputProps }) => (
          <Left
            {...getRootProps()}
            withFileCount={withFileCount}>
            <LeftTop>
              <FileSelectionIcon />
            </LeftTop>
            <LeftText>
              <Typography
                variant={'body.medium'}
                color={'alert.alert-gray-dark'}>
                {helpText}
              </Typography>
              <Button
                onClick={() => {
                  inputRef.current.click();
                }}
                variant={'outlined'}
                startIcon={
                  <FileIcon
                    width={16}
                    height={16}
                  />
                }>
                Выбрать файл
              </Button>
            </LeftText>
            <input {...getInputProps()} />
          </Left>
        )}
      </Dropzone>
      {withFileCount && (
        <Right>
          <Typography variant={'title.small'}>Прикрепленные файлы:</Typography>
          <RightContent>
            {fileList.map((el) => {
              return (
                <Button
                  key={el.name}
                  variant={'outlined'}
                  endIcon={
                    <CloseIcon
                      onClick={() => {
                        setFIleList(fileList.filter((i) => i.name !== el.name));
                      }}
                    />
                  }>
                  {el.name}
                </Button>
              );
            })}
          </RightContent>
        </Right>
      )}
    </Wrapper>
  );
};

const Wrapper = styled(Box)<{ withFileCount: boolean }>`
  ${(p) =>
    p.withFileCount
      ? `
      display: grid;
      grid-template-columns: 1fr 1fr;
  `
      : `
      display: flex;
  `}

  gap: 16px;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled('form')<{ withFileCount: boolean }>`
  display: flex;
  width: 100%;
  height: 100%;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 16px;
  ${(p) =>
    p.withFileCount
      ? `
      padding: 16px;
      border: 1px solid ${p.theme.palette.Palette['palette-primary-blue']['palette-primary-blue-200']};`
      : `display: flex;`}
  background: ${(p) => p.theme.palette.colors.White};
`;

const LeftText = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 16px;
  width: 100%;
  flex: 1 0 0;
  align-self: stretch;
`;

const LeftTop = styled(Box)`
  width: 100%;
  height: 122px;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: #f1f7ff;
`;

const Right = styled(Box)`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  width: 100%;
  height: 100%;
  padding: 16px;
  gap: 8px;
  border: 1px solid
    ${(p) =>
      p.theme.palette.Palette['palette-primary-blue'][
        'palette-primary-blue-200'
      ]};
  background: ${(p) => p.theme.palette.colors.White};
`;

const RightContent = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
