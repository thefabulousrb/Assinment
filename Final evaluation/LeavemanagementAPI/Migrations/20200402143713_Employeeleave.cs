using Microsoft.EntityFrameworkCore.Migrations;

namespace LeaveManagement.Migrations
{
    public partial class Employeeleave : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "EmployeeLeave",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LeaveId = table.Column<int>(nullable: false),
                    Employeeid = table.Column<int>(nullable: false),
                    Startdate = table.Column<string>(nullable: true),
                    Enddate = table.Column<string>(nullable: true),
                    Status = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EmployeeLeave", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EmployeeLeave");
        }
    }
}
