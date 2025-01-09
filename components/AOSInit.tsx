"use client"

import { useEffect } from "react"
import AOS from "aos"

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      easing: "ease-out-cubic",
      disable: "phone",
      startEvent: "DOMContentLoaded",
      mirror: true,
      offset: 50,
    });
  }, []);

  return null;
} 