const formatErrors = (error: any) => {
  if (typeof error.errors === 'object') {
    return Object.values(error.errors).join(', ');
  }
  if (typeof error.errors === 'object') {
    return Object.values(error).join(', ');
  }
  return 'Something went wrong! Please try again later or contact our support';
};

export { formatErrors };

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
