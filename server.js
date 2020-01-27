const express = require('express')
const app = express()
const port = 1337
const cors = require('cors')
const persons = require('./persons')

// Configure web-server
app.use(cors())

app.get('/api/persons', (req, res) => {
	res.json({
		success: true,
		total: persons.length,
		data: persons
	});
});

app.listen(port, () => console.log(`Coding Challenge app listening on port ${port}!`))