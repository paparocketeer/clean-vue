export const statusFilterId = 'status-tabs';

export const actionTypes = {
  'change-action': 'change-action',
  'check-box-action': 'check-box-action',
} as const;

export const changeActionVariants = {
  'toggle-shuno-status': 'toggle-shuno-status',
  'toggle-shuno-type': 'toggle-shuno-type',
  'shuno-id': 'shuno-id',
} as const;

export const checkBoxActionVariants = {
  'data-checked-id': 'data-checked-id',
} as const;
