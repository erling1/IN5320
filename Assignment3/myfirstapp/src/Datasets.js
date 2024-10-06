import React, { useState } from "react";
import { useDataQuery } from "@dhis2/app-runtime"; 
import { Menu, MenuItem } from '@dhis2/ui';




const request = {
  request0: {
    resource: "/dataSets",
    params: {
      fields: "id,displayName,created",
      paging: "false",
    },
  },
};

export function Datasets() {

  const [selectedDataset, setSelectedDataset] = useState(null);

    const { loading, error, data } = useDataQuery(request)


    if (error) {
        return <span>ERROR: {error.message}</span>
    }

    if (loading) {
        return <span>Loading...</span>
    }

    if (data) {
       console.log("API response:",data)


       //To-do: return a component using the data response 
    }

    function tableClick (dataset){
      setSelectedDataset(dataset)
    
    }

    return (
      <>
        <div>
            <h1>Datasets</h1>
            <Menu>
            {data.request0.dataSets.map((dataset, index) => (
            <MenuItem key={index} label={dataset.displayName} onClick={() => tableClick(dataset)} />))}
            </Menu>
        </div>
        {selectedDataset && ( //conditional rendering, executes only if the dataset item is clicked
          <div>
            <Menu>
              <MenuItem label={selectedDataset.displayName}/>
              <MenuItem label={selectedDataset.id}/>
              <MenuItem label={selectedDataset.created}/>
            </Menu>
          </div>
        )}
      </>
    );
    

}

