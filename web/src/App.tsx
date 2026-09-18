import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { store } from './store/store';

import AssetListPage from './pages/asset/AssetListPage';
import AssetDetailPage from './pages/asset/AssetDetailPage';
import AssetEditPage from './pages/asset/AssetEditPage';
import AssetCreatePage from './pages/asset/AssetCreatePage';
import Navbar from './components/Navbar';
import AssignmentListPage from './pages/assignment/AssignmentListPage';
import AssignmentCreatePage from './pages/assignment/AssignmentCreatePage';
import AssignmentEditPage from './pages/assignment/AssignmentEditPage';

export default function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Navbar />

                <Routes>
                    <Route path="/" element={<AssetListPage />} />
                    <Route path="/assets/:id" element={<AssetDetailPage />} />
                    <Route
                        path="/assets/:id/edit"
                        element={<AssetEditPage />}
                    />
                    <Route path="/assets/new" element={<AssetCreatePage />} />
                    <Route
                        path="/assignments"
                        element={<AssignmentListPage />}
                    />
                    <Route
                        path="/assignments/:id/edit"
                        element={<AssignmentEditPage />}
                    />
                    <Route
                        path="/assignments/:id/new"
                        element={<AssignmentCreatePage />}
                    />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}
