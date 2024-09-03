import React from 'react';
import { Handle, Position } from 'reactflow';

const BaseNode = ({ id, data, title, handles }) => {
    return (
        <div style={{ width: 200, height: 80, border: '1px solid black' }}>
            <div>
                <span>{title}</span>
            </div>
            <div>
                {handles.map((handle) => (
                    <Handle
                        key={handle.id}
                        type={handle.type}
                        position={handle.position}
                        id={`${id}-${handle.id}`}
                        style={handle.style}
                    />
                ))}
            </div>
            {data && Object.keys(data).map((key) => (
                <div key={key}>
                    <label>
                        {key}:
                        <input
                            type="text"
                            value={data[key]}
                            onChange={(e) => handleChange(e, id, key)}
                        />
                    </label>
                </div>
            ))}
        </div>
    );
};

const handleChange = (e, id, key) => {
    // Function to handle the changes in node data, such as name and type
    // Implement logic to update state here, potentially using a state management tool
};

export default BaseNode;
