import React from 'react';

export default ({ title, subtitle, style }) => (
    <>
        <p style={{ color: 'red', fontSize: 64, ...style }}>{title}</p>
        <p style={{ color: 'green' }}>{subtitle}</p>
    </>
);