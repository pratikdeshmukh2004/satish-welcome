import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const navigation = [
        { name: "HOME", route: "/" },
        { name: "LOGIN", route: "/login" },
        { name: "PRODUCTS", route: "/products" },
    ]
    return (
        <ul className='mx-28 flex gap-10 py-2'>
            {navigation.map((item, index) => (
                <li key={index} className='text-sm font-medium hover:text-teal-500 text-gray-700'>
                    <Link to={item.route}>{item.name}</Link>
                </li>
            )
            )}

        </ul>
    );
}
export default Navigation;