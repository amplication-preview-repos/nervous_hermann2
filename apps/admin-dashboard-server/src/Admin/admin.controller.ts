import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AdminService } from "./admin.service";

@swagger.ApiTags("admins")
@common.Controller("admins")
export class AdminController {
  constructor(protected readonly service: AdminService) {}

  @common.Get("/:id/admin-create-category")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AdminCreateCategory(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.AdminCreateCategory(body);
      }

  @common.Get("/:id/admin-create-product")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AdminCreateProduct(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.AdminCreateProduct(body);
      }

  @common.Get("/:id/admin-create-unique-product")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AdminCreateUniqueProduct(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.AdminCreateUniqueProduct(body);
      }

  @common.Get("/:id/admin-get-category")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AdminGetCategory(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.AdminGetCategory(body);
      }

  @common.Get("/:id/admin-get-product")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AdminGetProduct(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.AdminGetProduct(body);
      }

  @common.Get("/:id/admin-update-category")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AdminUpdateCategory(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.AdminUpdateCategory(body);
      }

  @common.Get("/:id/admin-update-product")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AdminUpdateProduct(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.AdminUpdateProduct(body);
      }

  @common.Get("/:id/create-category")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateCategory(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.CreateCategory(body);
      }

  @common.Get("/:id/create-product")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateProduct(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.CreateProduct(body);
      }

  @common.Delete("/categories/:id")
  @swagger.ApiOkResponse({
    type: Boolean
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DeleteCategory(
    @common.Body()
    body: string
  ): Promise<boolean> {
        return this.service.DeleteCategory(body);
      }

  @common.Delete("/products/:id")
  @swagger.ApiOkResponse({
    type: Boolean
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DeleteProduct(
    @common.Body()
    body: string
  ): Promise<boolean> {
        return this.service.DeleteProduct(body);
      }

  @common.Get("/:id/get-category")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetCategory(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.GetCategory(body);
      }

  @common.Get("/:id/get-product")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetProduct(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.GetProduct(body);
      }

  @common.Get("/:id/update-category")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateCategory(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.UpdateCategory(body);
      }

  @common.Get("/:id/update-product")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateProduct(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.UpdateProduct(body);
      }
}
