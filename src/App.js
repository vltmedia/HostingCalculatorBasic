import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import MyForm from './pages/inputForm';
import AIProcess from './classes/aiProcess';
import DataTableCalc from './pages/dataTable';
function App() {
  const [processes, setProcesses] = useState([]);
  const onSubmit = (data, form) => {
    const aiProcess = new AIProcess(data.name, data.ph, data.secondsprocess, data.estimatedruntime);
    const processes_ = [...processes];
    processes_.push(aiProcess);
    setProcesses(processes_);
    // form.restart();
};


  return (
    <div className="App">
        <MyForm onSubmit={onSubmit}/>
        <DataTableCalc data={processes}/>

    </div>
  );
}

export default App;
