import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone } from "lucide-react";
import { Sidebar } from "../header/sidebar";
import ApplicationsTable from "../joinourteam/adminjoinourteam";

export default function Dashboard() {
  const [dailyConsultations, setDailyConsultations] = useState(0);
  const [dailyContacts, setDailyContacts] = useState(0);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchDailyCalls = async () => {
      const response = await fetch('http://localhost:5000/api/calls/daily-calls');
      const data = await response.json();
      setDailyConsultations(data.dailyConsultations);
      setDailyContacts(data.dailyContacts);
    };

    const fetchApplications = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/job-applications');
        if (!response.ok) {
          throw new Error('Failed to fetch applications');
        }
        const data = await response.json();
        setApplications(data);
      } catch (error) {
        console.error("Failed to fetch applications:", error);
      }
    };

    fetchDailyCalls();
    fetchApplications();
  }, []);

  return (
    <Sidebar>
      <h2 className="text-2xl font-bold mb-6 text-sky-800">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card className="bg-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium text-gray-500">
              Daily Consultations
            </CardTitle>
            <Phone className="w-4 h-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-sky-800">{dailyConsultations}</div>
          </CardContent>
        </Card>
        
        <Card className="bg-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium text-gray-500">
              Daily Contacts
            </CardTitle>
            <Phone className="w-4 h-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-sky-800">{dailyContacts}</div>
          </CardContent>
        </Card>
      </div>
    </Sidebar>
  );
}
