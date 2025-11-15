import Navbar from '@/components/navigation/navbar'
import { LoginForm } from './LoginForm'
import Footer from '@/components/footer/Footer'

export default function LoginPage() {
  return (
    <div>
      <Navbar/>
      <div className="flex min-h-screen">
      {/* Left side - Image */}
      <div className="hidden w-1/2 lg:block">
        <img
          src="/istockphoto-1406986907-612x612.jpg"
          alt="Mittal Distributor"
          className="h-full w-full object-contain"
        />
      </div>
      
      {/* Right side - Login Form */}
      <div className="flex w-full items-center justify-center lg:w-1/2">
        <div className="w-full max-w-md space-y-8 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Welcome to Mittal Distributor
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Please sign in to your account
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

