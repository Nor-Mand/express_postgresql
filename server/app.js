const express = require('express');
const app = express();

// ROUTES
const contactsRoutes = require('./api/routes/contacts')
app.use('/contacts', contactsRoutes)

const crmRoutes = require('./api/routes/crm')
app.use('/crm', crmRoutes)

module.exports = app;