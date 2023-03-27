export interface UITags {
    actionType: {
        single: number,
        bulk: number
    };
    inputType: {
        text: number,
        audio: number,
        image: number
    };
    outputType: {
        text: number,
        audio: number,
        image: number
    };
    informationDensity: {
        dense: number,
        spaciouse: number
    },
    editableMode: "read-only" | "editable";
    complexity: 'simple' | 'complex';
    size: 'small' | 'medium' | 'large';
    theme: 'light' | 'dark';

}
