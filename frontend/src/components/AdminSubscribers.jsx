import { useEffect, useState } from 'react';
import axios from '../api/axiosInstance';

export default function AdminSubscribers() {
  const [subs, setSubs] = useState([]);

  useEffect(() => {
    axios.get('/newsletters')
      .then(res => setSubs(res.data))
      .catch(err => console.error('Error loading subscribers:', err));
  }, []);

  return (
    <div>
      <h2 className="mb-2 text-lg font-semibold">Newsletter Subscribers</h2>
      {subs.length === 0 ? (
        <p>No subscribers yet.</p>
      ) : (
        <ul className="ml-6 list-disc">
          {subs.map((s) => (
            <li key={s._id}>{s.email}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
