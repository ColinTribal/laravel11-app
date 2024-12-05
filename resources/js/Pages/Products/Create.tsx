import { router, useForm, usePage } from '@inertiajs/react';
import React,{ useState, useEffect } from 'react';
import axios from 'axios';

const Create = () => {
    const [errors, setErrors] = useState([]);
    const { data, setData } = useForm({
        name: '',
        description: '',
        price: '',
    });  

    const handleSubmit = (e : React.FormEvent) => {
        e.preventDefault();
        axios.defaults.withCredentials = true;
        axios.post('/products', data).then(response => {
            router.visit(`/products`);
        }).catch(error => {
            setErrors(error.response.data.errors);
        }
        );
        
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
                    {errors.name && <div>{errors.name}</div>}
                </div>
                <div>
                    <label>Description</label>
                    <textarea value={data.description} onChange={e => setData('description', e.target.value)} />
                    {errors.description && <div>{errors.description}</div>}
                </div>
                <div>
                    <label>Price</label>
                    <input type="text" value={data.price} onChange={e => setData('price', e.target.value)} />
                    {errors.price && <div>{errors.price}</div>}
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default Create;