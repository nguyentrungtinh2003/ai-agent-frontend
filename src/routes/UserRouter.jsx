import { Routes, Route } from 'react-router-dom';
import Profile from '../pages/user/Profile';
import Layout from '../components/Layout';

export default function UserRouter() {
  return (
    <Layout>
      <Routes>
        <Route path="profile" element={<Profile />} />
      </Routes>
    </Layout>
  );
}
