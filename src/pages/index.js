import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Flex, AspectRatio, Box } from "theme-ui"

export default ({ data }) => (
  <div>
    <Flex>
      <Box sx={{width: 300, border: "1px solid black"}}>
        <AspectRatio ration={1}>
          <Img fixed={data.file.childImageSharp.fixed} style={{height: "100%"}} imgStyle={{ objectFit: "contain", objectPosition: "bottom center", width: "100%", height: "100%" }} />
        </AspectRatio>
      </Box>
      <Box sx={{width: 50}}></Box>
      <Box sx={{width: 300, border: "1px solid black"}}>
        <AspectRatio ration={1}>
          <Img fluid={data.file.childImageSharp.fluid} style={{ height: "100%" }} imgStyle={{ objectFit: "contain", objectPosition: "bottom center", width: "100%", height: "100%"}} />
        </AspectRatio>
      </Box>
      <Box sx={{ width: 50 }}></Box>
      <Box sx={{ width: 300, border: "1px solid black" }}>
        <AspectRatio ration={1}>
          <Img fluid={data.file.childImageSharp.fluid} style={{ height: "100%" }} imgStyle={{ objectFit: "contain", objectPosition: "bottom center", top: "auto", bottom: "0", width: "100%", height: "125%" }} />
        </AspectRatio>
      </Box>
    </Flex>
  </div>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "bottle-standard.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`