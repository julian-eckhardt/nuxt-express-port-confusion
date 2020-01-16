const express = require('express');

// start express
const app = express();
app.use(express.json());

const port = process.env.NODE_PORT || 3000;

app.listen(port, () => {
	console.log(`Running on Port ${port}`);
});
