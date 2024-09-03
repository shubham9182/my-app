import React from 'react';
import { Position } from 'reactflow';
import BaseNode from './BaseNode';

export const InputNode = (props) => {
    const handles = [
        { id: 'value', type: 'source', position: Position.Right }
    ];

    return <BaseNode {...props} title="Input" handles={handles} />;
};
