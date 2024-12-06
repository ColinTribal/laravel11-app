import React from 'react';
import { useForm, usePage } from '@inertiajs/react';
import { Product } from "../../Types/ProductType";

interface EditProps {
    product: Product;
}

const Edit: React.FC<EditProps> = ({ product }) => {
    const { props } = usePage();
    // const { errors } = props;

    const { data, setData, put, errors } = useForm({
        name: product.name,
        description: product.description,
        price: product.price,
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        put(`/products/${product.id}`, { preserveState: true });
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
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData('name', e.target.value)} 
                    />
                    {errors.name && <div>{errors.name}</div>}
                </div>
                <div>
                    <label>Description</label>
                    <textarea 
                        value={data.description} 
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setData('description', e.target.value)} 
                    />
                    {errors.description && <div>{errors.description}</div>}
                </div>
                <div>
                    <label>Price</label>
                    <input 
                        type="text" 
                        value={data.price} 
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData('price', e.target.value)} 
                    />
                    {errors.price && <div>{errors.price}</div>}
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default Edit;
