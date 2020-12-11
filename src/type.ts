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

export type SelectModalProps = {
  list : Array<String>;
  
}

export type CustomCheckBoxProps={
  size : number;
  isChecked : boolean;
  setIsChecked : Function;
}

export type NextButtonProps = {
  navigation : any;
  nextView : string;
}