'use client'

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search } from 'lucide-react';
import { Sidebar } from '../header/sidebar';

export default function ConsultationsPage() {
  const [consultations, setConsultations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:5000/api/consultations')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setConsultations(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching consultations:', err);
        setError('Failed to fetch consultations');
        setLoading(false);
      });
  }, []);
  console.log(consultations);
  
  const deleteConsultation = (id) => {
    fetch(`http://localhost:5000/api/consultations/${id}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to delete consultation');
      }
      setConsultations(consultations.filter(consultation => consultation._id !== id));
    })
    .catch(error => {
      console.error('Error deleting consultation:', error);
      setError('Failed to delete consultation');
    });
  };

  const filteredConsultations = consultations.filter((consultation) =>
    consultation.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    consultation.whatsappNumber.includes(searchTerm) ||
    consultation.monthlyBill.includes(searchTerm) ||
    consultation.pincode.includes(searchTerm) ||
    consultation.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    consultation.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Sidebar>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6 text-sky-800">Consultation Requests</h2>
        <Card className="bg-white mb-6">
          <CardHeader>
            <CardTitle className="text-xl text-sky-800">Search Consultations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Search className="text-gray-400" />
              <Input
                type="text"
                placeholder="Search by name, number, bill, pincode, city, or email"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-grow"
              />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-xl text-sky-800">Consultation Details</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? <p>Loading...</p> : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[150px]">Type</TableHead>
                      <TableHead className="w-[150px]">Full Name</TableHead>
                      <TableHead className="w-[150px]">WhatsApp Number</TableHead>
                      <TableHead className="w-[150px]">Monthly Bill</TableHead>
                      <TableHead className="w-[100px]">Pincode</TableHead>
                      <TableHead className="w-[100px]">City</TableHead>
                      <TableHead className="w-[200px]">Email</TableHead>
                      <TableHead className="w-[100px]">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredConsultations.map((consultation) => (
                      <TableRow key={consultation._id}>
                        <TableCell className="font-medium">{consultation.type}</TableCell>
                        <TableCell className="font-medium">{consultation.fullName}</TableCell>
                        <TableCell>{consultation.whatsappNumber}</TableCell>
                        <TableCell>{consultation.monthlyBill}</TableCell>
                        <TableCell>{consultation.pincode}</TableCell>
                        <TableCell>{consultation.city}</TableCell>
                        <TableCell>{consultation.email}</TableCell>
                        <TableCell>
                          <button onClick={() => deleteConsultation(consultation._id)} className="text-red-500 hover:text-red-700">
                            Delete
                          </button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                {filteredConsultations.length === 0 && (
                  <p className="text-center text-gray-500 mt-4">No consultation requests found matching your search criteria.</p>
                )}
              </div>
            )}
            {error && <p className="text-red-500">{error}</p>}
          </CardContent>
        </Card>
      </div>
    </Sidebar>
  );
}
