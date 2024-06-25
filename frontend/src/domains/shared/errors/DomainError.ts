export class DomainError extends Error {
  public static isDomainError(error: unknown): error is DomainError {
    return error instanceof DomainError
  }
}
