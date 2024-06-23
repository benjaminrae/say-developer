import { DomainError } from './domain.error';

type ResultProps<ResultValue> = {
    value?: ResultValue;
    error?: ResultError;
};

type ResultError = DomainError | Error;

export class Result<ResultType> {
    private _value?: ResultType;
    private _error?: ResultError;

    public static success<ResultType>(value: ResultType) {
        return new Result({ value });
    }

    public static failure<ResultType>(error: ResultError): Result<ResultType> {
        return new Result({ error });
    }

    private constructor({ value, error }: ResultProps<ResultType>) {
        this._value = value;
        this._error = error;
    }

    public isSuccess() {
        return this.hasValue() && !this.hasError();
    }

    public value(): ResultType {
        return this._value;
    }

    public error(): ResultError {
        return this._error;
    }

    private hasError() {
        return this._error !== undefined && this._error !== null;
    }

    private hasValue() {
        return this._value !== undefined && this._value !== null;
    }
}
