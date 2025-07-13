import AdminAddProject from '../components/AdminAddProject';
import AdminAddClient from '../components/AdminAddClient';
import AdminContacts from '../components/AdminContacts';
import AdminSubscribers from '../components/AdminSubscribers';

export default function AdminPanel() {
  return (
    <div className="max-w-5xl p-6 mx-auto">
      <h1 className="mb-6 text-2xl font-bold">Admin Panel</h1>

      <div className="grid gap-10">
        <AdminAddProject />
        <AdminAddClient />
        <AdminContacts />
        <AdminSubscribers />
      </div>
    </div>
  );
}
