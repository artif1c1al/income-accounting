import styled from '@emotion/styled'
import LeftMenu from "../components/LeftMenu";
import Learners from "../components/PagesContent/Learners"
import BasicCSS from "../components/BasicCSS";


const IndexPage = () => (
  <Page>
    <BasicCSS/>
    <LeftMenu/>
    <Learners/>
  </Page>
)

const Page = styled.div`
  display: flex;
  align-items: center;
`
export default IndexPage
