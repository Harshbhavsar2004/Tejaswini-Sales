import { Phone, MessageCircle, MapPin, Mail, Calculator } from 'lucide-react'
import { cn } from "@/lib/utils"


const navItems = [
  {
    icon: <Phone className="h-6 w-6" />,
    label: "Toll Free",
    content: "+91 97653 12906",
    href:"/"
  },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    label: "WhatsApp",
    content: "+91 97653 12906",
    href: "https://wa.me/9765312906",
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    label: "Location",
    content: "Location",
    href: "https://maps.app.goo.gl/BGoSVhsRJMeoQDeP7",
  },
  {
    icon: <Mail className="h-6 w-6" />,
    label: "Email",
    content: "tejaswinisolarenergy@gmail.com",
    href: "mailto:tejaswinisolarenergy@gmail.com",
  }
]

export default function SlidingNav() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
      <nav className="flex flex-col gap-[2px] rounded">
        {navItems.map((item, index) => (
          <div
            key={index}
            className="group relative flex items-center justify-end"
          >
            {/* Content that slides out */}
            <div className="absolute right-full invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-in-out rounded">
              <div className="flex items-center bg-red-600 text-white py-3 px-4 mr-2">
                <span className="whitespace-nowrap">{item.content}</span>
              </div>
            </div>

            {/* Icon button wrapped with <a> tag */}
            <a href={item.href} className={cn(
              "bg-zinc-800 text-white p-4 cursor-pointer transition-all duration-300 ease-in-out hover:bg-zinc-700",
              item.href ? "block" : "hidden" // Only render if href is provided
            )}>
              {item.icon}
            </a>
          </div>
        ))}
      </nav>
    </div>
  )
}

