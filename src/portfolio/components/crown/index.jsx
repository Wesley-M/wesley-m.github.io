import { useTheme } from '@mui/material';

export const Crown = (props) => {
  const { type = 'bronze', width = '20px', height = '13px', ...other } = props;

  const theme = useTheme();

  const getColor = (type) => {
    return type === 'gold' ? theme.colors.gold : type === 'silver' ? theme.colors.silver : theme.colors.bronze;
  };

  return (
    <svg {...other} width={width} height={height} xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.4575 2.65468C10.7889 2.37953 11 1.96441 11 1.5C11 0.671573 10.3284 0 9.5 0C8.67157 0 8 0.671573 8 1.5C8 1.96481 8.21142 2.38025 8.54334 2.65538L5.90324 7.22072L2.87409 5.10251C2.95506 4.91811 3 4.7143 3 4.5C3 3.67157 2.32843 3 1.5 3C0.671573 3 0 3.67157 0 4.5C0 5.32843 0.671573 6 1.5 6C1.50825 6 1.51649 5.99993 1.52471 5.9998L3.00564 12.2311L3.00707 12.2301H15.9949L15.9902 12.2219L15.9943 12.2247L17.4738 5.99978L17.5 6C18.3284 6 19 5.32843 19 4.5C19 3.67157 18.3284 3 17.5 3C16.6716 3 16 3.67157 16 4.5C16 4.71242 16.0442 4.91453 16.1238 5.09764L13.095 7.21551L10.4575 2.65468Z"
        fill={getColor(type)}
      />
    </svg>
  );
};
