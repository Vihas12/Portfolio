import React from 'react'

export default function Project() {
  return (
    <div>
       <section id="projects" className="mb-20">
          <motion.h2
            className="text-3xl font-semibold text-teal-400"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {/* Example project card */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="shadow-lg bg-gray-800 rounded-xl overflow-hidden hover:scale-105 transition-transform"
            >
              <div className="p-4">
                <img
                  src="https://via.placeholder.com/300x200"
                  alt="Project Thumbnail"
                  className="w-full h-40 object-cover"
                />
                <h3 className="font-semibold text-lg text-teal-400 mt-2">
                  Project Name
                </h3>
                <p className="text-sm text-gray-400 mt-2">
                  Brief project description. Highlight technologies used.
                </p>
                <a
                  href="#"
                  className="inline-block mt-4 bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600"
                >
                  View More
                </a>
              </div>
            </motion.div>
            {/* Repeat for other projects */}
          </div>
        </section>

    </div>
  )
}
