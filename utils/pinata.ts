import { PinataSDK } from "pinata-web3";
import fs from "node:fs";
import path from "node:path";

const pinata = new PinataSDK({
	pinataJwt: process.env.PINATA_JWT,
	pinataGateway: process.env.GATEWAY_URL,
});

export async function uploadFolder() {
	const distPath = path.join(__dirname, "../dist");
	const files: File[] = [];

	function readDirRecursively(dir: string) {
		const items = fs.readdirSync(dir);

		for (const item of items) {
			const fullPath = path.join(dir, item);
			const stat = fs.statSync(fullPath);

			if (stat.isDirectory()) {
				readDirRecursively(fullPath);
			} else {
				const fileContent = fs.readFileSync(fullPath);
				const relativePath = path.relative(distPath, fullPath);
				const file = new File([fileContent], relativePath);
				files.push(file);
			}
		}
	}

	readDirRecursively(distPath);
	const result = await pinata.upload.fileArray(files);
	return result;
}
