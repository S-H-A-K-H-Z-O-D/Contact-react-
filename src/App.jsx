import { useEffect } from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/layout.component";
import { Contact } from "./components/pages/contact";
import { ContactForm } from "./components/pages/contact-form/contact-form.component";
import { ErrorPage } from "./components/pages/error-page";

export function App() {
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")));

  return (
    <Layout users={users} setUsers={setUsers}>
      <Routes>
        <Route
          path="contact/:id"
          element={<Contact users={users} setUsers={setUsers} />}
        />
        <Route
          path="/add"
          element={<ContactForm users={users} setUsers={setUsers} />}
        />
        <Route
          path="/edit"
          element={<ContactForm users={users} setUsers={setUsers} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Layout>
  );
}
