import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React from 'react';
import { useSearchParams } from 'react-router-dom';

import { TTabVariant } from '../../types';
import { Diagnostic } from '../Diagnostic';
import { Editor } from '../Editor';
import { Moslight } from '../Moslight';
import { OEK } from '../OEK';
import { Test } from '../Test';

const componentsList: Record<TTabVariant, React.ReactElement> = {
  diagnostic: <Diagnostic />,
  test: <Test />,
  oek: <OEK />,
  moslight: <Moslight />,
  mnemo: <Editor />,
};

interface IContentDefault {
  defaultTab: string;
}
export const Content = ({ defaultTab }: IContentDefault) => {
  const [getSearchParams] = useSearchParams();

  const value = (getSearchParams.get('variant') as TTabVariant) || defaultTab;

  const Component = componentsList[value];

  return <Wrapper>{Component}</Wrapper>;
};

const Wrapper = styled(Box)`
  display: flex;
  padding: 8px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 0 24px 24px 24px;
  background: #fff;
  width: 100%;
  height: fit-content;
`;
