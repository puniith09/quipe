import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Web3Button = () => {
  const history = useHistory();

  useEffect(() => {
    const checkConnection = async () => {
      // Check if MetaMask is installed and connected
      if (
        typeof window.ethereum !== "undefined" &&
        window.ethereum.isConnected()
      ) {
        // Redirect to dashboard page
        history.push("/dashboard");
      }
    };

    checkConnection();
  }, [history]);

  const connectToMetaMask = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        // Redirect to dashboard page after successful connection
        history.push("/dashboard");
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      console.error("MetaMask not detected");
    }
  };

  return React.createElement(
    "button",
    { onClick: connectToMetaMask },
    "Connect with MetaMask"
  );
};

export default Web3Button;
