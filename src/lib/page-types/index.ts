export { portfolioContent } from './portfolio-content';
export { startupContent } from './startup-content';
export { productContent } from './product-content';
export { financeContent } from './finance-content';
export { localContent } from './local-content';
export { eventContent } from './event-content';
export { campaignContent } from './campaign-content';
export { universalContent } from './universal-content';
export type { ContentPools } from './content-pools';

import type { PageCategory } from '../chaos';
import type { ContentPools } from './content-pools';
import { portfolioContent } from './portfolio-content';
import { startupContent } from './startup-content';
import { productContent } from './product-content';
import { financeContent } from './finance-content';
import { localContent } from './local-content';
import { eventContent } from './event-content';
import { campaignContent } from './campaign-content';

export function getContentPools(category: PageCategory): ContentPools {
  const map: Record<PageCategory, ContentPools> = {
    portfolio: portfolioContent,
    startup:   startupContent,
    product:   productContent,
    finance:   financeContent,
    local:     localContent,
    event:     eventContent,
    campaign:  campaignContent,
  };
  return map[category] ?? portfolioContent;
}
