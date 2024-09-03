import React from 'react';
import BaseNode from './BaseNode';

export const MathNode = (props) => {
    const handles = [
        { id: 'input1', type: 'target', position: Position.Left, style: { top: '25%' } },
        { id: 'input2', type: 'target', position: Position.Left, style: { top: '75%' } },
        { id: 'output', type: 'source', position: Position.Right }
    ];

    return <BaseNode {...props} title="Math" handles={handles} />;
};
