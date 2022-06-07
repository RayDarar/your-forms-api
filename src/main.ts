import { NestFactory } from "@nestjs/core";
import { ConfigService } from "@nestjs/config";
import { NestExpressApplication } from "@nestjs/platform-express";
import helmet from "helmet";

import { IConfig, IConfigApp, init as initDocs } from "@/core";
import { AppModule } from "@/modules";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const configService = app.get<ConfigService<IConfig>>(ConfigService);
  const appConfig = configService.get<IConfigApp>("app")!;

  app.setGlobalPrefix(appConfig.prefix);

  initDocs(app, appConfig.prefix);

  app.use(helmet());

  await app.listen(appConfig.port);
}

bootstrap();
