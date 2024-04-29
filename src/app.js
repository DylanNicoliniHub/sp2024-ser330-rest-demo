const express = require('express');
const app = express();
const PORT = 3000;


const router  = express.Router(); 

// Middleware to parse JSON requests
app.use(express.json());

require("./routes/routes")(app);

// This should be at the end.
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
