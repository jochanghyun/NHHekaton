import { NavigationProp, Route } from "@react-navigation/native"


export type HeaderProps = {
  subName? : string;
  mainName : string;
  leftIcon: 'chevron-back'|'';
  secondIcon : 'home'|'notifications-sharp';
  navigation? : any;
  isModal? : boolean ;
  setModalVisible? : Function;
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
  buttonText?: string;
}

export type GroupMettingProps = {
  groupType : string|'Service'|'Meeting'|'Goods'|'';
  groupName : string;
  groupMembers : Array<any>;
  navigation? : any;
}

export type selectedGroupProps= {
  groupName:string;
  groupType:string;
  members:Array<any>;
  startTime : string;
}

export type BilldivideProps = {
  navigation : any;
}