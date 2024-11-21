import { handler } from './build/handler.js';
import express from '@express';
const app = express();
app.use(handler);
app.listen(8000);
