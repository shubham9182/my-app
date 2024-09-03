// submit.js
import { useStore } from './store';

export const SubmitButton = () => {
    const { nodes, edges } = useStore();

    const handleSubmit = async () => {
        const pipelineData = { nodes, edges };
        const response = await fetch('/pipelines/parse', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(pipelineData),
        });
        const result = await response.json();
        alert(`Nodes: ${result.num_nodes}, Edges: ${result.num_edges}, Is DAG: ${result.is_dag}`);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button type="button" onClick={handleSubmit}>Submit</button>
        </div>
    );
};
