import { useState, useEffect, useCallback } from 'react'

export function MiniAppLoader() {
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);
  const [isContextOpen, setIsContextOpen] = useState(false);
  const [sdk, setSdk] = useState(null);

  useEffect(() => {
    const loadSDK = async () => {
      try {
        // Dynamically import the SDK
        const { sdk } = await import('@farcaster/frame-sdk');
        setSdk(sdk);
        setIsSDKLoaded(true);

        // Initialize the SDK
        sdk.actions.ready();
        await sdk.actions.addFrame()
      } catch (error) {
        console.error('Failed to load the Farcaster Frame SDK:', error);
      }
    };

    loadSDK();
  }, []);

  if (!isSDKLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <></>
  )
}
