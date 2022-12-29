import readPkg from "read-pkg";

export const getPackageInfo = async () => ({
	name: process.env.SEMANTIC_RELEASE_PACKAGE || (await readPkg()).name,
});

export const getPackageInfoSync = () => ({
	name: process.env.SEMANTIC_RELEASE_PACKAGE || readPkg.sync().name,
});

export default getPackageInfo;