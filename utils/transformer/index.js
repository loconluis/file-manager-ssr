
import Workspace from './workspace.transform'
import Empresa from './empresa.transform'
import Area from './area.transform'
import Puesto from './puesto.transform'
import Persona from './persona.transform'

export function Transformer(nodeId = null, nodeType){
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
/**
 * 
 * @param {JSON} data {Needs a JSON with data to map on the structure}
 * @param {JSON} structure {Needs a JSON with a the structure of the data to map}
 * 
 */
export const mapDataToStructure = (data, structure) => {
    if (!data || !structure) {return false};
    var newStructure={};
    for (var value in structure){
      newStructure[value]=Object.assign(structure[value],{}) ;
      for (var val in data){
        if (val==value){
          if (!!data[val] && data[val] instanceof Object){
            newStructure[value].value= data[val][newStructure[value].valuekey];
          }else{
            newStructure[value].value= data[val];
          }
        }
      }
    }
    return newStructure;
  }