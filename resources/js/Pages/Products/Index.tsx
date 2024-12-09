import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Product } from '../../Types/ProductType';


const Index: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [success, setSuccess] = useState<string>('');

    const { props } = usePage();

    useEffect(() => {
        axios.defaults.withCredentials = true;
        axios.get('/products/get').then(response => {
            setProducts(response.data);
        });
    }, []);

    const handleDelete = (id?: number) => {
        if (confirm('Are you sure you want to delete this product?')) {
            axios.defaults.withCredentials = true;
            axios.delete(`/products/${id}`).then(response => {
                setSuccess(response.data.success);
                axios.get('/products/get').then(response => {
                    setProducts(response.data);
                });
            }).catch(error => {
                console.error(error);
            });
        }
    };

    return (
        <div>
            <h1>Products</h1>
            {success && <div className="alert alert-success">{success}</div>}
            <Link href="/products/create">Create Product</Link>
            <ul>
                {products?.map(product => (
                    <li key={product.id}>
                        {product.name} - {product.price}
                        <Link href={`/products/${product.id}/edit`}>Edit</Link>
                        <button onClick={() => handleDelete(product.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Index;