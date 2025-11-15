import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Sidebar } from '../header/sidebar';

export default function ConsumerDetailsPage() {
  const [consumers, setConsumers] = useState([]);

  useEffect(() => {
    const fetchConsumers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/contacts/getcontacts');
        const data = await response.json();
        console.log(data);
        
        setConsumers(data);
      } catch (error) {
        console.error('Failed to fetch consumers:', error);
      }
    };

    fetchConsumers();
  }, []);

  return (
    <Sidebar>
        <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-5">Consumer Details</h1>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Message</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {consumers.map((consumer) => (
              <TableRow key={consumer.id}>
                <TableCell>{consumer._id}</TableCell>
                <TableCell>{consumer.name}</TableCell>
                <TableCell>{consumer.email}</TableCell>
                <TableCell>{consumer.phone}</TableCell>
                <TableCell>{consumer.message}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
    </Sidebar>
  );
} 