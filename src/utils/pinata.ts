import { PinataSDK } from "pinata-web3";

export const pinata = new PinataSDK({
  pinataJwt: "",
  pinataGateway: "",
});

export const getKey = async (token: string) => {
  if (!token) {
    throw Error("No token provided");
  }

  const result = await fetch(`https://api.orbiter.host/keys`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  });

  const keyData = await result.json();
  return keyData;
}

export const uploadSite = async (files: any, token: string) => {
  try {
    const keyData = await getKey(token);
    const JWT = keyData.data;

    let upload;
    if (files.length > 1) {
      upload = await pinata.upload.fileArray(files).key(JWT).group("c5e8c379-e7c1-4c43-a2e9-79597d477481").addMetadata({
        keyValues: {
          userId: token
        }
      })
    } else {
      upload = await pinata.upload.file(files).key(JWT).group("c5e8c379-e7c1-4c43-a2e9-79597d477481").addMetadata({
        keyValues: {
          userId: token
        }
      })
    }

    return upload.IpfsHash
  } catch (error) {
    console.log("Upload error: ", error)
    throw error;
  }
}
