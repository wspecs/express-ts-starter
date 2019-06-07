"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const landing_1 = require("./lib/routes/landing");
const express_starter_config_1 = require("express-starter-config");
class ApplicationServer extends express_starter_config_1.BaseApplicationServer {
    constructor() {
        super({
            port: 1000,
            publicPathHandler: (req, res, next) => {
                console.log('Pre public');
                next();
            }
        });
        this.addControllers(landing_1.LandingController);
        this.app.get('/blog', (req, res) => res.send('Blog'));
        this.app.get('/blog/:id', (req, res) => {
            res.send(`Blog ${req.params.id}`);
        });
    }
}
// Start the application
new ApplicationServer().start();
