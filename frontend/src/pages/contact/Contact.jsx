import { useState } from "react";
import { PhoneIcon, MessageCircle, Facebook, Linkedin } from "lucide-react";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navigation/navbar";
import { Separator } from "@/components/ui/separator";
import { Toaster, toast } from "react-hot-toast";

export default function ContactForm() {
  const [office, setOffice] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { office, name, email, phone, message };

    try {
      const response = await fetch(
        "http://localhost:5000/api/contacts",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        toast.success("Contact form submitted successfully!");
        setOffice("");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        throw new Error("Failed to submit contact form");
      }
    } catch (error) {
      toast.error("Failed to submit contact form");
    }
  };

  const validatePhone = (e) => {
    const value = e.target.value;
    setPhone(value);
    if (!/^\+?[\d\s-]+$/.test(value)) {
      setPhoneError("Enter a valid number");
    } else {
      setPhoneError("");
    }
  };

  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="flex-grow bg-slate-50 flex items-center justify-center p-4 min-h-screen">
        <Toaster />
        <div className="w-full max-w-6xl bg-white rounded-3xl overflow-hidden shadow-xl">
          <div className="flex flex-col md:flex-row">
            {/* Left Section */}
            <div className="bg-[#1a2234] text-white p-6 md:p-8 space-y-6 md:w-1/2">
              <h1 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-8">
                Request Quote
              </h1>
              <Separator className="bg-gray-600" />

              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex flex-col md:flex-row md:items-center gap-2">
                    <span className="font-medium md:w-32">Email Address</span>
                    <span className="text-sm md:text-base">
                      tejaswinisolarenergy@gmail.com
                    </span>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center gap-2">
                    <span className="font-medium md:w-32">Phone Number</span>
                    <span className="text-sm md:text-base">+91 9765312906 | 95614 55502 | 9684016516</span>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center gap-2">
                    <span className="font-medium md:w-32">Address</span>
                    <span className="text-sm md:text-base">Dhule | Mumbai | Pune</span>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="my-6 md:my-10 w-full h-48 md:h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.7738277992034!2d74.77254937484538!3d20.90955138071015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdec5bbd94a7c69%3A0x18b58da3be666a6a!2sTejaswini%20Solar%20Energy!5e1!3m2!1sen!2sin!4v1763187597556!5m2!1sen!2sin"
                  allowFullScreen=""
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Right Section */}
            <div className="bg-white p-6 md:p-8 md:w-1/2">
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Office Select */}
                <div>
                  <select
                    name="office"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={office}
                    onChange={(e) => setOffice(e.target.value)}
                    required
                  >
                    <option value="">Select Office</option>
                    <option value="Pune">Pune Office</option>
                    <option value="Mumbai">Mumbai Office</option>
                    <option value="Dhule">Dhule Office</option>
                  </select>
                </div>

                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={phone}
                    onChange={validatePhone}
                    required
                  />
                  {phoneError && (
                    <p className="text-red-500 text-sm mt-1">{phoneError}</p>
                  )}
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows={4}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-[#e07d6d] text-white py-3 rounded-lg transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
