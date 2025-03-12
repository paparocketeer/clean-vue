import { useAppDispatch } from 'src/shared/hooks/useAppDispatch';
import {
  IBreadcrumb,
  onUpdateBreadcrumb,
} from 'src/shared/store/slices/breadcrumbs';

export const useHandleBreadcrumbs = () => {
  const dispatch = useAppDispatch();

  const handleBreadcrumbs = (breadcrumbs: IBreadcrumb[] | IBreadcrumb) => {
    if (Array.isArray(breadcrumbs)) {
      dispatch(onUpdateBreadcrumb({ breadcrumbs }));
    } else {
      dispatch(
        onUpdateBreadcrumb({
          breadcrumbs: [{ text: breadcrumbs.text, path: breadcrumbs.path }],
        })
      );
    }
  };

  return {
    handleBreadcrumbs,
  };
};
