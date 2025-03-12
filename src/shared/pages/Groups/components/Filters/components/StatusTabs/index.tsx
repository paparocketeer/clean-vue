import React, { useEffect } from 'react';
import { TabsVar4 } from 'src/shared/ui/Tabs/TabsVar4';

export const StatusTabs = () => {
  const tabId = 'status';

  return (
    <TabsVar4
      name={tabId}
      items={[
        {
          label: 'Все',
          id: 'all',
        },
        {
          label: 'Отключено',
          id: 'disabled',
        },
        {
          label: 'Вечер',
          id: 'evening',
        },
        {
          label: 'Ночь',
          id: 'night',
        },
        {
          label: 'Пожар',
          id: 'fire',
        },
        {
          label: 'Дверь',
          id: 'door',
        },
        {
          label: 'Авария',
          id: 'accident',
        },
        {
          label: 'Нет связи',
          id: 'offline',
        },
        {
          label: 'Автономный',
          id: 'auto',
        },
        {
          label: 'Блокировано',
          id: 'block',
        },
      ]}
    />
  );
};
