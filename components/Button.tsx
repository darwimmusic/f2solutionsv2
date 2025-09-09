import React from 'react';

type ButtonProps<C extends React.ElementType> = {
  as?: C;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<C>;

const Button = <C extends React.ElementType = 'button'>({
  as,
  children,
  className,
  ...props
}: ButtonProps<C>) => {
  const Component = as || 'button';

  return (
    <Component
      className={`
        relative inline-flex items-center justify-center px-6 py-3
        text-white font-medium
        border-2 border-white rounded-full
        overflow-hidden
        transition-all duration-300 ease-in-out
        group
        ${className}
      `}
      {...props}
    >
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>
    </Component>
  );
};

export default Button;
