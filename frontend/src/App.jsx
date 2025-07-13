import Header from './components/Header';
import ProjectSection from './components/ProjectSection';
import ClientsSection from './components/ClientsSection';
import ContactForm from './components/ContactForm';
import Newsletter from './components/Newsletter';
import AdminPanel from './pages/AdminPanel';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <main className="max-w-6xl px-4 mx-auto">
  <div className="py-12">
    <ProjectSection />
  </div>

  <div className="py-12">
    <ClientsSection />
  </div>

  <div className="py-12">
    <ContactForm />
  </div>

  <div className="py-12">
    <Newsletter />
  </div>
</main>
    </div>
  );
}

export default App;
