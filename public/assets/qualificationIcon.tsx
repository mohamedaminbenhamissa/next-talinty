function QualificationIcon({
  width = 24,
  height = 24,
}: {
  width?: number;
  height?: number;
  fill?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M10.75 22.5H13.27C14.23 22.5 14.85 21.82 14.67 20.99L14.26 19.1801H9.76001L9.35002 20.99C9.17002 21.77 9.85001 22.5 10.75 22.5Z"
        stroke="#F3CB05"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.26 19.1701L15.99 17.63C16.96 16.77 17 16.17 16.23 15.2L13.18 11.33C12.54 10.52 11.49 10.52 10.85 11.33L7.8 15.2C7.03 16.17 7.02999 16.8 8.03999 17.63L9.77 19.1701"
        stroke="#F3CB05"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.01 11.12V13.65"
        stroke="#F3CB05"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.52 5H11.52C10.97 5 10.52 4.55 10.52 4V3C10.52 2.45 10.97 2 11.52 2H12.52C13.07 2 13.52 2.45 13.52 3V4C13.52 4.55 13.07 5 12.52 5Z"
        stroke="#F3CB05"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.27002 14.17H4.27002C4.82002 14.17 5.27002 13.72 5.27002 13.17V12.17C5.27002 11.62 4.82002 11.1699 4.27002 11.1699H3.27002C2.72002 11.1699 2.27002 11.62 2.27002 12.17V13.17C2.27002 13.72 2.72002 14.17 3.27002 14.17Z"
        stroke="#F3CB05"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.73 14.17H19.73C19.18 14.17 18.73 13.72 18.73 13.17V12.17C18.73 11.62 19.18 11.1699 19.73 11.1699H20.73C21.28 11.1699 21.73 11.62 21.73 12.17V13.17C21.73 13.72 21.28 14.17 20.73 14.17Z"
        stroke="#F3CB05"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.52 3.56C6.71 4.01 3.75 7.23998 3.75 11.17"
        stroke="#F3CB05"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.25 11.17C20.25 7.24998 17.31 4.03 13.52 3.56"
        stroke="#F3CB05"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default QualificationIcon;
