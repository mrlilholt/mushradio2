"use client";
import { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Menu, X, Info, Settings, Home } from "lucide-react";
import { motion } from "framer-motion";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* 🏠 Menu Button (Hamburger Icon) */}
      <motion.button
        onClick={toggleDrawer}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="fixed top-4 left-4 text-white bg-gray-800 p-3 rounded-full shadow-lg"
      >
        <Menu className="w-6 h-6" />
      </motion.button>

      {/* 📂 Mini Sidebar Drawer (Now Super Slim) */}
      <Drawer
  open={isOpen}
  onClose={toggleDrawer}
  direction="left"
  className="w-16 p-4 flex flex-col space-y-6 items-center !max-w-[4rem] !min-w-[4rem]" // Force width to be icon-sized
  overlayClassName="!bg-transparent" // Optional: Removes overlay color
  style={{ width: "4rem", minWidth: "4rem", maxWidth: "4rem" }} // Enforces width at all breakpoints
>

        {/* ❌ Close Button */}
        <motion.button
          onClick={toggleDrawer}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="text-white"
        >
          <X className="w-5 h-5" />
        </motion.button>

        {/* 🏠 Home (New Icon) */}
        <motion.a
          href="/"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <Home className="w-8 h-8 text-yellow-400 hover:text-blue-400 transition" />
        </motion.a>

        {/* 📄 About */}
        <motion.a
          href="/about"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <Info className="w-8 h-8 text-pink-400 hover:text-blue-400 transition" />
        </motion.a>

        {/* ⚙️ Settings */}
        <motion.a
          href="/settings"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <Settings className="w-8 h-8 text-blue-400 hover:text-blue-400 transition" />
        </motion.a>
      </Drawer>
    </>
  );
}
