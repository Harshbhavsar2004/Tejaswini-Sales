import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { motion } from "framer-motion";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/footer/Footer";

// ⭐ Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProjectsPage() {
  const [applications, setApplications] = useState([]);

  // Auto-load images from folder
  const imageFiles = import.meta.glob("/public/applications/*.{jpg,jpeg,png}", {
    eager: true,
  });
  const appImages = Object.values(imageFiles).map((img) => img.default);

  // Big static projects
  const bigProjects = [
    { name: "500 kW Solar Plant - Nashik", location: "Nashik", image: "/projects/p1.jpg", capacity: "500 kW" },
    { name: "350 kW Industrial Plant - Pune", location: "Pune", image: "/projects/p2.jpg", capacity: "350 kW" },
    { name: "250 kW Commercial Plant - Mumbai", location: "Mumbai", image: "/projects/p3.jpg", capacity: "250 kW" },
    { name: "120 kW Govt Building Plant", location: "Dhule", image: "/projects/p4.jpg", capacity: "120 kW" },
    { name: "100 kW Housing Society", location: "Nagpur", image: "/projects/p5.jpg", capacity: "100 kW" },
    { name: "80 kW Office Complex", location: "Aurangabad", image: "/projects/p6.jpg", capacity: "80 kW" },
    { name: "60 kW Textile Factory", location: "Malegaon", image: "/projects/p7.jpg", capacity: "60 kW" },
    { name: "55 kW Warehouse Plant", location: "Jalgaon", image: "/projects/p8.jpg", capacity: "55 kW" },
    { name: "40 kW Hospital Plant", location: "Solapur", image: "/projects/p9.jpg", capacity: "40 kW" },
    { name: "30 kW School Rooftop", location: "Dhule", image: "/projects/p10.jpg", capacity: "30 kW" },
  ];

  useEffect(() => {
    fetch("/My_Applications_List.xlsx")
      .then((res) => res.arrayBuffer())
      .then((buffer) => {
        const workbook = XLSX.read(buffer, { type: "array" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const json = XLSX.utils.sheet_to_json(sheet);

        const withImages = json.map((item) => ({
          ...item,
          image: appImages[Math.floor(Math.random() * appImages.length)],
        }));

        setApplications(withImages);
      });
  }, []);

  return (
    <div>
      <Navbar />

      <div className="p-6 max-w-7xl mx-auto">

        {/* --------------------------
            TOP PROJECTS
        -------------------------- */}
        <h1 className="text-3xl font-bold mb-6">Top 10 Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {bigProjects.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-xl overflow-hidden shadow-lg bg-white"
            >
              <img src={p.image} className="w-full h-52 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{p.name}</h2>
                <p className="text-gray-600">{p.location}</p>
                <p className="font-medium mt-2">{p.capacity}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --------------------------
            CUSTOMER APPLICATIONS — NOW SWIPER
        -------------------------- */}
        <h2 className="text-2xl font-bold mb-4">Customer Applications</h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500 }}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
          className="pb-10"
        >
          {applications.map((item, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl overflow-hidden shadow-lg bg-white mb-10"
              >
                <img
                  src={item.image}
                  className="w-full h-60 object-contain object-top"
                />

                <div className="p-4">
                  <h3 className="text-lg font-semibold">{item["Applicant Name"]}</h3>
                  <p><strong>Application:</strong> {item["Application Number"]}</p>
                  <p><strong>Customer Name:</strong> {item["Consumer Name"]}</p>
                  <p><strong>Capacity:</strong> {item["Proposed Capacity (kWp)"]}</p>
                  <p><strong>Consumer:</strong> {item["Consumer Number"]}</p>
                  <p><strong>Discom:</strong> {item["Discom Name"]}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      <Footer />
    </div>
  );
}
