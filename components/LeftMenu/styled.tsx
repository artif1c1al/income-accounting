import styled from "@emotion/styled";

const LeftMenu = styled.div`
  //position: absolute;
  //top: 0;
  //bottom: 0;
  //left: 0;
  background: #fff;

`

const MenuList = styled.ul`
  padding-top: 40px;
  height: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`

const MenuItem = styled.li`
  text-decoration: none;
  list-style: none;
  padding: 13px 30px;
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
  color: rgba(0, 0, 0, 0.5);
`

const LogoWrapper = styled.div`
  padding: 30px 45px;
`

export default {
  LeftMenu,
  MenuItem,
  MenuList,
  LogoWrapper
}