export function successResponse<T>(data: T, message = 'OK') {
  return {
    status: 'success',
    message,
    data,
  };
}
