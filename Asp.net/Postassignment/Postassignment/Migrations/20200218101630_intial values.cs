using Microsoft.EntityFrameworkCore.Migrations;

namespace Postassignment.Migrations
{
    public partial class intialvalues : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "posttable",
                columns: new[] { "p_id", "p_content" },
                values: new object[] { 1, "First post" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "posttable",
                keyColumn: "p_id",
                keyValue: 1);
        }
    }
}
