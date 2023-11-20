# TRANSPORTATION FULLSTACK PROJECT

- Set up prisma as a dev dependency, 
```
npm install prisma --save-dev
```
- Invoke prisma CLI, 
```
npx prisma
```
- Set up prisma project, this creates `prisma` directory, `schema.prisma` file and `.env` file.
```
npx prisma init
```
- After this, Since postgres db has already being created locally, Run the code below, to make prisma create model based on schema of tables in the database. This literally makes `prisma` performs schema inference.
```
npx prisma db pull
```
- Baseline the database, by starting with initial migration and doing the following.
```
mkdir -p prisma/migrations/0_init

npx prisma migrate diff --from-empty --to-schema-datamodel prisma/schema.prisma --script > prisma/migrations/0_init/migration.sql
```
- Mark the migration as resolved using
```
npx prisma migrate resolve --applied 0_init
```
- Install prisma client
```
npm install @prisma/client
```
- Make prisma aware of the new/update schema using
```
npx prisma generate
```