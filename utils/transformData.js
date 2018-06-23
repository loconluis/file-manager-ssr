import _ from 'lodash';


// Transform data for nodes
export const transformDataTree = (data) => {
  return data.map(_val => {
    let temp = transformNode(_val)
    temp.childs = transformDataTree(temp.childs)
    return temp;
  })
}
// transform a single node
export const transformNode = (node) => {
  let _props = _.omit(node, ['children'])
  return {
    id: node._id,
    title: node.label,
    type: 'area',
    parentId: node.areapadre ? node.areapadre._id : undefined,
    props: {
      ..._props
    },
    childs: node.children || []
  }
}

// Find a node an retur
export const getSpecificNode = (treeData, id, auxArr = []) => {
  let newArr = auxArr;
  treeData.map(node => {
    const idMatch = node.id.includes(id)
    // const parentId = node.parentId.includes(parentID)
    if (idMatch) {
      console.log('---HICE MATCH---');
      newArr.push(node)
    } else {
      if (node.childs) {
        return getSpecificNode(node.childs, id, newArr)
      }
    }
  })
  return newArr;
}