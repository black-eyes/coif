import { ADD_TO_ITEMS, REMOVE_ITEM, ADD_OPERATOR, ADD_DATE_RDV } from '../actions/Prestation'
import PrestItem from '../../models/prestation'
import OperatorItem from '../../models/Operator'

const initialState = {
    items : {},
    operator : {},
    dateRDV : ''
    //userProducts: PRODUCTS.filter(prod => prod.ownerId === 'u1')
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_ITEMS :
            const addedPrestation = action.prestation
            const prestTitle = addedPrestation.title
            const prestdescription = addedPrestation.address

            if(state.items[addedPrestation]) {
                console.log('is selected')
            } else {
                console.log(prestdescription+' prestdescription ')
                const newPrestItem = new PrestItem(1,prestTitle,prestdescription)
                return {
                    ...state,
                    items : {
                        ...state.items,
                        [addedPrestation.id] : newPrestItem
                    }
                }
            }
        case REMOVE_ITEM : 
            const updatePrestItem = {
                ...state.items
            }
            delete updatePrestItem[action.pid]

            return {
                ...state,
                items : updatePrestItem
            }
        case ADD_OPERATOR : 
            const addedOperator = action.operator
            const operatorId = addedOperator.id
            const operatorName = addedOperator.name 
            const operatorImage = addedOperator.imageUrl

            if(state.operator[addedOperator]){

            } else {
                const newOperatorItem = new OperatorItem(operatorId, operatorName, operatorImage)
                console.log(newOperatorItem)
                return {
                    ...state,
                    items : { ...state.items},
                    operator : newOperatorItem
                }
            }
        case ADD_DATE_RDV : 
            const dateRdv = action.dateRdv
            console.log(dateRdv+ ' hhhhhhhh')
            return {
                ...state,
                items : {...state.items},
                operator : {...state.operator},
                dateRDV : dateRdv
            }
    }
    return state;
};