import type { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  await knex("device_assignments").del();
  await knex("devices").del();
  await knex("employees").del();
  await knex("cities").del();
  await knex("countries").del();
  await knex("departments").del();
  await knex("device_statuses").del();
  await knex("device_types").del();
  await knex("resellers").del();
  await knex("brands").del();
}