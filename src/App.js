import { useState, useEffect } from 'react';
import './App.css';
import { Header } from './components/Header';
import { ContactList } from './components/ContactList';
import { getContact } from './api/ContactService';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const [data, setData] = useState({});
  const [currentPage, setCurrentPage] = useState(0);

  const getAllContacts = async (page = 0, size = 10) => {
    try {
      setCurrentPage(page);
      const { data } = await getContact(page, size);
      setData(data);
      console.log(data);

    } catch (error) {
      console.log(error);
    }
  }

  const toogleModal = (show) => { console.log('I was click'); };

  useEffect(() => {
    getAllContacts();
  }, [])

  return (
    <>
      <Header toogleModal={toogleModal} nbOfContacts={data.totalElements} />
      <main className="main">
        <div className="container">
          <Routes>
            <Route path="/" element={<Navigate to={"/contacts"} />} />
            <Route path="/contacts" element={<ContactList data={data} currentPage={currentPage} getAllContacts={getAllContacts} />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
