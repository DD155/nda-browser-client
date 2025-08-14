import React from 'react';
import { Link } from 'react-router';

const Landing: React.FC = () => {
  return (
    <div>
        <Link to="/register">Go to Register </Link> <br />
        <Link to="/onboarding">Go to Onboarding </Link>
    </div>)
};

export default Landing;