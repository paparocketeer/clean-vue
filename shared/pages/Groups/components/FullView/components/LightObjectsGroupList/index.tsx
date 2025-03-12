import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import React, { useEffect, useRef, useState } from 'react';
import { TLocalGroupItem } from 'src/shared/store/api/groups/groups.types';
import { SegmentLoader } from 'src/shared/ui';
import { WithContent } from 'src/shared/utils/WithContent';

import { Item } from './components/Item';

interface ILightObjectsGroupListProps {
  data?: Record<number, TLocalGroupItem>;
}

export const LightObjectsGroupList = ({
  data,
}: ILightObjectsGroupListProps) => {
  const wrapperRef = useRef();
  const [itemWidth, setItemWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const handleResize = () => {
    if (wrapperRef?.current) {
      const width = (wrapperRef.current as any)?.offsetWidth || 0;

      for (let i = 9; i !== 2; i--) {
        if (width / i > 300) {
          setItemWidth(Math.floor(width / i) - 14);
          return;
        }
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const width = (wrapperRef.current as any)?.offsetWidth || 0;
      if (width !== containerWidth) {
        setContainerWidth(width);
        handleResize();
      }
    }, 500);

    window.addEventListener('resize', handleResize, false);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
    };
  }, []);

  if (!data) {
    return <></>;
  }

  return (
    <Wrapper ref={wrapperRef}>
      <Inner>
        <WithContent
          placeholder={<SegmentLoader />}
          isShow={!!itemWidth && !!containerWidth}>
          {Object.values(data).map((el) => {
            return (
              <Item
                {...el}
                key={el.id}
                width={itemWidth}
              />
            );
          })}
        </WithContent>
      </Inner>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
`;
const Inner = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 16px;
`;
