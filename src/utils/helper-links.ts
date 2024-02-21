const httpsRegx = /(https?|http):\/\/[^/]+/;

export const getLink = (link = "", param = "") => {
  const isFullLink = httpsRegx.test(link);
  return isFullLink ? link : ("/" + link + param).replaceAll("//", "/");
};
