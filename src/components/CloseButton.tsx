function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      width="80"
      height="80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 80 80"
    >
      <path
        d="M40 0C17.898 0 0 17.898 0 40s17.898 40 40 40 40-17.898 40-40S62.102 0 40 0Zm20.699 54a4.772 4.772 0 0 1 0 6.8 4.772 4.772 0 0 1-6.8 0l-14-14-14 14a4.772 4.772 0 0 1-6.802 0 4.772 4.772 0 0 1 0-6.8l14-14-14-14a4.772 4.772 0 0 1 0-6.8 4.772 4.772 0 0 1 6.801 0l14 14 14-14a4.772 4.772 0 0 1 6.801 0 4.772 4.772 0 0 1 0 6.8l-14 14 14 14Z"
        fill="#0e1111"
      />
    </svg>
  );
}

export default function CloseButton({
  className,
  onClick,
}: {
  className?: string;
  onClick: () => void;
}) {
  return (
    <button type="button" className={className} onClick={onClick}>
      <CloseIcon className="w-6 h-6" />
      <span className="sr-only">Close</span>
    </button>
  );
}
