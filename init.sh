#!/bin/bash
yarn knex migrate:rollback --all
yarn knex migrate:latest
yarn knex migrate:latest
yarn knex seed:run --specific=001_users.js
yarn knex seed:run --specific=002_projects.js
yarn dev