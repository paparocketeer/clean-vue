import { PATHS } from '../../constants';
import { iisunoNav } from '../../constants/navigation/iisunoNav';
import { utilityNav } from '../../constants/navigation/utilityNav';

export const usePath = () => {
  return {
    protectedPaths: PATHS.protected,
    unAuthorizedPaths: PATHS.unAuthorized,
    navigationList: iisunoNav,
    utilityList: utilityNav,
  };
};
