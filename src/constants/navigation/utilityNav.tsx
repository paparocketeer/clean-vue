import { HelpIcon } from 'src/shared/icons/Help';
import { SettingIcon } from 'src/shared/icons/Setting';

import { AdministrationIcon } from '../../shared/icons';
import { PATHS } from '../paths';

export const utilityNav: INavEl[] = [
  {
    text: 'Администрирование',
    path: PATHS.protected.iisuno.administration.index(),
    icon: <AdministrationIcon />,
  },
  {
    text: 'Настройка',
    path: PATHS.utility.setting.index(),
    icon: <SettingIcon />,
  },
  {
    text: 'Поддержка',
    path: PATHS.utility.support.index(),
    icon: <HelpIcon />,
  },
];
