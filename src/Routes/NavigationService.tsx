import {CommonActions, StackActions} from '@react-navigation/native';
import {DrawerActions} from '@react-navigation/native';

let navigator;

function openDrawer() {
  navigator.dispatch(DrawerActions.openDrawer());
}
function closeDrawer() {
  navigator.dispatch(DrawerActions.closeDrawer());
}

export default {openDrawer, closeDrawer};
