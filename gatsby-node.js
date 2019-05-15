const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const infoFile = path.resolve(`./src/components/contentful.js`);
  return graphql(
    `
      {
        allContentfulPersonalWebsite {
          edges {
            node {
              title
              author
              slug
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    const information = result.data.allContentfulPersonalWebsite.edges[0].node;
    console.log(information);
    createPage({
      path: information.slug,
      component: infoFile,
      context: {
        slug: information.slug
      }
    });
  })
}