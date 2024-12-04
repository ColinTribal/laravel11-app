import React from 'react';
import { Link, usePage,router } from '@inertiajs/react';

const Index = ({ products }) => {

    const { props } = usePage();
    const { flash } = props;

    console.log("props",props);
    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this product?')) {
            router.delete(`/products/${id}`);
        }
    };

    return (
        <div>
            <h1>Products</h1>
            {flash.success && <div className="alert alert-success">{flash.success}</div>}
            <Link href="/products/create">Create Product</Link>
            <ul>
                {products.map(product => (
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