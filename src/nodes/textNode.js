// nodes/TextNode.js
import { useState, useEffect } from 'react';
import BaseNode from './BaseNode';

export const TextNode = (props) => {
    const [currText, setCurrText] = useState(props.data?.text || '{{input}}');
    const [size, setSize] = useState({ width: 200, height: 80 });

    useEffect(() => {
        const lines = currText.split('\n').length;
        const newHeight = 40 + lines * 20;
        const newWidth = Math.max(200, currText.length * 8);
        setSize({ width: newWidth, height: newHeight });
    }, [currText]);

    return (
        <div style={{ width: size.width, height: size.height, border: '1px solid black' }}>
            <BaseNode {...props} title="Text" handles={[]} />
            <input
                type="text"
                value={currText}
                onChange={(e) => setCurrText(e.target.value)}
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    );
};
