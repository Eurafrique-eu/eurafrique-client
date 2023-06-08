import React from "react";

const LinksBlock = () => {
  const handleButtonClick = (buttonIndex) => {
    // Handle button click logic here
    // You can use the buttonIndex parameter to identify which button was clicked
    // and perform the corresponding action, such as opening a modal
  };

  return (
    <div className="links-container">
      <h2>PUISQUE VOUS ÊTES LÀ …</h2>
      <p>Des interrogations? Vouloir communiquer...</p>
      <button onClick={() => handleButtonClick(1)}>NOUS CONTACTER</button>
      <button onClick={() => handleButtonClick(2)}>NOUS REJOINDRE</button>
      <button onClick={() => handleButtonClick(3)}>NOUS SOUTENIR</button>
    </div>
  );
};

export default LinksBlock;
