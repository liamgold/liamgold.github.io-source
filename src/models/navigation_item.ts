
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.2.0'
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class NavigationItem extends ContentItem {
    public title: Elements.TextElement | undefined;
    public contentItem: Elements.LinkedItemsElement<ContentItem> | undefined;
    public redirectToItem: Elements.LinkedItemsElement<ContentItem> | undefined;
    public redirectToUrl: Elements.TextElement | undefined;
    public childNavigationItems: Elements.LinkedItemsElement<ContentItem> | undefined;
    public urlSlug: Elements.UrlSlugElement | undefined;
    constructor() {
        super({
            propertyResolver: ((elementName: string) => {
                if (elementName === 'content_item') {
                    return 'contentItem';
                }
                if (elementName === 'redirect_to_item') {
                    return 'redirectToItem';
                }
                if (elementName === 'redirect_to_url') {
                    return 'redirectToUrl';
                }
                if (elementName === 'child_navigation_items') {
                    return 'childNavigationItems';
                }
                if (elementName === 'url_slug') {
                    return 'urlSlug';
                }
                return elementName;
            })
        });
    }
}
