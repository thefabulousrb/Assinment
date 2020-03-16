using Microsoft.EntityFrameworkCore.Migrations;

namespace Postassignment.Migrations
{
    public partial class user : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "P_user",
                table: "posttable",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "posttable",
                keyColumn: "p_id",
                keyValue: 1,
                column: "P_user",
                value: "ayaz");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "P_user",
                table: "posttable");
        }
    }
}
