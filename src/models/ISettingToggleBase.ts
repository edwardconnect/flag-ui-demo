export default interface ISettingToggleBase {
  label: string;
  selectOptions?: number[] | number;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
