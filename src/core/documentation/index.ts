import { NestExpressApplication } from "@nestjs/platform-express";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export function init(app: NestExpressApplication, prefix: string) {
  const config = new DocumentBuilder()
    .setTitle("Deli")
    .setDescription("Deli API description")
    .setVersion("1.0")
    .addBearerAuth({
      type: "http",
    })
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(prefix, app, document);
}
