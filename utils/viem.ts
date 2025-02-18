import { createWalletClient, http, createPublicClient } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { baseSepolia } from "viem/chains";
import { contract } from "./contract";
import { uploadFolder } from "./pinata";

const publicClient = createPublicClient({
	chain: baseSepolia,
	transport: http(),
});

async function writeCID(): Promise<string | unknown> {
	try {
		const { IpfsHash } = await uploadFolder();
		const account = privateKeyToAccount(
			process.env.ORBITER_PRIVATE_KEY as "0x",
		);
		const walletClient = createWalletClient({
			chain: baseSepolia,
			transport: http(),
			account: account,
		});
		const { request } = await publicClient.simulateContract({
			account,
			address: process.env.CONTRACT_ADDRESS as "0x",
			abi: contract.abi,
			functionName: "updateMapping",
			args: [`ipfs://${IpfsHash}`],
		});
		const tx = await walletClient.writeContract(request);
		const receipt = await publicClient.waitForTransactionReceipt({
			hash: tx,
		});
		if (receipt.status !== "success") {
			throw Error("TX not confirmed");
		}
		return receipt.status;
	} catch (error) {
		console.log(error);
		return error;
	}
}

writeCID();
