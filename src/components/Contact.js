import React, { useState } from 'react';
import './pagestyle.css'; 
const Contact = () => {
    const [fullName, setFullName] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [userMessage, setUserMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <section className="contact-section">
            {isSubmitted ? (
                <div>
                    <h2>Thank you, {fullName}, for reaching out!</h2>
                    <p>We'll respond to: {contactEmail}</p>
                    <p>Message: {userMessage}</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Full Name:</label>
                        <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Email Address:</label>
                        <input
                            type="email"
                            value={contactEmail}
                            onChange={(e) => setContactEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Your Message:</label>
                        <textarea
                            value={userMessage}
                            onChange={(e) => setUserMessage(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            )}
        </section>
    );
};

export default Contact;
