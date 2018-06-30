
import Workspace from './workspace.transform'
import Empresa from './empresa.transform'
import Area from './area.transform'
import Puesto from './puesto.transform'
import Personas from './persona.transform'

export function Transformer(nodeId, nodeType){
    switch(nodeType){
        case 'workspace':
            return new Workspace(nodeId, nodeType);
            break;
        case 'area':
            return new Area(nodeId, nodeType);
            break;
        case 'puesto':
            return new Puesto(nodeId, nodeType);
            break;
        case 'persona':
            return new Persona(nodeId, nodeType);
            break;
    }
}