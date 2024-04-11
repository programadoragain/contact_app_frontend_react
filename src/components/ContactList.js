import React from 'react';
import Contact from './Contact';


const ContactList = ({ data, currentPage, getAllContacts }) => {
  return (
    <main className="main">
        { data?.content?.length === 0 && <div>No Contacts</div> }

        <ul className="contact__list">
            { data?.content?.length > 0 && data.contact.map((contact) => <Contact contact={contact} key={contact.id} />) }
            { data?.content?.length > 0 && data.totalPages > 1 &&
            <div className="pagination">
                <a onClick={() => getAllContacts(currentPage - 1)} className={currentPage === 0 ? "disabled" : ""}>&laquo;</a>

                {data && [...Array(data.totalPages).keys()].map((page, index) => 
                <a onClick={getAllContacts(page)} className={currentPage === page ? "active" : ""} key={page}>{page + 1}</a>)}

                <a onClick={() => getAllContacts(currentPage + 1)} className={data.totalPages === currentPage + 1 ? "disabled" : ""}>&laquo;</a>
            </div>
        }
        </ul>

    </main>
  )
}

export default ContactList