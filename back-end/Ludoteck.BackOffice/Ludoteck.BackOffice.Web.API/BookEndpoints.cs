using Ludoteck.BackOffice.Core.Books.Models;
namespace Ludoteck.BackOffice.Web.API;

public static class BookEndpoints
{
	public static void MapBookEndpoints(this IEndpointRouteBuilder routes)
	{
		var group = routes.MapGroup("/api/Book").WithTags(nameof(Book));

		group.MapGet("/", () =>
		{
			return new[] { new Book() { Id = 1, Title = "Dune" }, new Book() { Id = 2, Title = "Le cycle des inhibiteurs" } };
		})
		.WithName("GetAllBooks")
		.WithOpenApi();

		group.MapGet("/{id}", (int id) =>
		{
			//return new Book { ID = id };
		})
		.WithName("GetBookById")
		.WithOpenApi();

		group.MapPut("/{id}", (int id, Book input) =>
		{
			return TypedResults.NoContent();
		})
		.WithName("UpdateBook")
		.WithOpenApi();

		group.MapPost("/", (Book model) =>
		{
			//return TypedResults.Created($"/api/Books/{model.ID}", model);
		})
		.WithName("CreateBook")
		.WithOpenApi();

		group.MapDelete("/{id}", (int id) =>
		{
			//return TypedResults.Ok(new Book { ID = id });
		})
		.WithName("DeleteBook")
		.WithOpenApi();
	}
}
