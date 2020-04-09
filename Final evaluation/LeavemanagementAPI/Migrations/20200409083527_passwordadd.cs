using Microsoft.EntityFrameworkCore.Migrations;

namespace LeaveManagement.Migrations
{
    public partial class passwordadd : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Password",
                table: "employees",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Password",
                table: "employees");
        }
    }
}
