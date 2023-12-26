# Say Developer

Pronunciation for Software Developers inpired by Forvo.

## MakeFile

Build SayDeveloper API & CLI
```
make build
```

Test SayDeveloper API & CLI
```
make test
```

Run the SayDeveloper API
```
make run
```

Run the SayDeveloper CLI
```
make run-cli
```

Create migration
```
make migrate-create table=<TABLE_NAME> 
```

Run migration
```
make migrate-up
```

Generate OpenAPI docs
```
make swagger-docs
```

## Migrations

Uses `github.com/golang-migrate/migrate/v4/cmd/migrate@latest`

### Create Migration File 
```
migrate create -ext sql -dir migrations -seq <NAME>
```

