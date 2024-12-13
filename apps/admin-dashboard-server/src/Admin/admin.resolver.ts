import * as graphql from "@nestjs/graphql";
import { AdminService } from "./admin.service";

export class AdminResolver {
  constructor(protected readonly service: AdminService) {}

  @graphql.Query(() => String)
  async AdminCreateCategory(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.AdminCreateCategory(args);
  }

  @graphql.Query(() => String)
  async AdminCreateProduct(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.AdminCreateProduct(args);
  }

  @graphql.Query(() => String)
  async AdminCreateUniqueProduct(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.AdminCreateUniqueProduct(args);
  }

  @graphql.Query(() => String)
  async AdminGetCategory(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.AdminGetCategory(args);
  }

  @graphql.Query(() => String)
  async AdminGetProduct(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.AdminGetProduct(args);
  }

  @graphql.Query(() => String)
  async AdminUpdateCategory(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.AdminUpdateCategory(args);
  }

  @graphql.Query(() => String)
  async AdminUpdateProduct(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.AdminUpdateProduct(args);
  }

  @graphql.Query(() => String)
  async CreateCategory(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CreateCategory(args);
  }

  @graphql.Query(() => String)
  async CreateProduct(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CreateProduct(args);
  }

  @graphql.Mutation(() => Boolean)
  async DeleteCategory(
    @graphql.Args()
    args: string
  ): Promise<boolean> {
    return this.service.DeleteCategory(args);
  }

  @graphql.Mutation(() => Boolean)
  async DeleteProduct(
    @graphql.Args()
    args: string
  ): Promise<boolean> {
    return this.service.DeleteProduct(args);
  }

  @graphql.Query(() => String)
  async GetCategory(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetCategory(args);
  }

  @graphql.Query(() => String)
  async GetProduct(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetProduct(args);
  }

  @graphql.Query(() => String)
  async UpdateCategory(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.UpdateCategory(args);
  }

  @graphql.Query(() => String)
  async UpdateProduct(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.UpdateProduct(args);
  }
}
