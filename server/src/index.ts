const express = require('express');
const cors = require('cors');

const { OAuth2Client } = require('google-auth-library');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();

const client = new OAuth2Client(process.env.VITE_CLIENT_ID);
app.use(bodyParser.json());
app.use(cors());

app.post('/api/google-login', async (req: any, res: any) => {
	const ticket = await client.verifyIdToken({
		idToken: req.body.token
	});

	res.status(200).json(ticket.getPayload());
});

app.listen(4001, () => {
	console.log(`Server is ready at http://localhost:4001`);
});
