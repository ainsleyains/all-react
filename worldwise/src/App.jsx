import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import AppLayout from './pages/AppLayout';
import Login from './pages/Login';
import CityList from './components/CityList';
import CountryList from './components/CountryList';
import PageNotFound from './pages/PageNotFound';

const BASE_URL = 'http://localhost:9000';

export default function App() {
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const res = await fetch(`${BASE_URL}/cities`);
                const data = await res.json();
                setCities(data);
            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={<Homepage />}
                />
                <Route
                    path='product'
                    element={<Product />}
                />

                <Route
                    path='pricing'
                    element={<Pricing />}
                />

                <Route
                    path='login'
                    element={<Login />}
                />

                <Route
                    path='/app'
                    element={<AppLayout />}
                >
                    <Route
                        index
                        element={
                            <CityList
                                cities={cities}
                                isLoading={isLoading}
                            />
                        }
                    />
                    <Route
                        path='cities'
                        element={
                            <CityList
                                cities={cities}
                                isLoading={isLoading}
                            />
                        }
                    />
                    <Route
                        path='countries'
                        element={
                            <CountryList
                                cities={cities}
                                isLoading={isLoading}
                            />
                        }
                    />
                    <Route
                        path='form'
                        element={<p>form</p>}
                    />
                </Route>

                <Route
                    path='*'
                    element={<PageNotFound />}
                />
            </Routes>
        </BrowserRouter>
    );
}
