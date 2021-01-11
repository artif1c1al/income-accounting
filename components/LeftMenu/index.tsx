import Logo from "./Logo";
import Lessons from "./Icons/Lessons";
import Students from "./Icons/Students";
import Trainers from "./Icons/Trainers";
import Finences from "./Icons/Finances";
import Aboniments from "./Icons/Aboniments";
import CrmAccess from "./Icons/CrmAccess";
import Mailing from "./Icons/Mailing";
import Reports from "./Icons/Reports";
import Settings from "./Icons/Settings";
import S from './styled'

export default function LeftMenu () {
  return (
  <S.LeftMenu>
    <S.LogoWrapper>
      <Logo/>
    </S.LogoWrapper>
    <S.MenuList>
      <S.MenuItem><Lessons/>Занятия</S.MenuItem>
      <S.MenuItem><Students/>Учащиеся</S.MenuItem>
      <S.MenuItem><Trainers/>Тренеры</S.MenuItem>
      <S.MenuItem><Finences/>Финансы</S.MenuItem>
      <S.MenuItem><Aboniments/>Абонимент</S.MenuItem>
      <S.MenuItem><CrmAccess/>Доступ в CRM</S.MenuItem>
      <S.MenuItem><Mailing/>Рассылки</S.MenuItem>
      <S.MenuItem><Reports/>Отченты</S.MenuItem>
      <S.MenuItem><Settings/>Настройки</S.MenuItem>
    </S.MenuList>
  </S.LeftMenu>
  )
}