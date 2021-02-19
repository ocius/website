import { useStaticQuery, graphql } from 'gatsby';

const useNavItems = () => {
  const {
    allNavItemsYaml: { edges },
  } = useStaticQuery(graphql`
    query MenuItemsQuery {
      allNavItemsYaml {
        edges {
          node {
            title
            path
            pages {
              title
              path
            }
          }
        }
      }
    }
  `);

  const navItems = edges.map(({ node }) => node);
  return navItems;
};

export default useNavItems;
