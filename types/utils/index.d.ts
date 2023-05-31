export namespace IDS {
    const VERTICAL_GUIDE: string;
    const HORIZONTAL_GUIDE: string;
}
export function addPointTovertices(map: any, vertices: any, coordinates: any, forceInclusion: any): void;
export function createSnapList(map: any, draw: any, currentFeature: any): any[][];
export function snap(state: any, e: any): {
    lng: number;
    lat: number;
};
export function getGuideFeature(id: any): {
    id: any;
    type: any;
    properties: {
        isSnapGuide: string;
    };
    geometry: {
        type: any;
        coordinates: any[];
    };
};
export function shouldHideGuide(state: any, geojson: any): boolean;
