import clsx from 'clsx';

type ButtonType = 'submit' | 'reset' | 'button' | undefined;
export type ButtonStyle = 'primary' | 'secondary' | 'disabled';

export default function Button({
  buttonStyle = 'primary',
  children,
  className,
  disabled,
  onClick,
  type,
}: {
  buttonStyle?: ButtonStyle;
  children: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type: ButtonType;
}) {
  const styleClasses = clsx('h-12 px-8 rounded text-center', {
    'bg-black text-white': buttonStyle === 'primary',
    'bg-white text-black border': buttonStyle === 'secondary',
    'bg-slate-200 text-black border opacity-50 cursor-not-allowed':
      buttonStyle === 'disabled',
  });

  return (
    <button
      type={type}
      disabled={disabled}
      className={`${styleClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
