const express = require('express');

const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.send('CI/CD Pipeline Working!');
});

module.exports = app;

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}