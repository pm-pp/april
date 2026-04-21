/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

function App() {
  const [patients] = useState<any>([]);

  return (
    <div>
      <div>Patient List</div>
      <div>
        {patients.map((patient: any) => (
          <div key={patient.id}>
            <div>{patient.name}</div>
            <div>{patient.address}</div>
            <div>{patient.dateOfBirth}</div>
            <div>---</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
