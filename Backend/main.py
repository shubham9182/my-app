from fastapi import FastAPI
from pydantic import BaseModel
import networkx as nx

app = FastAPI()

class PipelineData(BaseModel):
    nodes: list
    edges: list

@app.post("/pipelines/parse")
async def parse_pipeline(data: PipelineData):
    G = nx.DiGraph()
    G.add_nodes_from([node['id'] for node in data.nodes])
    G.add_edges_from([(edge['source'], edge['target']) for edge in data.edges])

    num_nodes = G.number_of_nodes()
    num_edges = G.number_of_edges()
    is_dag = nx.is_directed_acyclic_graph(G)

    return {"num_nodes": num_nodes, "num_edges": num_edges, "is_dag": is_dag}
