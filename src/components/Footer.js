import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button } from '@mui/material';
import './Footer.css';

function Footer() {
    const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

    const formik = useFormik({
        initialValues: { feedback: '' },
        validationSchema: Yup.object({
            feedback: Yup.string().required('Feedback is required')
        }),
        onSubmit: (values, { resetForm, setSubmitting }) => {
            // Replace with the actual URL of your server
            fetch('http://localhost:3001/submit-feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ feedback: values.feedback }),
            })
            .then(response => response.json()) // Assuming your server responds with JSON
            .then(data => {
                console.log('Success:', data);
                setFeedbackSubmitted(true);
                setSubmitting(false); // Finish the submitting state
                resetForm(); // Reset the form only after successful submission
            })
            .catch((error) => {
                console.error('Error:', error);
                setSubmitting(false);
            });
        },
    });

    return (
        <footer className="footer">
            {!feedbackSubmitted ? (
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        fullWidth
                        id="feedback"
                        name="feedback"
                        label="Your Feedback"
                        multiline
                        rows={4}
                        value={formik.values.feedback}
                        onChange={formik.handleChange}
                        error={formik.touched.feedback && Boolean(formik.errors.feedback)}
                        helperText={formik.touched.feedback && formik.errors.feedback}
                        disabled={formik.isSubmitting}
                    />
                    <Button color="primary" variant="contained" type="submit" disabled={formik.isSubmitting}>
                        Submit Feedback
                    </Button>
                </form>
            ) : (
                <p>Thank you for your feedback!</p>
            )}
        </footer>
    );
}

export default Footer;

