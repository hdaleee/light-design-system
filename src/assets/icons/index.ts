import { ColorsType, IconNameType } from '../../types';
import Menu from './Menu';

const icons: Record<IconNameType, ({ color }: { color: ColorsType }) => JSX.Element> = {
  ic_menu: Menu,
};

export default icons;
