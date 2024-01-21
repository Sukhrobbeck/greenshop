import { FC } from "react";

type ButtonType = {
  children: React.ReactNode | string;
  className?: string;
  type?: "submit" | "reset";
  onClick?: () => any;
  disabled?: boolean;
};

const Button: FC<ButtonType> = ({
  children,
  className = "",
  type,
  onClick,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`bg-[#46A358] flex rounded-l-none rounded-r-md items-center justify-center gap-1 text-base text-white ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
