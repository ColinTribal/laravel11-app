import React from 'react';
import { router, useForm, usePage } from '@inertiajs/react';
import { ProductType } from '../../Types/ProductType';
import { useState, useEffect } from 'react';
import axios from 'axios';

interface EditProps {
    product: ProductType;
}

interface FormData {
    name: string;
    description: string;
    price: number;
}

const Edit: React.FC<EditProps> = ({ product }) => {
    const { props } = usePage();
    // const { errors } = props;

    const [errors, setErrors] = useState<Record<string, string[]>>({});
    const { data, setData, put } = useForm<FormData>({
        name: product.name,
        description: product.description,
        price: product.price,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        axios.defaults.withCredentials = true;
        axios.put(`/products/${product.id}`, data)
            .then(response => {
                router.visit(`/products`);
            })
            .catch(error => {
                setErrors(error.response.data.errors);
            });
    };

    return (
        <div>
            <h1>Edit Product</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        value={data.name}
                        onChange={e => setData('name', e.target.value)}
                    />
                    {errors.name && <div>{errors.name.join(', ')}</div>}
                </div>
                <div>
                    <label>Description</label>
                    <textarea
                        value={data.description}
                        onChange={e => setData('description', e.target.value)}
                    />
                    {errors.description && <div>{errors.description.join(', ')}</div>}
                </div>
                <div>
                    <label>Price</label>
                    <input
                        type="text"
                        value={data.price}
                        onChange={e => setData('price', parseFloat(e.target.value))}
                    />
                    {errors.price && <div>{errors.price.join(', ')}</div>}
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default Edit;