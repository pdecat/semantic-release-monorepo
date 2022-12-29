import getPackageInfo from "./package-info.js";

export default async (version) => {
  if (!version) {
    return null;
  }

  const name = (await getPackageInfo()).name;
  return `${name}-v${version}`;
};
