import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'

export function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  async function onSubmit(event) {
    event.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })

      if (!response.ok) {
        throw new Error('Failed to login')
      }

      const data = await response.json()
      console.log(data);
      
      localStorage.setItem('token', data.token)
      setIsLoading(false)
      toast.success('Login successful!')
      const userRole = data.user.role
      if (userRole === 'admin') {
        navigate('/admin')
      } else {
        navigate('/')
      }
    } catch (error) {
      setIsLoading(false)
      toast.error(error.message)
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <Toaster/>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="m@example.com" required type="email" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" value={password} onChange={(e) => setPassword(e.target.value)} required type="password" />
      </div>
      <Button className="w-full bg-red-600" type="submit" disabled={isLoading}>
        Sign In
      </Button>
      <div className='flex justify-center'>
      <p>Not Register yet ? <a href="/signup" className='font-bold'>Sign Up</a></p>
      </div>
    </form>
  )
}

