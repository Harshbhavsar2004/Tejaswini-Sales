import { useEffect, useState } from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Sidebar } from '../header/sidebar'

export function UsersTable() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/api/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                return response.json()
            })
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error))
    }, [])
    console.log(users)
    const promoteToAdmin = (userId) => {
        fetch(`http://localhost:5000/api/users/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to update user role')
                }
                return response.json()
            })
            .then(() => {
                setUsers(users.map(user =>
                    user._id === userId ? { ...user, person: 'admin' } : user
                ))
            })
            .catch(error => console.error('Error updating user role:', error))
    }

    return (
        <Sidebar>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Email</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users.map((user) => (
                        <TableRow key={user._id}>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.person}</TableCell>
                            <TableCell>
                                {user.person === 'user' && (
                                    <Button
                                        onClick={() => promoteToAdmin(user._id)}
                                        size="sm"
                                    >
                                        Promote to Admin
                                    </Button>
                                )}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Sidebar>
    )
}
