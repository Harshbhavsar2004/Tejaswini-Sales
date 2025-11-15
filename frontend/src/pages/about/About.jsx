import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/footer/Footer";
import { useNavigate } from "react-router-dom";
const offices = [
  {
    id: 1,
    city: "Mumbai",
    state: "Maharashtra",
    year: "Metropolitan Hub - 2023",
    address: "Wagholi - Nirmal Rd, Wagholi, Nalasopara West, Nala Sopara, Maharashtra 401304",
    phone: "+91 95614 55502",
    map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3439.672807742172!2d72.77940177521377!3d19.409776681864773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDI0JzM1LjIiTiA3MsKwNDYnNTUuMSJF!5e1!3m2!1sen!2sin!4v1763189180991!5m2!1sen!2sin",
    description:
      "Our Mumbai office is the gateway to urban solar solutions. Opened in 2023, it caters to commercial, industrial, and residential clients across the metropolitan area.",
    details: [
      "Commercial solar consultancy",
      "Large-scale installation projects",
      "Customer service center",
      "Project management office",
    ],
  },
{
    id: 2,
    city: "Dhule",
    state: "Maharashtra",
    year: "Headquarters - 2019",
    address: "Veer Sawarkar Marg, bhideabaug, Deopur, Dhule, Maharashtra 424002",
    phone: "+91 97653 12906",
    email: "rajesh@tejaswinisolar.com",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.7738277992034!2d74.77254937484538!3d20.90955138071015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdec5bbd94a7c69%3A0x18b58da3be666a6a!2sTejaswini%20Solar%20Energy!5e1!3m2!1sen!2sin!4v1763187597556!5m2!1sen!2sin",
    description:
      "Our flagship headquarters in Dhule serves as the nerve center of Tejaswini Solar System. Established in 2001, this office manages operations across all regions and houses our core technical team.",
    details: [
      "State-of-the-art solar panel testing facility",
      "Technical support center for 3 states",
      "Corporate headquarters",
      "Inverter configuration lab",
    ],
  },
  {
    id: 3,
    city: "Pune",
    state: "Maharashtra",
    year: "Innovation Center - 2023",
    address: "Kashid Park, Kranti Nagar, Pimple Gurav, Pimpri-Chinchwad, Maharashtra 411061",
    phone: "+91 96840 16516, 89994 35728",
    email: "vikram@tejaswinisolar.com",
    map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3456.387829837037!2d73.81472397519369!3d18.603439282506237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDM2JzEyLjQiTiA3M8KwNDknMDIuMyJF!5e1!3m2!1sen!2sin!4v1763189226989!5m2!1sen!2sin",
    description:
      "Our Pune Innovation Center focuses on R&D and cutting-edge solar technology. Established in 2023, it drives technological advancement and sustainability initiatives.",
    details: [
      "Research & development hub",
      "Product innovation lab",
      "Tech-enabled customer solutions",
      "Sustainability initiatives",
    ],
  },
];

export default function AboutPage() {
   const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-b from-white to-slate-50 text-gray-900 min-h-screen">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative h-[500px] flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0">
            <img
              src="/background.jpg"
              className="w-full h-full object-cover object-center blur-sm scale-110"
              alt=""
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1),transparent)]"></div>
          </div>

          <div className="relative text-center text-white px-4 z-10">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-4 text-gray-800"
            >
              Our Journey of Solar Excellence
            </motion.h1>

            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl"
            >
              Powering India with Sustainable Energy Across Three Strategic Hubs
            </motion.p>
          </div>
        </motion.div>

        {/* Timeline Section */}
        <section className="max-w-7xl mx-auto px-4 py-20">
          <div className="space-y-24">
            {offices.map((office, index) => (
              <motion.div
                key={office.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                {/* Content Section */}
                <motion.div
                  initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={index % 2 === 1 ? "md:order-2" : "md:order-1"}
                >
                  <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    {office.year}
                  </div>

                  <h2 className="text-4xl font-bold mb-4 text-amber-600">
                    {office.city}
                  </h2>

                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                    {office.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {office.details.map((detail, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-slate-100 rounded-lg p-4 space-y-2">
                    <div className="flex items-center gap-3 text-gray-700">
                      <MapPin className="w-5 h-5 text-amber-600" />
                      <span className="text-sm">{office.address}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <Phone className="w-5 h-5 text-amber-600" />
                      <a
                        href={`tel:${office.phone}`}
                        className="text-sm hover:text-amber-600"
                      >
                        {office.phone}
                      </a>
                    </div>
                    
                  </div>
                </motion.div>

                {/* Google Map Section */}
                <motion.div
                  initial={{ x: index % 2 === 0 ? 50 : -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={index % 2 === 1 ? "md:order-1" : "md:order-2"}
                >
                  <div className="rounded-lg overflow-hidden shadow-xl w-full">
                    <iframe
                      src={office.map}
                      width="600"
                      height="450"
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </motion.div>

                {index < offices.length - 1 && (
                  <div className="col-span-full flex justify-center py-8">
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="w-1 h-16 bg-gradient-to-b from-amber-500 to-orange-400"
                    ></motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
       

        {/* Footer CTA */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 py-20 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Go Solar?</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Connect with our team at any of our three offices to explore how we
            can power your home or business with clean, sustainable solar
            energy.
          </p>
          <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => navigate("/contact")}
      className="bg-gradient-to-r from-amber-600 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
    >
      Contact Us Today
    </motion.button>
        </motion.section>
      </div>

      <Footer />
    </div>
  );
}
