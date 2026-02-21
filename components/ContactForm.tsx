'use client'
import { useState } from 'react';

export default function ContactForm() {
    const [result, setResult] = useState("");
    const [isFormSent, setIsFormSent] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        comments: ''
    });

    const isFormCompleted = (formData.name && formData.subject && formData.comments);

    const submitForm = async (event: any) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "0fea8fce-acfe-4a55-852d-e224dbe735bc");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
            setIsFormSent(true);
        } else {
            setResult("Error");
        }
    };
    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };
    return (
        <div>
            {isFormSent ? (
                <h2 className='p-6 text-center text-2xl'>Thank you for the feedback!</h2>
            ) : (
                <form onSubmit={submitForm}>

                    {/**Form Section */}
                    <section className='border rounded-md p-6 space-y-8'>

                        {/* Name Fields */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>

                            <div>

                                <label className='block text-sm font-medium'>Name <span className='text-red-500'>*</span></label>
                                <input
                                    type='text'
                                    name='name'
                                    placeholder='John'
                                    onChange={handleInputChange}
                                    required
                                    maxLength={35}
                                    className='mt-2 block outline-1 w-full rounded-md px-3 py-1.5 text-base focus:outline-2 focus:outline-blue-500'
                                />
                            </div>

                            <div>
                                <label className='block text-sm font-medium'>Email</label>
                                <input
                                    type='email'
                                    name='email'
                                    placeholder='you@example.com'
                                    onChange={handleInputChange}
                                    className='mt-2 block outline-1 w-full rounded-md px-3 py-1.5 text-base focus:outline-2 focus:outline-blue-500'
                                />
                            </div>

                        </div>

                        <div>
                            <label className='block text-sm font-medium'>Subject <span className='text-red-500'>*</span></label>
                            <input
                                type='text'
                                name='subject'
                                maxLength={80}
                                onChange={handleInputChange}
                                required
                                className='mt-2 block outline-1 w-full rounded-md px-3 py-1.5 text-base focus:outline-2 focus:outline-blue-500'
                            />
                        </div>

                        <div>
                            <div>
                                <label className='block text-sm font-medium'>Comments <span className='text-red-500'>*</span></label>
                                <textarea
                                    name='comments'
                                    value={formData.comments}
                                    maxLength={255}
                                    required
                                    onChange={handleInputChange}
                                    placeholder='Write here..'
                                    className='mt-2 block outline-1 w-full rounded-md px-3 py-1.5 text-base focus:outline-2 focus:outline-blue-500'
                                />
                            </div>
                            <p className="text-sm font-light text-gray-400">{formData.comments.length} of 255 max characters</p>
                        </div>

                        {/* Submit Button*/}
                        <button
                            type='submit'
                            disabled={!isFormCompleted}
                            style={{
                                backgroundColor: !isFormCompleted ? '#ccc' : undefined,
                                color: !isFormCompleted ? '#666' : undefined,
                                cursor: !isFormCompleted ? 'not-allowed' : 'pointer'
                            }}
                            className='bg-neutral-700 text-white py-3 px-8 rounded-2xl  hover:cursor-pointer'>Submit
                        </button>
                        <span className='ml-2'>{result}</span>
                    </section>
                </form>
            )}


        </div>

    );
}