export const getManagePurchaseUrlFor = (
	targetSiteSlug: string,
	targetPurchaseId: string | number
) => `/purchases/subscriptions/${ targetSiteSlug }/${ targetPurchaseId }`;

export const getConfirmCancelDomainUrlFor = (
	targetSiteSlug: string,
	targetPurchaseId: string | number
) => `/purchases/subscriptions/${ targetSiteSlug }/${ targetPurchaseId }/confirm-cancel-domain`;

export const getCancelPurchaseUrlFor = (
	targetSiteSlug: string,
	targetPurchaseId: string | number
) => `/purchases/subscriptions/${ targetSiteSlug }/${ targetPurchaseId }/cancel`;

export const getPurchaseListUrlFor = ( targetSiteSlug: string ) =>
	`/purchases/subscriptions/${ targetSiteSlug }`;
