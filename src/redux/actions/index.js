
let nextItemID = 2;

const addItem = (label) => {
  return {
    type: 'ADD_ITEM',
    payload: {
      label,
      id: ++nextItemID
    }
  }
}

const search = (label) => {    
  return {
    type: 'SEARCH',
    payload: label     
  }    
}

export { addItem, search };

