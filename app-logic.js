
const patientDB = {
  "123456": {
    name: "Daniel Ayo",
    dob: "1992-04-12",
    hospitalNumber: "APT-007",
    diagnosis: "Hypertension",
    prescription: "Amlodipine 5mg daily"
  },
  "789012": {
    name: "Jane Newman",
    dob: "1987-11-03",
    hospitalNumber: "NYC-111",
    diagnosis: "Asthma",
    prescription: "Ventolin inhaler"
  }
};

function loadPatientRecord(qrCodeValue) {
  const record = patientDB[qrCodeValue];
  const display = document.getElementById("record-display");
  const noRecords = document.getElementById("no-records");

  if (record) {
    display.innerHTML = `
      <h3>Patient Info</h3>
      <p><strong>Name:</strong> ${record.name}</p>
      <p><strong>DOB:</strong> ${record.dob}</p>
      <p><strong>Hospital Number:</strong> ${record.hospitalNumber}</p>
      <p><strong>Diagnosis:</strong> ${record.diagnosis}</p>
      <p><strong>Prescription:</strong> ${record.prescription}</p>
    `;
    display.classList.remove("hidden");
    noRecords.classList.add("hidden");
  } else {
    display.classList.add("hidden");
    noRecords.classList.remove("hidden");
  }
}
