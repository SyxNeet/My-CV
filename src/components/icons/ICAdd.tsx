const ICAdd = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 3C9.41421 3 9.75 3.33579 9.75 3.75V14.25C9.75 14.6642 9.41421 15 9 15C8.58579 15 8.25 14.6642 8.25 14.25V3.75C8.25 3.33579 8.58579 3 9 3Z"
        fill="#121216"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 9C3 8.58579 3.33579 8.25 3.75 8.25H14.25C14.6642 8.25 15 8.58579 15 9C15 9.41421 14.6642 9.75 14.25 9.75H3.75C3.33579 9.75 3 9.41421 3 9Z"
        fill="#121216"
      />
    </svg>
  );
};

export default ICAdd;
