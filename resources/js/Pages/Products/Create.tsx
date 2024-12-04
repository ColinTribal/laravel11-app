import React, { useEffect } from 'react';
import { useForm, usePage } from '@inertiajs/react';

const Create = () => {
    const { data, setData, post, errors } = useForm({
        name: '',
        description: '',
        price: '',
    });

    const { props } = usePage();
    const { flash } = props;

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/products');
        
    };

    useEffect(() => {
        console.log(errors);
    }
    , [errors]);

    return (
        <div>
            <h1>Create Product</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" value={data.name} onChange={e => setData('name', e.target.value)} />
                    {flash.errors.name && <div>{flash.errors.name}</div>}
                </div>
                <div>
                    <label>Description</label>
                    <textarea value={data.description} onChange={e => setData('description', e.target.value)} />
                    {flash.errors.description && <div>{flash.errors.description}</div>}
                </div>
                <div>
                    <label>Price</label>
                    <input type="text" value={data.price} onChange={e => setData('price', e.target.value)} />
                    {flash.errors.price && <div>{flash.errors.price}</div>}
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default Create;