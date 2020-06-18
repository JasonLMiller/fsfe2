const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello Jason! Nice work');

});

app.listen(port, () => console.log('app on port ${port}!'));
