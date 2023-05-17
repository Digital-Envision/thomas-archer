export interface SanityFiles {
	asset: {
		_ref: string
		_type: string
	}
	_key: string
	_type: string
}


export interface PaginationData {
	page: number;
	limit: number;
	counts: number;
	pages: number;
	isMore: boolean;
}
export interface RouteDetail {
	route: []; detail: []; isDetailPage: boolean
}