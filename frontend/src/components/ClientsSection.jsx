import { useEffect, useState } from 'react';
import axios from '../api/axiosInstance';

export default function ClientsSection() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios.get('/clients')
      .then(res => setClients(res.data))
      .catch(err => console.error('Error fetching clients:', err));
  }, []);

  return (
    <section className="my-8">
      <h2 className="pb-2 mb-6 text-2xl font-bold text-center border-b">Happy Clients</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {clients.map((client) => (
          <div
  key={client._id}
  className="p-4 text-center transition-shadow duration-300 bg-white border shadow-sm rounded-xl hover:shadow-lg"
>
            <img src={client.image} alt={client.name} className="object-cover w-24 h-24 mx-auto border rounded-full shadow" />
            <p className="mt-2 italic">"{client.description}"</p>
            <h3 className="mt-2 font-bold">{client.name}</h3>
            <span className="text-sm text-gray-500">{client.designation}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
