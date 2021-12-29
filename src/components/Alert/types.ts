type TAlertVariant = 'info' | 'warning' | 'success' | 'danger';

export type TAlertProps = {
  isVisible?: boolean,
  variant?: TAlertVariant;
};
