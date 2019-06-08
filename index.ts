import { LandingController } from './lib/routes/landing';
import { BaseApplicationServer } from 'express-starter-config';

class ApplicationServer extends BaseApplicationServer {
  constructor() {
    super();
    this.addControllers(LandingController);

    this.app.get('/hello', (req: any, res: any) => res.send('Hello'));
  }
}

// Start the application
new ApplicationServer().start();
