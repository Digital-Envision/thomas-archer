export interface SanityFiles {
	asset: {
		_ref: string
		_type: string
	}
	_key: string
	_type: string
}

export interface SEO {
	description: string;
	image: {
		_type: "image";
		asset: {
			_ref: string;
			_type: "reference";
		};
	};
	title: string;
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
export interface SanityImage {
	_type: "image";
	asset: {
		_ref: string;
		_type: "reference";
	}
}

export interface HubspotForm {
	formId: string;
	portalId: string;
	region: string;
}

export interface Hubspot {
	bookingSessionForm: HubspotForm;
	contactForm: HubspotForm;
	enquireFlyout: HubspotForm;
	inclusionsBrochure: HubspotForm;
	priceList: HubspotForm;
}