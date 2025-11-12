// pages/PatientDetailsPage.tsx
import React from 'react';
import { PatientDashboard } from '../components/PatientDashboard.tsx';

const PatientDetailsPage: React.FC = () => {
    return (
        <PatientDashboard
            patientListEndpoint="http://localhost:5000/api/patients"
            dashboardApiEndpoint="http://localhost:5000/api/patientDetails" // <-- CHANGED
            selectorLabel="Select Patient"
            noPatientsMessage="No patients found"
            isOngoing={false}
        />
    );
};

export default PatientDetailsPage;