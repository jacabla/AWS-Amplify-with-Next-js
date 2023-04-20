import React from "react";

export default function Map() {
  return (
    <div className="relative w-full h-96">
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10730.10118930394!2d-74.0059410649514!3d40.71278400267098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2395fb61b2d5fe10!2sStatue%20of%20Liberty%20National%20Monument!5e0!3m2!1sen!2sus!4v1619155786346!5m2!1sen!2sus"
        className="absolute inset-0 w-full h-full"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}
