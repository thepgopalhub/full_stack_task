import { useEffect, useState } from 'react';
import axios from '../api/axiosInstance';

export default function ProjectSection() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('/projects')
      .then(res => {
        console.log('Projects:', res.data);  // ← add this to confirm
        setProjects(res.data);
      })
      .catch(err => console.error('Error fetching projects:', err));
  }, []);

  return (
    <section className="my-8">
      <h2 className="pb-2 mb-6 text-2xl font-bold text-center border-b">Our Projects</h2>


      {projects.length === 0 ? (
        <p className="text-gray-500">No projects available</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project) => (
            <div
  key={project._id}
  className="p-4 transition-shadow duration-300 bg-white border shadow-sm rounded-xl hover:shadow-lg"
>
              <img
                src={project.image}
                alt={project.name}
                className="object-cover w-full h-40 rounded"
              />
              <h3 className="mt-2 text-lg font-bold">{project.name}</h3>
              <p className="mt-1 text-sm">{project.description}</p>
              <button className="mt-2 text-blue-500">Read More</button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
