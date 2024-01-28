// Portfolio.js
import React from 'react';
import Project from './Project'; // Adjust the path accordingly

const Portfolio = () => {
  return (
    <div>
      <Project
        title="Inventory Billing App"
        description="A full-stack project for managing inventory and generating billing invoices."
        frontendLink="https://github.com/your-username/inventory-frontend"
        backendLink="https://github.com/your-username/inventory-backend"
        imageSrc="/path/to/inventory-app-screenshot.jpg"
      />
      {/* Add more projects as needed */}
    </div>
  );
};

export default Portfolio;




