import { NavigationProp, Route } from "@react-navigation/native"


export type HeaderProps = {
  subName? : string;
  mainName : string;
  leftIcon: 'chevron-back';
  secondIcon : 'home'|'notifications-sharp';
  navigation? : any;
}

export type DrawerProps = {
  move: string,
  closeDrawer: boolean,
}


