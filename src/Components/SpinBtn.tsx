import React, { useState } from 'react';

const SpinBtn = () => {
    const [load,setLoad]=useState(false)
  return (
    <div>
      <button className="btn btn-primary" type="button" disabled>
  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  <span className="sr-only">Loading...</span>
</button>

    </div>
  );
}

export default SpinBtn;
