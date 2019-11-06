export const ADD_TO_ITEMS = 'ADD_TO_ITEMS'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const ADD_OPERATOR = 'ADD_OPERATOR'
export const ADD_DATE_RDV = 'ADD_DATE_RDV'

export const addToItems = prestation => {
    return { type : ADD_TO_ITEMS, prestation : prestation}
}

export const removeItem = prestId => {
    return { type : REMOVE_ITEM, pid : prestId}
}

export const addOperator = operator => {
    return { type : ADD_OPERATOR, operator : operator}
}

export const addDateRDV = dateRdv => {
    return { type : ADD_DATE_RDV, dateRdv : dateRdv}
}