type ResultProps<ResultValue> = {
    value?: ResultValue;
};

export class Result<ResultType> {
    private value?: ResultType;

    public static success<ResultType>(value: ResultType) {
        return new Result({ value });
    }

    private constructor({ value }: ResultProps<ResultType>) {
        this.value = value;
    }

    isSuccess() {
        return this.value !== undefined && this.value !== null;
    }
}
