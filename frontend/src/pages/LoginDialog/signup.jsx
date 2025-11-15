import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/footer/Footer";
export function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Failed to register");
      }

      const data = await response.json();
      setIsLoading(false);
      toast.success("Registration successful!");
      navigate("/login");
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  }

  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen">
        {/* Left side - Image */}
        <div className="hidden w-1/2 lg:block">
        <img
          src="/istockphoto-2054679980-612x612.jpg"
          alt="Mittal Distributor"
          className="h-full w-full object-contain rouned"
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
                Please Register in to your account
              </p>
            </div>
            <form onSubmit={onSubmit} className="space-y-6">
              <Toaster />
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="m@example.com"
                  required
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  type="password"
                />
              </div>
              <Button className="w-full bg-red-600" type="submit" disabled={isLoading}>
                Register
              </Button>
              <div className="flex justify-center">
                <p>Already Register! <a href="/login" className="font-bold">Login</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
