using Microsoft.EntityFrameworkCore.Migrations;

namespace Postassignment.Migrations
{
    public partial class anotherMigratiom : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "posttable",
                columns: table => new
                {
                    p_id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    p_content = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_posttable", x => x.p_id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "posttable");
        }
    }
}
