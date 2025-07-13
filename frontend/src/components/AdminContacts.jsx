import { useEffect, useState } from 'react';
import axios from '../api/axiosInstance';

export default function AdminContacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get('/contacts')
      .then(res => setContacts(res.data))
      .catch(err => console.error('Error loading contacts:', err));
  }, []);

  return (
    <div>
      <h2 className="mb-2 text-lg font-semibold">Contact Form Responses</h2>
      {contacts.length === 0 ? (
        <p>No contact submissions yet.</p>
      ) : (
        <div className="p-4 overflow-auto border rounded max-h-96">
          <table className="w-full text-sm table-auto">
            <thead>
              <tr>
                <th>Name</th><th>Email</th><th>Mobile</th><th>City</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map(c => (
                <tr key={c._id}>
                  <td>{c.fullName}</td>
                  <td>{c.email}</td>
                  <td>{c.mobile}</td>
                  <td>{c.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
