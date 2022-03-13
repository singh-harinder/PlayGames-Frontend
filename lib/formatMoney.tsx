export default function formatMoney(amount: number) {
  const options = {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  };
  // if the price is a whole number, leave off the .00
  if (amount % 100 === 0) options.minimumFractionDigits = 0;

  const formatter = new Intl.NumberFormat("en-US", options);

  return formatter.format(amount);
}
