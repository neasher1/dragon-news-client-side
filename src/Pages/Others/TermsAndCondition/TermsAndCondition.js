import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
    return (
        <div>
            <h2>Terms And Conditions Page</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quod? Repellendus laborum minus repudiandae corporis dicta, repellat, aperiam consequuntur commodi ratione autem rerum nulla aliquid nostrum laudantium. Repellat, quibusdam illo!</p>
            <p>Go Back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default TermsAndCondition;