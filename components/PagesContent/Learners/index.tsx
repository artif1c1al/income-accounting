import LearnersGrid from "./LearnersGrid";
import styled from "@emotion/styled";

const LearnersPage = styled.div`
  padding: 30px;
  background: #f5f5f5; 
  width: 100%;
  min-height: 100vh;
`


export default function Learners() {
  return (
    <LearnersPage>
      <LearnersGrid/>
    </LearnersPage>
  )
}