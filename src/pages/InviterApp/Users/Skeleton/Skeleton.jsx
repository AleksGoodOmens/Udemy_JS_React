import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={300}
    height={100}
    viewBox="0 0 300 100"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="93" y="62" rx="3" ry="3" width="52" height="6" /> 
    <circle cx="40" cy="40" r="40" /> 
    <rect x="93" y="12" rx="11" ry="11" width="71" height="18" /> 
    <rect x="186" y="12" rx="11" ry="11" width="98" height="18" /> 
    <rect x="149" y="61" rx="0" ry="0" width="161" height="7" />
  </ContentLoader>
)


export default Skeleton

