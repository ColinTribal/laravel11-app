import React from 'react';
import { Link, usePage,router } from '@inertiajs/react';
import { Product } from "../../Types/ProductType";

interface IndexProps {
    products: Product[];
}

interface PageProps {
    flash: {
        success? :string;
    };
    [key: string]: any;
}

const Index: React.FC<IndexProps> = ({ products }) => {
    const { props } = usePage<PageProps>();
    const { flash } = props;

    console.log("props", props);

    const handleDelete = (id?: number) => {
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