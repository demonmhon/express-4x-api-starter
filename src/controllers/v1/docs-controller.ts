import { Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';

import swaggerDoc from '../../routes/v1/swagger.json';

export const serve = swaggerUi.serve;

export const spec = swaggerUi.setup(swaggerDoc);

export const swaggerJSON = (req: Request, res: Response) =>
  res.send(swaggerDoc);

export default { serve, spec, swaggerJSON };
