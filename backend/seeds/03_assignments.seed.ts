import type { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("employees").insert([
        { id: 1, first_name: "Max", last_name: "Mustermann", date_of_birth: "1985-03-15", hired_at: "2015-06-01" },
        { id: 2, first_name: "Anna", last_name: "Schmidt", date_of_birth: "1990-07-22", hired_at: "2018-09-15" },
        { id: 3, first_name: "Lukas", last_name: "Müller", date_of_birth: "1978-11-05", hired_at: "2010-01-10", left_at: "2022-12-31" },
        { id: 4, first_name: "Sophie", last_name: "Weber", date_of_birth: "1995-02-28", hired_at: "2021-04-01" },
    ]);

    await knex("device_assignments").insert([
      {
        device_id: 1,
        employee_id: 1,
        department_id: 1,
        country_id: 1,
        city_id: 1,
        assigned_at: "2023-01-10",
        returned_at: null,
      },
      {
        device_id: 2,
        employee_id: 2,
        department_id: 2,
        country_id: 1,
        city_id: 2,
        assigned_at: "2023-03-15",
        returned_at: null,
      },
      {
        device_id: 3,
        employee_id: 3,
        department_id: 1,
        country_id: 1,
        city_id: 1,
        assigned_at: "2022-07-01",
        returned_at: "2024-02-01",
      },
      {
        device_id: 4,
        employee_id: 4,
        department_id: 3,
        country_id: 1,
        city_id: 3,
        assigned_at: "2021-09-20",
        returned_at: "2023-11-30",
      },
      {
        device_id: 5,
        employee_id: 1,
        department_id: 2,
        country_id: 1,
        city_id: 2,
        assigned_at: "2022-05-12",
        returned_at: null,
      },
      {
        device_id: 6,
        employee_id: 2,
        department_id: 3,
        country_id: 1,
        city_id: 3,
        assigned_at: "2019-08-01",
        returned_at: "2021-12-15",
      },
      {
        device_id: 7,
        employee_id: 3,
        department_id: 1,
        country_id: 1,
        city_id: 1,
        assigned_at: "2024-01-05",
        returned_at: null,
      },
    ]);
};
