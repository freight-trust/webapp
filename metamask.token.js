//
//
//
import MetaMaskOnboarding from '@metamask/onboarding';

const tokenAddress = '0x49230c43f3343a509af16196a0f6be4d49175c48';
const tokenSymbol = 'EDI';
const tokenDecimals = 18;
const tokenImage =
  'https://raw.githubusercontent.com/freight-trust/branding/master/logo_electric/Freight%20Trust%20%26%20Clearing%20Logo%40half.png';

try {
  // wasAdded is a boolean. Like any RPC method, an error may be thrown.
  const wasAdded = await ethereum.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20', // Initially only supports ERC20, but eventually more!
      options: {
        address: tokenAddress, // The address that the token is at.
        symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
        decimals: tokenDecimals, // The number of decimals in the token
        image: tokenImage, // A string url of the token logo
      },
    },
  });

  if (wasAdded) {
    console.log('Thanks for your interest!');
  } else {
    console.log('Your loss!');
  }
} catch (error) {
  console.log(error);
}
