import React from 'react';
import './App.css';
import SettingPane from './components/SettingPane/SettingPane';
import { mockData } from './mock-settings-form-data';
import Styles from './App.style'

function App() {
  return (
    <Styles.PageContainer>
      <Styles.SettingPanesWrapper>
        {
          mockData && mockData.map((it, idx) => (
            <SettingPane
              key={idx}
              {...it}
            />
          ))
        }
      </Styles.SettingPanesWrapper>
    </Styles.PageContainer>
  );
}

export default App;
