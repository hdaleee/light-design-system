import { ColorsType, colors } from '../../types';

function Menu({ color = 'coral_main' }: { color?: ColorsType }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={colors[color]}>
      <path d="M1 11h22s1 0 1 1v0s0 1 -1 1h-22s-1 0 -1 -1v0s0 -1 1 -1" />
      <path d="M1 4h22s1 0 1 1v0s0 1 -1 1h-22s-1 0 -1 -1v0s0 -1 1 -1" />
      <path d="M1 18h22s1 0 1 1v0s0 1 -1 1h-22s-1 0 -1 -1v0s0 -1 1 -1" />
    </svg>
  );
}

export default Menu;
