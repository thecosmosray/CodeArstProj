import { v4 as uuidv4 } from 'uuid';
export type Services = {
    id: any;
    name: string;
    description: string;
};

export type AdminState = {
    services: Services[];
    servicesName: string;
    description: string;
    editingindex: number | null;
    logeedIn: boolean
};


const storedServices = localStorage.getItem("services");
export const initialState: AdminState = {
    services: storedServices ? JSON.parse(storedServices) : [],
    servicesName: "",
    description: "",
    editingindex: null,
    logeedIn: false
};


type Action =
    | { type: "SET_SERVICES"; payload: Services[] }
    | { type: "SET_SERVICE_NAME"; payload: string }
    | { type: "SET_DESCRIPTION"; payload: string }
    | { type: "EDIT_SERVICE"; payload: number }
    | { type: "DELETE_SERVICE"; payload: number }
    | { type: "ADD_OR_UPDATE_SERVICE" }
    | { type: "LOGIN" }
    | { type: "LOGOUT" };

export const ReducerFunc = (state: AdminState, action: Action): AdminState => {
    switch (action.type) {
        case "SET_SERVICES":
            return {
                ...state,
                services: action.payload,
            };

        case "SET_SERVICE_NAME":
            return {
                ...state,
                servicesName: action.payload,
            };

        case "SET_DESCRIPTION":
            return {
                ...state,
                description: action.payload,
            };

        case "EDIT_SERVICE": {
            const selected = state.services[action.payload];
            return {
                ...state,
                servicesName: selected.name,
                description: selected.description,
                editingindex: action.payload,
            };
        }

        case "DELETE_SERVICE": {
            const updatedServices = state.services.filter((_, i) => i !== action.payload);
            const isEditingDeleted = state.editingindex === action.payload;
            return {
                ...state,
                services: updatedServices,
                ...(isEditingDeleted && {
                    servicesName: "",
                    description: "",
                    editingindex: null,
                }),
            };
        }

        case "ADD_OR_UPDATE_SERVICE": {
            const trimmedName = state.servicesName.trim();
            const trimmedDesc = state.description.trim();
            const newService: Services = {
                name: trimmedName, description: trimmedDesc,
                id: uuidv4()
            };

            if (state.editingindex !== null) {
                const updatedServices = [...state.services];
                updatedServices[state.editingindex] = newService;
                return {
                    ...state,
                    services: updatedServices,
                    servicesName: "",
                    description: "",
                    editingindex: null,
                };
            } else {
                return {
                    ...state,
                    services: [...state.services, newService],
                    servicesName: "",
                    description: "",
                    editingindex: null,
                };
            }

        }
        case "LOGIN":
            return {
                ...state,
                logeedIn: true,
            };

        case "LOGOUT":
            return {
                ...state,
                logeedIn: false,
            };


        default:
            return state;
    }
};

