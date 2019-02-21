export default (time) => {
  const t = Math.floor(time * 1000);
  const Dates = new Date(t);
  const year = Dates.getFullYear();
  const month = () => {
    const m = Dates.getMonth() + 1;
    if (m < 10) return `0${m}`;
    return m;
  };
  const date = Dates.getDate();
  return `${year} / ${month()} / ${date}`;
};
