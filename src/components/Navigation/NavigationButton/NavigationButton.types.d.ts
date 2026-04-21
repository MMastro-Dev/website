import React from "react";

export interface NavigationButtonProps {
  href?: string;
  label: React.ReactNode;
  className?: string;
  additionalClassName?: string;
  onClick?: () => void;
}