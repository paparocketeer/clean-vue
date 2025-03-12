import React from 'react';

import { Contactor } from './Contactor';
import { Controls } from './Controls';
import { Dimensions } from './Dimensions';
import { Fuse } from './Fuse';
import { Letter } from './Letter';
import { Voltage } from './Voltage';

export const Left = () => {
  return (
    <>
      <Contactor
        text={'A'}
        number={'1'}
      />
      <Contactor
        text={'B'}
        number={'2'}
      />
      <Contactor
        text={'C'}
        number={'3'}
      />
      <Contactor
        text={'A'}
        number={'4'}
      />
      <Contactor
        text={'B'}
        number={'5'}
      />
      <Contactor
        text={'C'}
        number={'6'}
      />
      <Dimensions
        number={'1'}
        color={'red'}
        title={'Вечер'}
      />
      <Dimensions
        number={'2'}
        color={'green'}
        title={'Ночь'}
      />
      <Voltage
        number={'1'}
        ampere={'0'}
        volt={'0'}
      />
      <Voltage
        number={'2'}
        ampere={'0'}
        volt={'0'}
      />
      <Voltage
        number={'3'}
        ampere={'0'}
        volt={'0'}
      />
      <Fuse
        number={'1'}
        variant={'editor'}
      />
      <Fuse
        number={'2'}
        variant={'editor'}
      />
      <Fuse
        number={'3'}
        variant={'editor'}
      />
      <Letter
        number={'1'}
        text={'A'}
      />
      <Letter
        number={'2'}
        text={'B'}
      />
      <Letter
        number={'3'}
        text={'C'}
      />
      <Controls />
    </>
  );
};
