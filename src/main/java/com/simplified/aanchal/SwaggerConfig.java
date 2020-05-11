package com.simplified.aanchal;

import static springfox.documentation.builders.PathSelectors.regex;

import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {
  public Docket aanchalApi() {
    return new Docket(DocumentationType.SWAGGER_2)
        .select()
        .apis(RequestHandlerSelectors.basePackage("com.simplified.aanchal.controller"))
        .paths(regex("/api.*"))
        .build();
  }
}
