import React from 'react'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <div>
      <motion.h2>
          <motion.div
            className="mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300">Feel free to reach out:</p>
            <ul className="mt-6 space-y-4 text-gray-300">
              <li>Email: your-email@example.com</li>
              <li>
                LinkedIn:{" "}
                <a href="#" className="text-teal-400 underline">
                  Your LinkedIn Profile
                </a>
              </li>
              <li>
                GitHub:{" "}
                <a href="#" className="text-teal-400 underline">
                  Your GitHub Profile
                </a>
              </li>
            </ul>
            <img
              src="https://via.placeholder.com/600x400"
              alt="Contact illustration"
              className="rounded-xl shadow-lg mt-6"
            />
          </motion.div>
      </motion.h2>
      <footer className="text-center py-8 border-t border-gray-700">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
