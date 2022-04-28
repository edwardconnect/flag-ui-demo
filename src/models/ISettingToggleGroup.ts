import ISettingToggle from './ISettingToggle';

export default interface ISettingToggleGroup {
  header: string;
  type: 'individual' | 'group';
  settings: ISettingToggle[]
}