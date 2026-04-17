import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("employees", (table) => {
        table.increments("id").primary();
        table.string("first_name", 50).notNullable();
        table.string("last_name", 50).notNullable();
        table.date("date_of_birth").notNullable();
        table.date("hired_at").notNullable();
        table.date("left_at");
        table.timestamps(true, true);
        
        table.index(["last_name", "first_name"], "idx_name");
        table.index(["hired_at"], "idx_hired_at");
        table.index(["left_at"], "idx_left_at");
    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists("employees");
}

