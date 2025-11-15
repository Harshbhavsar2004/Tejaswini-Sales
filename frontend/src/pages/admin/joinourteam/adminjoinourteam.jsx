import { useState, useEffect } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Sidebar } from '../header/sidebar'

export default function ApplicationsTable() {
  const [applications, setApplications] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/job-applications')
        if (!response.ok) {
          throw new Error('Failed to fetch applications')
        }
        const data = await response.json()
        setApplications(data)
        setLoading(false)
      } catch (err) {
        setError('Failed to load applications. Please try again later.')
        setLoading(false)
      }
    }

    fetchApplications()
  }, [])

  if (loading) {
    return <div className="text-center">Loading...</div>
  }

  if (error) {
    return <div className="text-center text-red-600">{error}</div>
  }

  return (
    <Sidebar>
      <h1 className='text-2xl font-bold'>Joined Request</h1>
      <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Address</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {applications.map((application) => (
          <TableRow key={application.id}>
            <TableCell>{application.name}</TableCell>
            <TableCell>{application.email}</TableCell>
            <TableCell>{application.phone}</TableCell>
            <TableCell>{application.address}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </Sidebar>
  )
}
