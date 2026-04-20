export interface NavigationButtonProps {
  href?: string;
  label: string;
  className?: string;
  icon?: React.ReactNode;
  arrow?: boolean;
  onClick?: () => void;
}