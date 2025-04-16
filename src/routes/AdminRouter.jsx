import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/admin/Dashboard';
import Layout from '../components/Layout';

export default function AdminRouter() {
  return (
    <Layout>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </Layout>
  );
}
