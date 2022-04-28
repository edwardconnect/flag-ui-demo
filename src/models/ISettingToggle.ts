import ISettingToggleBase from './ISettingToggleBase';

export default interface ISettingToggle extends ISettingToggleBase{
  children?: ISettingToggleBase[];
}