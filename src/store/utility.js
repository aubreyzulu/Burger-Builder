export const updateObjectState = (oldObjectState, updatedObjectState) => {
    return {
        ...oldObjectState,
        ...updatedObjectState
    };
};