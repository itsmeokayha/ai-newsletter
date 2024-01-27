const sendgrid = require('@sendgrid/mail');
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const data = JSON.parse(event.body);
        const feedback = data.feedback;

        const message = {
            to: 'itsmeokhaha@gmail.com', // Destination email address
            from: 'itsmeokhaha@gmail.com', // Your verified sender email in SendGrid
            subject: 'New Feedback Submission',
            text: `Feedback: ${feedback}`,
            // You can also format this message with more details or HTML
        };

        await sendgrid.send(message);

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Feedback sent successfully' }),
        };
    } catch (error) {
        return { statusCode: 500, body: 'Internal Server Error' };
    }
};
