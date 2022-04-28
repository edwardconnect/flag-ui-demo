import ISettingToggleGroup from './models/ISettingToggleGroup';
export const mockData: ISettingToggleGroup[] = [
  {
    header: "General",
    type: "individual",
    settings: [
      {
        label: "Case Management",
        checked: false,
      },
      {
        label: "Map Timeline",
        checked: false,
      },
      {
        label: "Views & Briefings",
        checked: false,
      },
      {
        label: "Notifications",
        checked: false,
      },
      {
        label: "Mass Communications",
        checked: false,
      },
      {
        label: "Traffic Cameras",
        checked: false,
      }
    ]
  },
  {
    header: "Settings",
    type: "group",
    settings: [
      {
        label: "Adult Logs",
        checked: false,
      },
      {
        label: "Users",
        checked: false,
        children: [
          {
            label: "User Add",
            checked: false,
          },
          {
            label: "User Delete",
            checked: false,
          },
          {
            label: "User Edit",
            checked: false,
          },
          {
            label: "Max Users",
            checked: false,
            selectOptions: 10,
          },
        ]
      },
    ]
  },
  {
    header: "Alerts",
    type: "group",
    settings: [
      {
        label: "Alert Manager",
        checked: true
      },
      {
        label: "Alert Rules",
        checked: false,
        selectOptions: [1, 3, 7]
      }
    ]
  }
]