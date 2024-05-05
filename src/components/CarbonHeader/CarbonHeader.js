import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from '@carbon/react';
import Link from 'next/link';
import { Content, Theme } from '@carbon/react';

const CarbonHeader = () => (
  <div>
    <Theme theme="g100">
      <HeaderContainer
        render={({ isSideNavExpanded, onClickSideNavExpand }) => (
          <Header aria-label="Carbon Tutorial">
            <SkipToContent />
            <HeaderMenuButton
              aria-label="Open menu"
              onClick={onClickSideNavExpand}
              isActive={isSideNavExpanded}
            />
            <Link href="/" passHref legacyBehavior>
              <HeaderName href="/" prefix="IBM">
                Carbon Tutorial
              </HeaderName>
            </Link>
            <HeaderNavigation aria-label="Carbon Tutorial">
              <Link href="/repos" passHref legacyBehavior>
                <HeaderMenuItem href="/repos">Repositories</HeaderMenuItem>
              </Link>
            </HeaderNavigation>
            <SideNav
              aria-label="Side navigation"
              expanded={isSideNavExpanded}
              isPersistent={false}
            >
              <SideNavItems>
                <HeaderSideNavItems>
                  <Link href="/repos" passHref legacyBehavior>
                    <HeaderMenuItem href="/repos">Repositories</HeaderMenuItem>
                  </Link>
                </HeaderSideNavItems>
              </SideNavItems>
            </SideNav>
            <HeaderGlobalBar />
          </Header>
        )}
      />
    </Theme>
  </div>
);

export default CarbonHeader;
