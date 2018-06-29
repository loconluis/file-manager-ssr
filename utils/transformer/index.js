
import Workspace from './workspace.tranform'

export function Transformer(nodeId, nodeType){
    switch(nodeType){
        case 'workspace':
            return new Workspace(nodeId, nodeType);
            break;
        case 'area':
            break;
        case 'puesto':
            break;
        case 'persona':
            break;
    }
}