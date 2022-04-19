import React from 'react';
import { SenchaGrid, Column, IntegerColumn, DateColumn } from '@sencha/sencha-grid';
import '@sencha/sencha-grid/dist/themes/grui.css';

function App() {

  const store = {
    loadData: async function loadData() {
      const response = await fetch(
        'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson',
      );
      const jsonResponse = await response.json();
      const dataArray = await jsonResponse;
      const { features } = dataArray;
      const data = features.map((property: any) => property.properties);
      return data;
    },
    autoLoad: true,
    autoSync: true,
  };


  return (
    <div className="App">
      <SenchaGrid store={store} >
        <DateColumn field="time" text="Date" />
        <Column field="mag" text="Magnitude" />
        <Column field="place" text="Location" flex={1} />
      </SenchaGrid>
    </div>
  );
}

export default App;
