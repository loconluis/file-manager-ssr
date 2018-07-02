
import Workspace from './workspace.transform'
import Empresa from './empresa.transform'
import Area from './area.transform'
import Puesto from './puesto.transform'
import Persona from './persona.transform'

export function Transformer(nodeId, nodeType){
    switch(nodeType){
        case 'workspace':
            return new Workspace(nodeId);
            break;
        case 'empresa':
            return new Empresa(nodeId);
            break;
        case 'area':
            return new Area(nodeId);
            break;
        case 'puesto':
            return new Puesto(nodeId);
            break;
        case 'persona':
            return new Persona(nodeId);
            break;
    }
}