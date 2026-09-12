import { Provider } from 'react-redux';
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router';
import { store } from './app/store';

import AssetListPage from './pages/AssetListPage';
import AssetDetailPage from './pages/AssetDetailPage';
import AssetEditPage from './pages/AssetEditPage';
import AssetCreatePage from './pages/AssetCreatePage';

export default function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <header className="navbar bg-base-100 shadow-sm">
                    <div className="flex-1">
                        <Link to="/" className="btn btn-ghost text-xl">
                            IT Asset Manager
                        </Link>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <Link to="/">Asset List</Link>
                            </li>
                            <li>
                                <Link to="/assets/new">Add Asset</Link>
                            </li>
                        </ul>
                    </div>
                </header>

                <Routes>
                    <Route path="/" element={<AssetListPage />} />
                    <Route path="/assets/:id" element={<AssetDetailPage />} />
                    <Route
                        path="/assets/:id/edit"
                        element={<AssetEditPage />}
                    />
                    <Route path="/assets/new" element={<AssetCreatePage />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}
