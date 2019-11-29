import { BaseContext } from 'koa';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerConfig from '../config/swagger';

/**
 * Controller for general routes
 */
class GeneralController {
  public static async swagger(ctx: BaseContext): Promise<void> {
    ctx.body = swaggerJSDoc(swaggerConfig);
  }
}

export default GeneralController;
